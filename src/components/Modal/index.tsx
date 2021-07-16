import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './types';
import { CloseButton, CloseIcon, ModalStyled } from './styles';

const Modal: FC<ModalProps> = ({ children, handleCloseModal }) => {

  const [domElement, setDomElement] = useState<any>(() => {
    return document.getElementById('modal');
  });

  useEffect(() => {
    return () => setDomElement(() => null);
  },
  [])

  return createPortal(
    <ModalStyled>
      <CloseButton onClick={handleCloseModal}>
        <CloseIcon />
      </CloseButton>
      {children}
    </ModalStyled>,
    domElement
  )
}

export default Modal;