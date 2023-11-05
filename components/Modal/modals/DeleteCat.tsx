'use client';

import { useState } from 'react';
import { Cat } from '@prisma/client';
import { deleteCat } from '@/lib/actions';
import { useModal } from '@/context/ModalContext';
import { Modal } from '../Modal';
import { MODAL_FOR_DELETE_CAT } from '../modalRepository';
import { Button } from '@/components/ui/button';

export default function DeleteCat({ cat }: { cat: Cat }) {
  const { closeModal } = useModal();
  const [loading, setLoading] = useState(false);

  const onAccept = async () => {
    try {
      setLoading(true);
      await deleteCat(cat);
    } catch (error) {
      console.log(error);
    } finally {
      closeModal({ type: MODAL_FOR_DELETE_CAT });
    }
  };

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
      alertDialogAction={
        <Button onClick={onAccept}>{loading ? 'loading...' : 'Yes'}</Button>
      }
    />
  );
}