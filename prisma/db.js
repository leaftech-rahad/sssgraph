import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const db = {
  prisma: prisma,
};

module.exports = {
  db,
};
