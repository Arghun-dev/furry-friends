import { X } from 'lucide-react';
import { Cat } from '@prisma/client';
import { Modal } from '../Modal';
import { MODAL_FOR_DELETE_CAT } from '../modalRepository';
import DeleteCatDialogAction from './DeleteCat_DialogAction';

export default function DeleteCat({ cat }: { cat: Cat }) {
  return (
    <Modal
      modalType={MODAL_FOR_DELETE_CAT}
      title='Delete Cat'
      isAlert
      triggerContent={<X className='icon ml-1' data-testid='delete-cat-icon' />}
      description={
        <div>
          This action cannot be undone. This will permanently delete{' '}
          <strong>{cat?.name}</strong> cat from the database.
        </div>
      }
      alertDialogAction={<DeleteCatDialogAction cat={cat} />}
    />
  );
}
