import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const filter = (
  sort: string | null,
  search: string | null,
  router: AppRouterInstance,
  firstRender: {
    current: boolean;
  }
) => {
  if (firstRender.current) {
    firstRender.current = false;
    return;
  }

  let query = '';

  if (sort) {
    query += `sort=${sort}`;
  }

  if (search) {
    if (query) {
      query += '&';
    }
    query += `search=${search}`;
  }

  router.push(`/cats${query ? `?${query}` : ''}`);
};
