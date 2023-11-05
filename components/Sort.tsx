'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef, useMemo } from 'react';
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
import { filter } from '@/lib/filter';

export default function Sort() {
  const searchParams = useSearchParams();
  const firstRender = useRef(true);
  const router = useRouter();
  const [sort, setSort] = useState<string | null>(null);

  useEffect(() => {
    filter(sort, searchParams.get('search'), router, firstRender);
  }, [sort]);

  const renderContent = useMemo(() => {
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
      trigger: <ArrowUpDown className='icon' onClick={() => setSort(null)} />,
      content: 'Clear Sort',
    };
  }, [sort]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className='flex'>
            <p className='mr-2 text-sm'>Sort by:</p>{' '}
            <strong className='text-sm'>Name</strong>
            {renderContent.trigger}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{renderContent.content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
