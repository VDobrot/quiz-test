import React from 'react';
// import { AgeVerification} from '../AgeVerification/AgeVerification'
import { PrivacyPolicy} from '../PrivacyPolicy/PrivacyPolicy'
import {CookiePage} from '../CookiePage/CookiePage'
export const ModalFlow = ({ modalContent, setModalContent, closeModal, data, goToNextPage }) => {

  switch (modalContent) {
    // case 'ageVerification':
    //   return <AgeVerification
    //     data={data.ageVerification}
    //     over18={() => {
    //       setModalContent('privacyPolicy')
    //     }}
    //   />
    case 'privacyPolicy':
      return <PrivacyPolicy
        data={data.privacyPolicy}
        decline={() => {
          closeModal()
          setModalContent('ageVerification')
        }}
        accept={() => {
          setModalContent('cookiePolicy')
        }}
      />
    case 'cookiePolicy':
       return <CookiePage
         data={data.cookiePage}
        decline={() => {
          closeModal()
          setModalContent('ageVerification');
        }}
        accept={() => {
          closeModal()
          goToNextPage('main');
        }}
      />
    default:
      return <PrivacyPolicy
        data={data.privacyPolicy}
        decline={() => {
          closeModal()
          setModalContent('ageVerification')
        }}
        accept={() => {
          setModalContent('cookiePolicy')
        }}
      />
  }
}
