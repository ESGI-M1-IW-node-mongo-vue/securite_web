import {PrismaClient} from '@prisma/client'
import jwt from "jsonwebtoken";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const token = getHeader(event, 'Authorization');

    const decoded = jwt.decode(token.replace('Bearer ', ''));

    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        });
    }

    return prisma.tweet.findMany({
        where: {
            authorId: decoded.userId
        },
        select: {
            id: true,
            content: true,
            createdAt: true
        }
    });


});