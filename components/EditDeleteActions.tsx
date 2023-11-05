import { Cat } from '@prisma/client';
import EditCat from './Modal/modals/EditCat';
import DeleteCat from './Modal/modals/DeleteCat';

export default function EditDeleteActions({ cat }: { cat: Cat }) {
  if (!cat) return null;

  return (
    <div className='absolute right-2 top-2 flex'>
      <EditCat cat={cat} />
      <DeleteCat cat={cat} />
    </div>
  );
}
