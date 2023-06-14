import React, { useContext, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { StartPage } from "./components/StartPage/StartPage";
import { Modal } from "./components/modal/Modal";
import { ModalFlow } from "./components/ModalFlow/ModalFlow";
import { MainPage } from "./components/MainPage/MainPage";
import { Questions } from "./components/Questions/Questions";
import { UploadPage } from "./components/UploadPage/UploadPage";
import {AppContext} from "./AppContext";

// import { INSTRUCTIONS_PAGE, MAIN_PAGE, START_PAGE } from './Pages';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('ageVerification');
  const navigate = useNavigate();
  const goToNextPage = (nextPage: string) => navigate(nextPage);

  const start = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('ageVerification');
  }

  const data = useContext(AppContext)

  const handleSubmit = (answers: string[]) => {
    // Handle the answers here
    console.log(answers);
  }

  return (
      <div className="App">
          <Routes>
            <Route path='/start' element={<StartPage onStart={start} {...data.startPage} />} />
            <Route path='/main' element={<MainPage {...data.mainPage} nextPage={() => goToNextPage('/instructions')}/>} />
            <Route path='/instructions' element={<MainPage {...data.instructionsPage} nextPage={() => goToNextPage('/question1')}/>} />

            <Route path='/question1' element={<Questions {...data.questionsPage} onSubmit={handleSubmit} nextPage={() => goToNextPage('/upload')}/>} />
            <Route path='/upload' element={<UploadPage {...data.uploadPage} nextPage={() => goToNextPage('/start')}/>} />
            <Route path='/' element={<StartPage onStart={start} {...data.startPage} />} />
          </Routes>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalFlow
              modalContent={modalContent}
              setModalContent={setModalContent}
              closeModal={closeModal}
            />
          </Modal>
      </div>
  )
}

export default App;
