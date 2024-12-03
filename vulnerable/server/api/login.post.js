import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default defineEventHandler(async event => {
    const body = await readBody(event);
    const {email, password} = body;

    const [user] = await prisma.$queryRawUnsafe(`SELECT * FROM "User" WHERE email = '${email}'`);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw createError({statusCode: 401, statusMessage: 'Invalid user or password'});
    }

    return {
        token: jwt.sign({userId: user.id}, "pouetpouetpouet", {expiresIn: '1h'})
    }
});
