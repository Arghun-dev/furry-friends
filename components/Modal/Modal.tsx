'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { X } from 'lucide-react';
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useModal } from '@/context/ModalContext';

interface ModalProps {
  isAlert?: boolean;
  modalType: string;
  modalProps?: Record<string, any>;
  title: string;
  description?: React.ReactNode;
  alertDialogAction?: React.ReactNode;
  children?: React.ReactNode;
  triggerContent?: React.ReactNode;
}

export const Modal = ({
  isAlert = false,
  modalType: type,
  modalProps,
  title,
  description,
  alertDialogAction,
  children,
  triggerContent,
}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const { openModal, closeModal, shouldCloseModal } = useModal();

  useEffect(() => {
    hideModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldCloseModal]);

  const hideModal = () => {
    closeModal({ type });
    setOpen(false);
  };

  const showModal = () => {
    openModal({ type, props: modalProps });
    setOpen(true);
  };

  if (isAlert) {
    return (
      <AlertDialog open={open}>
        <AlertDialogTrigger onClick={showModal}>
          <X className='icon ml-1' />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={hideModal}>Cancel</AlertDialogCancel>
            {alertDialogAction}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={showModal}>
        {triggerContent}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <div className='flex items-center justify-between'>
            <DialogTitle>{title}</DialogTitle>
            <X className='cursor-pointer p-1' onClick={hideModal} />
          </div>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
