import { PlusCircle } from 'lucide-react';
import AddOrEditCatForm from '@/components/AddOrEditCatForm';
import { Modal } from '@/components/ModalRoot/Modal';
import { MODAL_FOR_ADD_CAT } from '../modalRepository';

export default function AddCat() {
  return (
    <Modal
      modalType={MODAL_FOR_ADD_CAT}
      title='Add Cat'
      triggerContent={
        <div className='flex h-[200px] cursor-pointer flex-col items-center justify-center rounded-md bg-gray-100'>
          <PlusCircle /> Add
        </div>
      }
    >
      <AddOrEditCatForm />
    </Modal>
  );
}
