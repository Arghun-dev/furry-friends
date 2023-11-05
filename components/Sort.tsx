'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowUpDown,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Sort() {
  const firstRender = useRef(true);
  const router = useRouter();
  const [sort, setSort] = useState<'asc' | 'desc' | undefined>();

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (!sort) {
      router.push('/cats');
    } else if (sort === 'asc') {
      router.push('/cats?sort=asc');
    } else {
      router.push('/cats?sort=desc');
    }
  }, [sort, router]);

  const renderContent = () => {
    if (!sort) {
      return {
        trigger: (
          <ArrowUpNarrowWide className='icon' onClick={() => setSort('asc')} />
        ),
        content: 'Sort Ascending',
      };
    }

    if (sort === 'asc') {
      return {
        trigger: (
          <ArrowDownNarrowWide
            className='icon'
            onClick={() => setSort('desc')}
          />
        ),
        content: 'Sort Descending',
      };
    }

    return {
      trigger: (
        <ArrowUpDown className='icon' onClick={() => setSort(undefined)} />
      ),
      content: 'Clear Sort',
    };
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className='flex'>
            <p className='mr-2 text-sm'>Sort by:</p>{' '}
            <strong className='text-sm'>Name</strong> {renderContent().trigger}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{renderContent().content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
