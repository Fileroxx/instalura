import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';
import FormCadastro from '../../../patterns/FormCadastro';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';

export const WebsitePageContext = React.createContext({
    toggleModalCadastro: () => {
       
    },
});

export default function WebsitePageWrapper({children, seoProps, pageBoxProps, menuProps, }) {
    const [isModalOpen, setModalState] = React.useState(false);
    return (
        <WebsitePageContext.Provider
        value={{
            toggleModalCadastro: () => {
                console.log('Dentro do Provider');
                setModalState(!isModalOpen);

            },
        }}
        >
     
        <Box
        display="flex"
        flex="1"
        flexDirection="column"
        {...pageBoxProps}
        >
            <Modal
            isOpen={isModalOpen}
            onClose={() => {
                setModalState(false);
            }}

            >
                {(propsDoModal) => (
                    <FormCadastro propsDoModal={propsDoModal} />
                )}
            </Modal>
            
        <Menu
        onCadastrarClick={() => setModalState(true)}
        />
        {children}
        <Footer />
        </Box>
        </WebsitePageContext.Provider>
    );
}

WebsitePageWrapper.defaultProps = {
    seoProps: {},
    pageBoxProps: {},
    menuProps: {
        display: true,
    },
};

WebsitePageWrapper.PropTypes = {
  
  
  seoProps: PropTypes.shape({
      headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
      display: PropTypes.bool,
  }),
  
    pageBoxProps: PropTypes.shape({
        backgroundImage: PropTypes.string,
        backgroundRepeat: PropTypes.string,
        backgroundPosition: PropTypes.string,
    }),
    children: PropTypes.node.isRequired,
}