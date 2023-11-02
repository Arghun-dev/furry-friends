import CatsList from '@/components/cats-list';
import { getCats } from '@/lib/api';

export default async function Home() {
  const cats = await getCats();
  return <CatsList />;
}
