import React, { ReactNode, useState } from 'react';
import AppContext from './AppContext';
import { data } from './data';

const AppProvider = ({children}: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState('ageVerification');
  const [currentPage, setCurrentPage] = useState('start');

  const start = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('ageVerification');
  }

  const goToNextPage = (nextPage: string) => {
    setCurrentPage(nextPage);
  }

  const handleSubmit = (answers: string[]) => {
    console.log(answers);
  }

  return (
    <AppContext.Provider value={{
      data,
      isModalOpen,
      modalContent,
      setModalContent,
      currentPage,
      setCurrentPage,
      start,
      closeModal,
      goToNextPage,
      handleSubmit
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
