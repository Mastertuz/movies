'use server'

import { prisma } from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function syncUser() {
  try {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) return;
    const existingUser = await prisma.user.findUnique({
      where: {
        clerkId: userId
      }
    });

    if (existingUser) return existingUser;
    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        image: user.imageUrl
      }
    });
    return dbUser;
  } catch (error) {
    console.log('Error in syncUser', error);
  }
}

export async function getUserByClerkId(clerkId: string) {
  return prisma.user.findUnique({
    where: {
      clerkId,
    },
  });
}

export async function getDbUserId(clerkUserId: string): Promise<string | null> {
  try {
    const user = await prisma.user.upsert({
      where: { clerkId: clerkUserId },
      update: {},
      create: {
        clerkId: clerkUserId,
      },
    });
    return user.id;
  } catch (error) {
    console.error('Error retrieving or creating user:', error);
    return null;
  }
}