import {PrismaClient} from "@prisma/client";
import {H3Event} from "h3";
import jwt from 'jsonwebtoken';

const prisma: PrismaClient = new PrismaClient();

export default defineEventHandler(async (event: H3Event) => {
    const {token} = await readBody(event);

    if (!token)
        throw createError({
            statusCode: 400,
            statusMessage: 'Token is required'
        });

    const {userId} = jwt.decode(token, "pouetpouetpouet");

    let user: prisma.user;
    try {
        user = await prisma.user.findFirst({where: {id: userId}});
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Error finding user',
        })
    }

    setResponseStatus(201);
    return user;
});