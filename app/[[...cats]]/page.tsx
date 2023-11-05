import { SearchParamsType, getCats } from '@/lib/actions';
import AddCat from '@/components/ModalRoot/modals/AddCat';
import Sort from '@/components/Sort';
import EditDeleteActions from '@/components/EditDeleteActions';

interface HomePageProps {
  searchParams: SearchParamsType;
}

export default async function Home({ searchParams }: HomePageProps) {
  const { data, error } = await getCats(searchParams);

  if (error || !Array.isArray(data)) return <div>Something went wrong!</div>;

  return (
    <>
      <div className='mb-4 flex justify-end'>
        <Sort />
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((cat) => (
          <div
            key={cat.id}
            className='relative flex h-[200px] rounded-md border p-4'
          >
            <EditDeleteActions cat={cat} />
            {/* <Image src='' width={50} height={100} alt={cat.name} /> */}
            <div className='flex flex-col'>
              <h4 className='text-md font-bold'>{cat.name}</h4>
              {cat.bio && (
                <p className='mt-6 line-clamp-6 overflow-hidden text-justify text-xs text-gray-600'>
                  {cat.bio}
                </p>
              )}
            </div>
          </div>
        ))}
        <AddCat />
      </div>
    </>
  );
}
