import { Pencil, X } from 'lucide-react';

export default function EditAndRemoveCat() {
  return (
    <div className='absolute right-2 top-2 flex'>
      <Pencil className='icon' />
      <X className='icon ml-1' />
    </div>
  );
}
