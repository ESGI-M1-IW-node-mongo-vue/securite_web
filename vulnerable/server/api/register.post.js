import {PrismaClient} from '@prisma/client'
import crypto from 'crypto';

const prisma = new PrismaClient()

const hashPassword = async (plainPassword) => {
    try {
        // Utilisation de MD5 pour le hashage du mot de passe
        return crypto.createHash('md5').update(plainPassword).digest('hex');
    } catch (error) {
        throw error;
    }
};

export default defineEventHandler(async (event) => {
    const {name, password, email} = await readBody(event);
    const hashedPassword = await hashPassword(password);
    let user;
    try {
        user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
    } catch (error) {
        console.error('Error creating user:', error);
        if (error.code === 'P2002') {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email already exists',
            });
        }
        throw createError({
            statusCode: 500,
            statusMessage: 'Error creating user',
        });
    }

    setResponseStatus(201);
    return user;
});