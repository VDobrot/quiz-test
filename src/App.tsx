import React, { useContext } from 'react';
import './App.css';
// import { StartPage } from "./components/StartPage/StartPage";
import { Modal } from "./components/modal/Modal";
import { ModalFlow } from "./components/ModalFlow/ModalFlow";
import { MainPage } from "./components/MainPage/MainPage";
import { Questions } from "./components/Questions/Questions";
import { UploadPage } from "./components/UploadPage/UploadPage";
import AppContext, { DataAppContext } from "./AppContext";

function App() {
  const context = useContext(AppContext) as DataAppContext;

  if (!context) {
    throw new Error('App must be used within AppProvider');
  }

  const { data, isModalOpen, modalContent, setCurrentPage, setModalContent, currentPage, start, closeModal, goToNextPage, handleSubmit } = context;

  const goToPreviousPage = (previousPage: string) => {
    setCurrentPage(previousPage);
  }

  let CurrentPageComponent;

  switch (currentPage) {
    // case 'start':
    //   CurrentPageComponent = <StartPage onStart={start}  data={data.startPage} />;
    //   break;
    case 'main':
      CurrentPageComponent = <MainPage data={data.mainPage} nextPage={() => goToNextPage('instructions')} />;
      break;
    case 'instructions':
      CurrentPageComponent = <MainPage data={data.instructionsPage} nextPage={() => goToNextPage('questions')} />;
      break;
    case 'questions':
      CurrentPageComponent = <Questions data={data.questionsPage} onSubmit={handleSubmit} nextPage={() => goToNextPage('upload')} />;
      break;
    case 'upload':
      CurrentPageComponent = <UploadPage data={data.uploadPage} backPage={() => goToPreviousPage('questions')} nextPage={() => goToNextPage('start')} />;
      break;
    default:
      CurrentPageComponent = <MainPage data={data.mainPage} nextPage={() => goToNextPage('instructions')} />;
  }

  return (
    <div className="App">
      {CurrentPageComponent}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalFlow
          modalContent={modalContent}
          setModalContent={setModalContent}
          closeModal={closeModal}
          data={data}
          goToNextPage={goToNextPage}
        />
      </Modal>
    </div>
  );
}

export default App;
