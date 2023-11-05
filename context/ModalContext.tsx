'use client';

import { createContext, useContext, useState } from 'react';

interface IModal {
  type: string;
  props?: Record<string, any>;
}

interface ModalContextType {
  modals: IModal[];
  openModal: (modal: IModal) => void;
  closeModal: (modal: IModal) => void;
  shouldCloseModal: boolean;
  setShouldCloseModal: (shouldCloseModal: boolean) => void;
}

export const ModalContext = createContext<ModalContextType>({
  modals: [],
  openModal: () => {},
  closeModal: () => {},
  shouldCloseModal: false,
  setShouldCloseModal: () => {},
});

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modals, setModals] = useState<IModal[]>([]);
  const [shouldCloseModal, setShouldCloseModal] = useState(false);

  const openModal = (modal: IModal) => {
    const openedModal = modals.find((m) => m.type === modal.type);
    if (!openedModal) {
      setModals([...modals, modal]);
    }
  };

  const closeModal = (modal: IModal) => {
    const filteredModals = modals.filter((m) => m.type !== modal.type);
    setModals(filteredModals);
  };

  const closeAllModals = () => {
    setModals([]);
  };

  return (
    <ModalContext.Provider
      value={{
        modals,
        openModal,
        closeModal,
        shouldCloseModal,
        setShouldCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
