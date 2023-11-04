import Image from 'next/image';

import { getCats } from '@/lib/api';
import { H4, P } from '@/components/ui/typography';
import { AddOrEditCatDialog } from '@/components/AddOrEditCatDialog';
import EditAndRemoveCat from '@/components/EditAndRemoveCat';

export default async function Home() {
  const cats = await getCats();
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {cats.map((cat) => (
        <div
          key={cat.id}
          className='relative flex h-[200px] rounded-md border p-4'
        >
          <EditAndRemoveCat />
          <Image src='' width={50} height={100} alt={cat.name} />
          <div className='flex flex-col'>
            <H4 content={cat.name} />
            {cat.bio && <P content={cat.bio} />}
          </div>
        </div>
      ))}
      <AddOrEditCatDialog />
    </div>
  );
}
