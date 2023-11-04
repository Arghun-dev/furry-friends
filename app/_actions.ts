'use server';

import { z } from 'zod';
import { AddOrEditCatFormSchema } from '@/lib/schema';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

type Inputs = z.infer<typeof AddOrEditCatFormSchema>;

export async function createCat(data: Inputs) {
  const result = AddOrEditCatFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.format() };
  }

  const cat = await prisma.cat.create({
    data: result.data,
  });

  revalidatePath('/');

  return { date: cat };
}
