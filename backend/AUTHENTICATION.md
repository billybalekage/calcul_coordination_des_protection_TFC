# Documentation de l'authentification

Cette documentation décrit le système d'authentification utilisé dans le dossier `backend` du projet. Elle couvre :

- Les flux d'authentification (inscription, connexion)
- Vérification d'email / activation de compte
- Réinitialisation de mot de passe
- Gestion des tokens (access / refresh)
- Protection des routes et middlewares
- Sécurité et bonnes pratiques
- Exemples d'API et schémas JSON

---

## 1. Principes généraux

Le backend expose des endpoints REST pour inscrire, authentifier et gérer les comptes utilisateurs. Le système utilise JWT pour l'authentification stateless et un token de rafraîchissement (refresh token) pour obtenir de nouveaux access tokens. Les mots de passe sont stockés hachés (bcrypt ou équivalent).

Les opérations sensibles (réinitialisation, changement de mot de passe, vérification d'email) doivent passer par des tokens à usage limité envoyés par email.

## 2. Entités et champs importants

- `User` : id, email, password_hash, is_verified, created_at, updated_at, last_login
- `RefreshToken` (optionnel) : id, user_id, token_hash, expires_at, created_at, revoked
- `PasswordResetToken` : token, user_id, expires_at, used
- `EmailVerificationToken` : token, user_id, expires_at, used

## 3. Inscription (Register)

Endpoint: `POST /auth/register`

Payload typique:

```
{
  "email": "user@example.com",
  "password": "P@ssw0rd!",
  "name": "Prénom Nom"
}
```

Processus:

1. Valider le format d'email et la force du mot de passe.
2. Vérifier si l'email est déjà utilisé.
3. Hacher le mot de passe (bcrypt, cost approprié).
4. Créer l'utilisateur avec `is_verified=false`.
5. Générer un `EmailVerificationToken` lié à l'utilisateur (token cryptographiquement sécurisé, durée courte 24h par défaut).
6. Envoyer l'email de vérification avec un lien vers `GET /auth/verify?token=...`.

Réponse: 201 Created (sans renvoyer le mot de passe ni les tokens d'authentification)

## 4. Vérification d'email

Endpoint: `GET /auth/verify?token=...` (ou `POST /auth/verify` avec JSON)

Processus:

1. Récupérer le token, vérifier signature et non-expiration.
2. Marquer l'utilisateur `is_verified=true` et marquer le token comme `used=true`.
3. Rediriger vers une page de confirmation frontend ou renvoyer un message JSON.

Sécurité:

- Le token doit être à usage unique et avoir une durée d'expiration limitée.
- Limiter le nombre de tentatives pour éviter le bruteforce.

## 5. Connexion (Login)

Endpoint: `POST /auth/login`

Payload:

```
{
  "email": "user@example.com",
  "password": "P@ssw0rd!"
}
```

Processus:

1. Rechercher l'utilisateur par email.
2. Vérifier `is_verified` (optionnel selon politique).
3. Comparer le mot de passe fourni avec le `password_hash` (bcrypt.compare).
4. Si OK, générer un JWT d'accès (p.ex. 15min) et un refresh token (p.ex. 7-30 jours).
5. Enregistrer le refresh token côté serveur (hashé) si on utilise une stratégie stateful.
6. Renvoyer `accessToken` et `refreshToken` (refresh token en HTTP-only secure cookie recommandé).

Réponse typique:

```
{
  "accessToken": "eyJ...",
  "refreshToken": "...",
  "expiresIn": 900
}
```

## 6. Gestion des tokens (Access / Refresh)

- Access token: JWT signé, durée courte (p.ex. 15 minutes).
- Refresh token: peut être un JWT ou un identifiant opaque stocké côté serveur. Doit être stocké en cookie `HttpOnly; Secure; SameSite=Strict` ou en storage côté client selon contraintes.
- Rotation des refresh tokens: à chaque usage de refresh, invalider l'ancien token et en émettre un nouveau pour réduire le risque de repliage.
- Révocation : fournir une route `POST /auth/logout` qui révoque le refresh token (supprime ou marque comme révoqué). Pour plus de sécurité, inclure un champ `token_version` ou `session_id` sur l'utilisateur.

Endpoint pour rafraîchir : `POST /auth/refresh`

Payload ou cookie: inclut le refresh token.

Processus:

1. Vérifier le refresh token (validité, non révoqué).
2. Émettre un nouveau access token (et idéalement un nouveau refresh token si rotation activée).

## 7. Réinitialisation de mot de passe (Forgot / Reset)

Flux en deux étapes:

1. Demande de réinitialisation

Endpoint: `POST /auth/forgot`

Payload: `{"email":"user@example.com"}`

Processus:

- Générer un `PasswordResetToken` (secure random token), stocker (hashé) et expirer en courte durée (p.ex. 1 heure).
- Envoyer par email un lien: `POST /auth/reset?token=...` ou `GET` puis page frontend proposant le nouveau mot de passe.

2. Réinitialisation

Endpoint: `POST /auth/reset`

Payload:

```
{
  "token": "...",
  "password": "NouveauxP@ssw0rd"
}
```

Processus:

1. Valider le token (non expiré, correspond à l'utilisateur, non utilisé).
2. Hacher le nouveau mot de passe et mettre à jour l'utilisateur.
3. Marquer le token comme utilisé.
4. Révoquer toutes les sessions / refresh tokens de l'utilisateur (optionnel mais recommandé).

## 8. Protection des routes et middlewares

Middleware commun: `authMiddleware` qui :

- Vérifie la présence d'un access token (header `Authorization: Bearer ...` ou cookie).
- Vérifie la signature du JWT et les claims (exp, sub, roles).
- Charge l'utilisateur et attache `req.user`.

Pour la protection par rôle : `requireRole('admin')` qui check `req.user.role`.

Exemples de middlewares présents dans le backend :

- `requestId`, `rateLimiter`, `securityHeaders`, `errorHandler`, `notFound`

## 9. Sécurité et bonnes pratiques

- Stocker les mots de passe avec bcrypt (cost >= 12) ou argon2.
- Toujours hacher / signer les tokens sensibles stockés en base (refresh tokens, reset tokens).
- Utiliser `HttpOnly`, `Secure`, `SameSite=Strict` pour les cookies contenant des tokens.
- Utiliser le header `Authorization` pour les APIs REST modernes quand cookies ne sont pas souhaités.
- Limiter les tentatives de login et de reset (rate limiting, captchas après plusieurs échecs).
- Enregistrer les événements de sécurité importants (login success/fail, password change, token revoke).
- Forcer la ré-authentification pour opérations sensibles (changement d'email, suppression de compte).
- Prévoir la révocation basée sur `token_version` ou `session_id` pour invalider rapidement tous les tokens d'un utilisateur.

## 10. Exemples d'API

- `POST /auth/register` — enregistrement
- `GET /auth/verify?token=...` — vérification email
- `POST /auth/login` — connexion, renvoie `accessToken` et `refreshToken`
- `POST /auth/refresh` — échange `refreshToken` contre un nouveau `accessToken`
- `POST /auth/forgot` — demande réinitialisation
- `POST /auth/reset` — appliquer nouveau mot de passe
- `POST /auth/logout` — révoquer le refresh token

Exemple de header Authorization:

```
Authorization: Bearer <accessToken>
```

## 11. Implémentation proposée dans ce repo

Le dossier `backend/src` contient des éléments liés à l'authentification :

- Middlewares: `middlewares/*` (rateLimiter, errorHandler, requestId...)
- Services et controllers sous `features/auth/` (contrôleurs, services, middleware, routes)

Points d'intégration :

- Utiliser `src/config/jwt.js` pour les secrets et la durée des tokens.
- Utiliser `src/config/mailer.js` pour l'envoi d'emails (verification, reset).
- Enregistrer les refresh tokens dans la base via Prisma (`prisma/` généré) si l'approche stateful est choisie.

## 12. Modèles de tokens et durée recommandée

- Access token (JWT) : 15 minutes
- Refresh token : 7–30 jours (selon besoin), rotation activée
- Email verification token : 24 heures
- Reset password token : 1 heure

## 13. Logs et monitoring

- Logger : `src/logger.js` — loguer événements d'authentification
- Surveiller les échecs de connexion et les taux d'utilisation des endpoints sensibles

## 14. Checklist de déploiement

- S'assurer que `JWT_SECRET` est présent et fort en prod
- Configurer `MAILER_*` pour l'envoi d'emails
- Activer HTTPS et sécuriser les cookies
- Activer rate-limiting global et endpoint-specific

---

Si vous voulez, je peux :

- Ajouter des exemples de contrôleurs Express/Node pour chaque endpoint dans `backend/src/features/auth/`.
- Mettre en place les migrations Prisma pour stocker les `RefreshToken`.
- Ajouter des tests unitaires pour les services d'authentification.

Dites-moi quelle action vous préférez comme suite.
