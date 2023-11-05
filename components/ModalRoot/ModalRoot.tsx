'use client';

import { useModal } from '@/context/ModalContext';
import modalRepository from './modalRepository';

const ModalRoot = () => {
  const { modals } = useModal();

  return modals.map(({ type, props }) => {
    const ModalComponent =
      modalRepository[type as keyof typeof modalRepository];

    if (ModalComponent) {
      //@ts-ignore
      return <ModalComponent key={type} {...props} />;
    }
  });
};

export default ModalRoot;
