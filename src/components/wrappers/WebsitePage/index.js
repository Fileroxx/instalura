import React from 'react';
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

export default function WebsitePageWrapper({children, pageBoxProps }) {
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


WebsitePageWrapper.PropTypes = {
    children: PropTypes.node.isRequired,
}