import {PrismaClient} from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')

    const user = await prisma.user.findUnique({
        select: {
            id: true,
            name: true,
            email: true
        },
        where: {
            id: parseInt(id)
        }
    });

    return {user};
});
