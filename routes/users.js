import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      id: {
        gt: 1,
      },
    },
    select: {
      id: true,
      names: true,
      posts: {
        select: {
          id: true,
          title: true,
          description: true,
        },
      },
    },
  });
  return res.status(200).json({ users });
});

export default router;
