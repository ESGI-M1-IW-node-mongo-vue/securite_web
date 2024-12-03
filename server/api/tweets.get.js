import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const token = getHeader(event, 'Authorization');

    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        });
    }

    return await prisma.tweet.findMany({});
});