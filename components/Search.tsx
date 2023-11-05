'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from './ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { filter } from '@/lib/filter';

export default function Search() {
  const searchParams = useSearchParams();
  const firstRender = useRef(true);
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 400);

  useEffect(() => {
    filter(searchParams.get('sort'), debouncedValue, router, firstRender);
  }, [debouncedValue]);

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
