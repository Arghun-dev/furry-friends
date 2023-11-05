'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from './ui/input';
import { useDebounce } from '@/hooks/useDebounce';

export default function Search() {
  const firstRender = useRef(true);
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 400);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (!debouncedValue.length) {
      console.log('run');
      router.push('/');
    } else {
      router.push(`/cats?search=${debouncedValue}`);
    }
  }, [debouncedValue, router]);

  return (
    <div className='relative flex items-center sm:w-1/3'>
      <SearchIcon className='icon absolute left-2' />
      <Input
        type='search'
        placeholder='Search...'
        className='pl-8'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}
