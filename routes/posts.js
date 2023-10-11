import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (_, res) => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      author: {
        select: {
          id: true,
          names: true,
        },
      },
    },
  });
  return res.status(200).json({ posts });
});

export default router;
