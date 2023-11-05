import { Pencil } from 'lucide-react';
import { Cat } from '@prisma/client';
import AddOrEditCatForm from '@/components/AddOrEditCatForm';
import { Modal } from '../Modal';
import { MODAL_FOR_EDIT_CAT } from '../modalRepository';

export default function EditCat({ cat }: { cat: Cat }) {
  return (
    <Modal
      modalType={MODAL_FOR_EDIT_CAT}
      title='Edit Cat'
      triggerContent={<Pencil className='icon' />}
    >
      <AddOrEditCatForm defaultValues={cat} />
    </Modal>
  );
}
