import dynamic from 'next/dynamic';

const ModalForAddCat = dynamic(
  () => import('@/components/Modal/modals/AddCat')
);

const ModalForEditCat = dynamic(
  () => import('@/components/Modal/modals/EditCat')
);

const ModalForDeleteCat = dynamic(
  () => import('@/components/Modal/modals/DeleteCat')
);

export const MODAL_FOR_ADD_CAT = 'MODAL_FOR_ADD_CAT';
export const MODAL_FOR_EDIT_CAT = 'MODAL_FOR_EDIT_CAT';
export const MODAL_FOR_DELETE_CAT = 'MODAL_FOR_DELETE_CAT';

const modalRepository = {
  MODAL_FOR_ADD_CAT: ModalForAddCat,
  MODAL_FOR_DELETE_CAT: ModalForDeleteCat,
  MODAL_FOR_EDIT_CAT: ModalForEditCat,
};

export default modalRepository;
