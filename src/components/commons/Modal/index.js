import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0,0,0,0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: scroll;
    transition: 1s;
    z-index: 100;

   ${({ isOpen }) => {
       if (isOpen) {
           return css`
            opacity: 1;
            pointer-events: all;
           `;
       }
            return css`
             opacity: 0;
             pointer-events: none;
            `;
   }}
`;


function Modal( { isOpen, onClose, children }) {
  return (

    <ModalWrapper
     isOpen={isOpen}
     onClick={() => {
        onClose();
     }}
     >
       <motion.div
       variants={{
         open: {
          x: 0,
         },
         closed: {
          x: '-100%',
         },
       }}
       animate={isOpen ? 'open' : 'closed'}
       transition={{
         duration: 0.5,
       }}
        style={{
          display: 'flex',
          flex: '1'
        }}
       >
      {children}
       </motion.div>
    </ModalWrapper>
  );
}

export default Modal;