import React, { useContext, useState } from 'react';
import './App.css';
// import { StartPage } from "./components/StartPage/StartPage";
import { Modal } from "./components/modal/Modal";
import { ModalFlow } from "./components/ModalFlow/ModalFlow";
import { MainPage } from "./components/MainPage/MainPage";
import { Questions } from "./components/Questions/Questions";
import { UploadPage } from "./components/UploadPage/UploadPage";
import { LoadingPage } from "./components/LoadingPage/LoadingPage";
import AppContext, { DataAppContext } from "./AppContext";

function App() {
  const context = useContext(AppContext) as DataAppContext;
  const [isLoading, setIsLoading] = useState(false);

  if (!context) {
    throw new Error('App must be used within AppProvider');
  }

  const {
    data,
    isModalOpen,
    modalContent,
    setCurrentPage,
    setModalContent,
    currentPage,
    start,
    closeModal,
    goToNextPage,
    handleSubmit
  } = context;

  // const goToPreviousPage = (previousPage: string) => {
  //   setCurrentPage(previousPage);
  // }

  const goToPreviousPage = (previousPage: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(previousPage);
      setIsLoading(false);
    }, 1000);
  }

  let CurrentPageComponent;

  if (isLoading) {
    CurrentPageComponent = <LoadingPage/>;
  } else {
    switch (currentPage) {
      // case 'start':
      //   CurrentPageComponent = <StartPage onStart={start}  data={data.startPage} />;
      //   break;
      case 'main':
        CurrentPageComponent = <MainPage
          data={data.mainPage}
          nextPage={() => goToNextPage('instructions')}
        />
        break

      case 'instructions':
        CurrentPageComponent = <MainPage
          data={data.instructionsPage}
          nextPage={() => goToNextPage('questions')}
        />
        break

      case 'questions':
        CurrentPageComponent =
          <Questions
            data={data.questionsPage}
            onSubmit={handleSubmit}
            nextPage={() => goToNextPage('upload')}
          />
        break

      case 'upload':
        CurrentPageComponent = <UploadPage
          data={data.uploadPage} backPage={() => goToPreviousPage('questions')}
          nextPage={() => goToNextPage('start')}
        />
        break

      default:
        CurrentPageComponent = <MainPage
          data={data.mainPage}
          nextPage={() => goToNextPage('main')}
        />
    }
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
