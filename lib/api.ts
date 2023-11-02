import { prisma } from './db';

export async function getCats() {
  const cats = await prisma.cat.findMany();
  return cats;
}
