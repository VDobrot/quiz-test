import React, { useContext } from 'react';
import { AgeVerification} from '../AgeVerification/AgeVerification'
import { PrivacyPolicy} from '../PrivacyPolicy/PrivacyPolicy'
import {CookiePage} from '../CookiePage/CookiePage'
import { useNavigate } from 'react-router-dom'
import {AppContext} from "../../AppContext";
export const ModalFlow = ({ modalContent, setModalContent, closeModal}) => {
  const navigate = useNavigate();
  const data = useContext(AppContext);

  switch (modalContent) {
    case 'ageVerification':
      return <AgeVerification
        {...data.ageVerification}
        over18={() => {
          setModalContent('privacyPolicy')
        }}
      />
    case 'privacyPolicy':
      return <PrivacyPolicy
        {...data.privacyPolicy}
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
         {...data.cookiePage}
        decline={() => {
          closeModal()
          setModalContent('ageVerification');
        }}
        accept={() => {
          closeModal()
          navigate('/main')
        }}
      />
    default:
      return <AgeVerification
        {...data.ageVerification}
        over18={() => {
          setModalContent('privacyPolicy')
        }}
      />
  }
}
