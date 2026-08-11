const { UnauthorizedError } = require("../../../common/errors/AppErrors");
const { verifyAccessToken } = require("../../../config/jwt");
const { getAccessTokenFromRequest } = require("../utils/cookie");

function authenticate(req, res, next) {
  const tokenFromCookie = getAccessTokenFromRequest(req);
  const authHeader = req.headers.authorization || "";
  const tokenFromHeader = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : null;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return next(new UnauthorizedError("Authentification requise."));
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = {
      id: payload.sub,
      sessionId: payload.sessionId,
    };
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = { authenticate };
