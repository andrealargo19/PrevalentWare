import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Image from "next/image";
import icondocu from "./../public/static/images/docum_assets/icon-docu.svg"

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
  <StyledModalOverlay>
    <StyledModal>
      <StyledModalHeader>
        <a href="#" onClick={handleCloseClick}>x</a>
          </StyledModalHeader>
            {title && <StyledModalTitle>{title}</StyledModalTitle>}
          <StyledModalBody>
            <ul className="modal-container-documents">
              <div className="container-title">
                <h6 className="documents-title">Documentos cargados</h6>
              </div>
                <li className="container-item">
                <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
              <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
            </li>
            <li className="container-item">
            <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
            <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
            </li>
             <li className="container-item">
             <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
            <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
        </li>
        <li className="container-item">
        <div> <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">RUT PrevalentWare</a></div>
            <div><Image className="icon-docu" width = {30} height = {40} src={icondocu}/></div>
        </li>
      </ul>
    </StyledModalBody>
      </StyledModal>
      </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 30px;
  z-index:400;
  `;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  z-index:400;
`;

const StyledModal = styled.div`
  background: white;
  width: 400px;
  height: 450px;
  border-radius: 25px;
  padding: 10px;
  `;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:400;
  `;

export default Modal;