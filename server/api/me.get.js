import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


export default defineEventHandler(async event => {
    const token = getHeader(event, 'Authorization').replace('Bearer ', '');

    const decoded = jwt.verify(token, 'pouetpouetpouet');

    const user = await prisma.user.findUnique({
        select: {
            id: true,
            name: true,
            email: true
        },
        where: {
            id: decoded.userId
        }
    });


    return {user};
});
