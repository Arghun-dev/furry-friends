'use client';

import { PlusCircle } from 'lucide-react';

export default function AddCatCard() {
  const openAddOrEditCatModal = () => {
    console.log('asdj');
  };

  return (
    <div
      className='flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100'
      onClick={openAddOrEditCatModal}
    >
      <PlusCircle /> Add
    </div>
  );
}
