import { createContext } from 'react'

export interface DataComponents {
  startPage: {
    buttonText: string,
  },
  mainPage: {
    title: string,
    subtitle: string,
    image: { src: string, alt: string },
    paragraphs?: string[],
    buttonText: string,
  },
  instructionsPage: {
    title: string,
    subtitle: string,
    images?: { src: string, alt: string, text: string }[],
    buttonText: string,
  },
  questionsPage: {
    questions: { question: string, answers: string[] }[],
    submitButton: string,
    backButton: string
  },
  ageVerification: {
    title: string,
    message: string,
    buttonTextUnder18: string,
    buttonTextOver18: string,
    termsText: string,
  },
  cookiePage: {
    title: string,
    message: string,
    buttonTextDecline: string,
    buttonTextAccept: string,
  },
  privacyPolicy: {
    title: string,
    message: string,
    buttonTextDecline: string,
    buttonTextAccept: string,
    termsText: string,
    errorTermsText: string,
    policyText: string,
    errorPolicyText: string,
    ageText: string,
    errorAgeText: string
  },
  uploadPage: {
    backButton: string,
    title: string,
    description: string,
    subTitle: string,
    guidelinesTitle: string,
    guidelines: { image1: string, image2: string, text1: string, text2: string, text3: string, text4: string }[],
    deliveryTitle: string,
    contactPlaceholder: string,
    deliveryDescription: string,
    contactTitle: string,
    uploadButtonText: string,
    supportedFormats: string,
    removeImageButtonText: string,
    finalizeButtonText: string
  },
  processingPage: {
    title: string,
    description: string,
    estimatedTime: number,
    contactInfo: string
  }
}

export interface DataAppContext {
  data: DataComponents;
  isModalOpen: boolean;
  modalContent: string;
  setModalContent: (content: string) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  start: () => void;
  closeModal: () => void;
  goToNextPage: (nextPage: string) => void;
  handleSubmit: (answers: string[]) => void;
  setContactInfo: (info: string) => void;
}

const AppContext = createContext<DataAppContext | undefined>(undefined);

export default AppContext;
