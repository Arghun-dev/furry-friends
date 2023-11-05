'use client';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useModal } from '@/context/ModalContext';
import { deleteCat } from '@/lib/actions';
import { Cat } from '@prisma/client';
import { useState } from 'react';

export default function DeleteCat_Trigger({ cat }: { cat: Cat }) {
  const { setShouldCloseModal, shouldCloseModal } = useModal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onAccept = async () => {
    setLoading(true);
    const res = await deleteCat(cat);

    if (res.success) {
      setShouldCloseModal(!shouldCloseModal);
    } else {
      setLoading(false);
    }

    toast({
      title: res.data,
    });
  };

  return (
    <Button onClick={onAccept} disabled={loading}>
      {loading ? 'loading...' : 'Yes'}
    </Button>
  );
}
