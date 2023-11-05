'use server';

import { z } from 'zod';
import { AddOrEditCatFormSchema } from '@/lib/schema';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Cat, Prisma } from '@prisma/client';

type Inputs = z.infer<typeof AddOrEditCatFormSchema>;

export type SearchParamsType = {
  [key: string]: string | undefined;
};

type MutationResponse = {
  success: boolean;
  data?: string;
};

export async function getCats(searchParams: SearchParamsType) {
  try {
    let cats;

    if (searchParams?.search && searchParams?.sort) {
      const { search, sort } = searchParams as {
        search: string;
        sort: Prisma.SortOrder;
      };
      cats = await prisma.cat.findMany({
        where: {
          name: {
            contains: search,
          },
        },

        orderBy: [
          {
            name: sort,
          },
        ],
      });
    } else if (searchParams?.search && !searchParams?.sort) {
      const { search } = searchParams;
      cats = await prisma.cat.findMany({
        where: {
          name: {
            contains: search,
          },
        },
      });
    } else {
      const { sort } = searchParams as {
        sort: Prisma.SortOrder;
      };
      cats = await prisma.cat.findMany({
        orderBy: [
          {
            name: sort,
          },
        ],
      });
    }

    return { data: cats, error: null };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

export async function createCat(data: Inputs): Promise<MutationResponse> {
  try {
    const result = AddOrEditCatFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false };
    }

    const cat = await prisma.cat.create({
      data: result.data,
    });

    revalidatePath('/');

    return { success: true, data: `${cat.name} created successfully!` };
  } catch (e) {
    console.log(e);
    return { success: false, data: 'Somethin went wrong!' };
  }
}

export async function deleteCat(data: Cat): Promise<MutationResponse> {
  try {
    const result = AddOrEditCatFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false };
    }

    const cat = await prisma.cat.delete({
      where: {
        id: data.id,
      },
    });

    revalidatePath('/');

    return {
      success: true,
      data: `${cat.name} deleted successfully!`,
    };
  } catch (e) {
    console.log(e);
    return { success: false, data: 'Somethin went wrong!' };
  }
}

export async function updateCat(data: Cat): Promise<MutationResponse> {
  try {
    const result = AddOrEditCatFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false };
    }

    const cat = await prisma.cat.update({
      where: {
        id: data.id,
      },
      data,
    });

    revalidatePath('/');

    return {
      success: true,
      data: `${cat.name} updated successfully!`,
    };
  } catch (e) {
    console.log(e);
    return { success: false, data: 'Somethin went wrong!' };
  }
}
