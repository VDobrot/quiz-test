import React, { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/close.png";
import "./Modal.scss";

export interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode

}

export const Modal = (props: ModalProps) => {
  const {isOpen, onClose, children} = props
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    if (onClose) {
      onClose()
    }
  };

  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])

  return (
    <div className={`${isModalOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <div className="modal-content">
        <div className="card-xl">
          <div onClick={closeModal} className="close-button">
            <img src={CloseIcon} alt="close"/>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
