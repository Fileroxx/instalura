import React from 'react';
import FAQScreen from '../../src/components/commons/screens/FAQScreen'

export default function FAQPage() {

    const [faqCategories, setFaqCategories] = React.useState([]);

   React.useEffect(() => {
       console.log('aconteceu um efeito bicho!');

       fetch('https://instalura-api.vercel.app/api/content/faq')
       .then((respostaDoServer) => respostaDoServer.json())
       .then((respostaConvertida) => respostaConvertida.data)
       .then((resposta) => {
           setFaqCategories(resposta);
       });
   }, []);

   

    // 'https://instalura-api.vercel.app/api/content/faq'


    return (
        <FAQScreen faqCategories={faqCategories} />
    );
}