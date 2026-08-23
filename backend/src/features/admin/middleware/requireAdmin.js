const {
  ForbiddenError,
  UnauthorizedError,
  NotFoundError,
} = require("../../../common/errors/AppErrors");
const prismaModule = require("../../../config/prisma");

async function requireAdmin(req, res, next) {
  try {
    if (!req.user?.id) {
      return next(new UnauthorizedError("Authentification requise."));
    }

    const user = await prismaModule.getPrismaClient().user.findUnique({
      where: { id: req.user.id },
      select: { id: true, role: true, status: true },
    });

    if (!user) return next(new NotFoundError("Utilisateur introuvable."));
    if (user.status !== "ACTIVE") {
      return next(new ForbiddenError("Ce compte est suspendu."));
    }
    if (user.role !== "ADMIN") {
      return next(new ForbiddenError("Accès administrateur requis."));
    }

    req.admin = user;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = { requireAdmin };
