import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export default defineEventHandler(async event => {
    const body = await readBody(event);
    const {email, password} = body;

    const encrypted = bcrypt.hash(password, 10);

    const [user] = await prisma.$queryRawUnsafe(`SELECT * FROM "User" WHERE email = '${email}' AND password = '${encrypted}'`);

    if (!user) {
        throw createError({statusCode: 401, statusMessage: 'Invalid user or password'});
    }

    return {
        token: jwt.sign({userId: user.id}, "pouetpouetpouet", {expiresIn: '1h'})
    }
});
