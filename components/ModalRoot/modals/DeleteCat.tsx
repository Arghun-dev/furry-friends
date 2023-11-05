import { Cat } from '@prisma/client';
import { Modal } from '../Modal';
import { MODAL_FOR_DELETE_CAT } from '../modalRepository';
import DeleteCat_Trigger from './DeleteCat_Trigger';

export default function DeleteCat({ cat }: { cat: Cat }) {
  return (
    <Modal
      modalType={MODAL_FOR_DELETE_CAT}
      title='Delete Cat'
      isAlert
      description={
        <div>
          This action cannot be undone. This will permanently delete{' '}
          <strong>{cat?.name}</strong> cat from the database.
        </div>
      }
      alertDialogAction={<DeleteCat_Trigger cat={cat} />}
    />
  );
}
