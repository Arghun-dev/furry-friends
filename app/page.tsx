import Image from 'next/image';

import { getCats } from '@/lib/api';
import { H4, P } from '@/components/ui/typography';
import { AddOrEditCatDialog } from '@/components/AddOrEditCatDialog';

export default async function Home() {
  const cats = await getCats();
  return (
    <div className='grid grid-cols-3 gap-4'>
      {cats.map((cat) => (
        <div key={cat.id} className='flex h-[200px] rounded-md border p-4'>
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
