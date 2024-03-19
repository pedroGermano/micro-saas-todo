import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const listUsersController = async (
  request: Request,
  response: Response
) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  response.send(users);
};
