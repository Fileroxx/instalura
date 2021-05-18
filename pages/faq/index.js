import React from 'react';

import WebsitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import FAQScreen from '../../src/components/commons/screens/FAQScreen';

function FAQPage({faqCategories}) {
    return (
        <FAQScreen faqCategories={faqCategories} /> 
    )
}

export default WebsitePageHOC(FAQPage, {
    pageWrapperProps: {
        seoProps: {
            headTitle: 'Perguntas Frequentes',
        },
        pageBoxProps: {
            backgroundImage: 'url(images/bubbles.svg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
        }

    },

});

FAQPage.propTypes = FAQScreen.propTypes;

export async function getStaticProps() {
    const faqCategories = await fetch(
        'https://instalura-api.vercel.app/api/content/faq',
    )
        .then(respostaDoServer => respostaDoServer.json())
        .then(respostaConvertida => respostaConvertida.data);

        return {
            props: {
                faqCategories
            }
        }
}

