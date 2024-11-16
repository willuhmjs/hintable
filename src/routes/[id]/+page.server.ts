import { ADMIN_LOGIN, JWT_SECRET } from '$env/static/private';
import jwt from "jsonwebtoken";


import { error, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
export const load = async ({ request, cookies, params }) => {
   console.log(params.id);
   const game = await prisma.game.findFirst({
     where: {
         id: Number(params.id)
     },
     select: {
          word: true,
          day: true,
          difficulty: true,
          hintDb: true
     }
});
    if (!game) {
         return error(404, "Game not found");
    }
    return {
          game
    };
};
