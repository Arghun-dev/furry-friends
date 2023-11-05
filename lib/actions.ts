'use server';

/**
 * Server-Side Functions for Cat Management
 */

// Import statements
import { z } from 'zod';
import { AddOrEditCatFormSchema } from '@/lib/schema';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { Cat } from '@prisma/client';

// Type for form inputs
type Inputs = z.infer<typeof AddOrEditCatFormSchema>;

// Type for query parameters
export type SearchParamsType = {
  search?: string;
  sort?: 'asc' | 'desc';
};

// Type for mutation response
type MutationResponse = {
  success: boolean;
  data?: string;
};

/**
 * Retrieve a list of cats based on search and sort parameters.
 * @param searchParams - Search and sort parameters.
 * @returns {Promise<{ data: Cat[], error: any }>} - List of cats and optional error information.
 */
export async function getCats(searchParams: SearchParamsType) {
  try {
    const { search, sort } = searchParams;

    let cats;

    if (search && sort) {
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
    } else if (search) {
      cats = await prisma.cat.findMany({
        where: {
          name: {
            contains: search,
          },
        },
      });
    } else if (sort) {
      cats = await prisma.cat.findMany({
        orderBy: [
          {
            name: sort,
          },
        ],
      });
    } else {
      cats = await prisma.cat.findMany();
    }

    return { data: cats, error: null };
  } catch (error) {
    console.error('Error in getCats:', error);
    return { error };
  }
}

/**
 * Create a new cat based on the provided data.
 * @param data - Cat data to create.
 * @returns {Promise<MutationResponse>} - Success status and optional success message.
 */
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
  } catch (error) {
    console.error('Error in createCat:', error);
    return { success: false, data: 'Something went wrong!' };
  }
}

/**
 * Delete a cat based on the provided data.
 * @param data - Cat data to delete.
 * @returns {Promise<MutationResponse>} - Success status and optional success message.
 */
export async function deleteCat(data: Cat): Promise<MutationResponse> {
  try {
    const result = AddOrEditCatFormSchema.safeParse(data);

    if (!result.success) {
      return { success: false, data: 'Something went wrong!' };
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
  } catch (error) {
    console.error('Error in deleteCat:', error);
    return { success: false, data: 'Something went wrong!' };
  }
}

/**
 * Update a cat based on the provided data.
 * @param data - Cat data to update.
 * @returns {Promise<MutationResponse>} - Success status and optional success message.
 */
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
  } catch (error) {
    console.error('Error in updateCat:', error);
    return { success: false, data: 'Something went wrong!' };
  }
}
