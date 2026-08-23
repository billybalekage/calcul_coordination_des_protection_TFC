const prismaModule = require("../../../config/prisma");
const {
  BadRequestError,
  ConflictError,
  NotFoundError,
} = require("../../../common/errors/AppErrors");

const userSelect = {
  id: true,
  name: true,
  email: true,
  avatarUrl: true,
  role: true,
  status: true,
  emailVerified: true,
  isTwoFactorEnabled: true,
  createdAt: true,
  updatedAt: true,
  _count: { select: { projects: true } },
};

function getPrisma() {
  return prismaModule.getPrismaClient();
}

async function getDashboard() {
  const prisma = getPrisma();
  const [users, admins, suspendedUsers, projects, results, recentProjects] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: "ADMIN" } }),
      prisma.user.count({ where: { status: "SUSPENDED" } }),
      prisma.project.count(),
      prisma.result.count(),
      prisma.project.findMany({
        take: 10,
        orderBy: { updatedAt: "desc" },
        select: {
          id: true,
          name: true,
          client: true,
          location: true,
          createdAt: true,
          updatedAt: true,
          user: { select: { id: true, name: true, email: true } },
          result: { select: { coordinationCheck: true } },
        },
      }),
    ]);

  return {
    statistics: {
      users,
      admins,
      suspendedUsers,
      projects,
      calculatedProjects: results,
    },
    recentProjects,
  };
}

async function listUsers({ search, status, role, page = 1, limit = 20 } = {}) {
  const normalizedPage = Math.max(1, Number(page) || 1);
  const normalizedLimit = Math.min(100, Math.max(1, Number(limit) || 20));
  const where = {};
  const filters = [];

  if (search) {
    filters.push({
      OR: [
        { name: { contains: search.trim(), mode: "insensitive" } },
        { email: { contains: search.trim(), mode: "insensitive" } },
      ],
    });
  }
  if (status) filters.push({ status });
  if (role) filters.push({ role });
  if (filters.length) where.AND = filters;

  const prisma = getPrisma();
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      select: userSelect,
      orderBy: { createdAt: "desc" },
      skip: (normalizedPage - 1) * normalizedLimit,
      take: normalizedLimit,
    }),
    prisma.user.count({ where }),
  ]);

  return {
    users,
    pagination: {
      page: normalizedPage,
      limit: normalizedLimit,
      total,
      pages: Math.ceil(total / normalizedLimit),
    },
  };
}

async function updateUser(userId, data, actingAdminId) {
  const allowedRoles = ["USER", "ADMIN"];
  const allowedStatuses = ["ACTIVE", "SUSPENDED"];
  const update = {};

  if (data.role !== undefined) {
    if (!allowedRoles.includes(data.role)) {
      throw new BadRequestError("Rôle utilisateur invalide.");
    }
    update.role = data.role;
  }
  if (data.status !== undefined) {
    if (!allowedStatuses.includes(data.status)) {
      throw new BadRequestError("Statut utilisateur invalide.");
    }
    update.status = data.status;
  }
  if (!Object.keys(update).length) {
    throw new BadRequestError("Aucune modification valide.");
  }
  if (
    userId === actingAdminId &&
    (update.role === "USER" || update.status === "SUSPENDED")
  ) {
    throw new ConflictError(
      "Vous ne pouvez pas désactiver vos propres accès administrateur.",
    );
  }

  const prisma = getPrisma();
  const existing = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });
  if (!existing) throw new NotFoundError("Utilisateur introuvable.");

  return prisma.user.update({
    where: { id: userId },
    data: update,
    select: userSelect,
  });
}

async function deleteUser(userId, actingAdminId) {
  if (userId === actingAdminId) {
    throw new ConflictError(
      "Vous ne pouvez pas supprimer votre propre compte.",
    );
  }
  const prisma = getPrisma();
  const existing = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });
  if (!existing) throw new NotFoundError("Utilisateur introuvable.");
  await prisma.user.delete({ where: { id: userId } });
}

async function listProjects({ search, page = 1, limit = 20 } = {}) {
  const normalizedPage = Math.max(1, Number(page) || 1);
  const normalizedLimit = Math.min(100, Math.max(1, Number(limit) || 20));
  const where = search
    ? { name: { contains: search.trim(), mode: "insensitive" } }
    : {};
  const prisma = getPrisma();
  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      where,
      skip: (normalizedPage - 1) * normalizedLimit,
      take: normalizedLimit,
      orderBy: { updatedAt: "desc" },
      include: {
        user: { select: { id: true, name: true, email: true } },
        powerSupply: true,
        result: true,
      },
    }),
    prisma.project.count({ where }),
  ]);
  return {
    projects,
    pagination: {
      page: normalizedPage,
      limit: normalizedLimit,
      total,
      pages: Math.ceil(total / normalizedLimit),
    },
  };
}

async function deleteProject(projectId) {
  const prisma = getPrisma();
  const existing = await prisma.project.findUnique({
    where: { id: projectId },
    select: { id: true },
  });
  if (!existing) throw new NotFoundError("Projet introuvable.");
  await prisma.project.delete({ where: { id: projectId } });
}

module.exports = {
  getDashboard,
  listUsers,
  updateUser,
  deleteUser,
  listProjects,
  deleteProject,
};
