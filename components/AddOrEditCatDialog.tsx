import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import AddOrEditCatForm from './AddOrEditCatForm';

export function AddOrEditCatDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100'>
          <PlusCircle /> Add
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Cat</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <AddOrEditCatForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
