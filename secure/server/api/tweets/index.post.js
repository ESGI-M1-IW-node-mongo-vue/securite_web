import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const {content} = await readBody(event);
    const token = getHeader(event, 'Authorization');

    const user = jwt.verify(token.replace('Bearer ', ''), "pouetpouetpouet");

    let tweet;
    try {
        tweet = await prisma.tweet.create({
            data: {
                content,
                author: {
                    connect: {
                        id: user.userId
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Error creating tweet',
        });
    }

    setResponseStatus(201);
    return tweet;
});