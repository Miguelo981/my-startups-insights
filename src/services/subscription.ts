import { PrismaClient, type Subscription } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSubscription(email: string): Promise<Subscription | undefined> {
    const exists = await prisma.subscription.findUnique({
        where: {
            email
        }
    });

    if (exists) return;
    
    const createdSubscription = await prisma.subscription.create({
        data: {
            email
        }
    });

    return createdSubscription;
}