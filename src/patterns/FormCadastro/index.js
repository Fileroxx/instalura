import React from 'react';
import { Lottie } from '@crello/react-lottie';
import successAnimation from '../FormCadastro/animations/sucess.json';
import errorAnimation from '../FormCadastro/animations/error.json';
import { Button } from '../../components/commons/Button';
import TextField from '../../components/forms/TextField';
import { Box } from '../../components/foundation/layout/Box';
import { Grid } from '../../components/foundation/layout/Grid';
import  Text  from '../../components/foundation/Text';
import PropTypes from 'prop-types';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
    const [isFormSubmited, setIsFormSubmited] = React.useState(false);
    const [submissionStatus,setSubmissionStatus] = React.useState(formStates.DEFAULT);
    const [userInfo, setuserInfo] = React.useState({
        usuario: 'omariosouto',
        nome: 'Mario',
    });
    
    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        console.log('Mudar o valor do input', fieldName);
        setuserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        });
    }

    const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;
    
    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault();

            setIsFormSubmited(true);

            console.log('O formulário está pronto, vamos cadastrar de fato o usuário')

          // Data Transfer object

          const userDTO = {
            username: userInfo.usuario,
            name: 'Mario',
          };

            fetch('https://instalura-api.vercel.app/api/users', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(userDTO),
            })
            .then((respostaDoServidor) => {
              if(respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }

              throw new Error('Não foi possível cadastrar o usuário agora :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);

              console.log(respostaConvertidaEmObjeto)
            })
            .catch((error) => {
              console.error(error);
            })
      
          }}
        
        >

        <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            >
            Pronto pra saber da vida dos outros?
        </Text>
        <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
        >
          Você está a um passo de saber tudo que está rolando no mundo,
          complete seu cadastro agora!
        </Text>
        

            <div>
            <TextField
             placeholder="Nome" 
             name="name"
             value={userInfo.nome}
            onChange={handleChange}
             />
            </div>
            <div>
                <TextField
                 placeholder="Usuário" 
                 name="usuario"
                 value={userInfo.usuario}
                 onChange={handleChange}
                />
            </div>

            <Button
             type="submit"
             variant="primary.main"
              disabled={isFormInvalid}
              fullWidth
              >
                Cadastrar
            </Button>
          {isFormSubmited && submissionStatus === formStates.DONE && (<p>
          <Lottie
          width="100%"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: successAnimation, loop: true, autoplay: true}}
         />

          {/* https://lottiefiles.com/43920-success-alert-icon */}
          </p>
          )}

          {isFormSubmited && submissionStatus === formStates.ERROR &&
          
          (<p>
            <Lottie
          width="100%"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: true, autoplay: true}}
         />
              {/* https://lottiefiles.com/14331-error */}
          </p>
          )}

        </form>
    );
}

export default function FormCadastro({ propsDoModal }) {
    return (
      <Grid.Row
        marginLeft={0}
        marginRight={0}
        flex={1}
        justifyContent="flex-start"
      >
        <Grid.Col
          display="flex"
          paddingRight={{ md: '0' }}
          flex={1}
          value={{ xs: 12, md: 5, lg: 4 }}
        >
          <Box
            boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            flex={1}
            padding={{
              xs: '16px',
              md: '85px',
            }}
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <FormContent />
          </Box>
        </Grid.Col>
      </Grid.Row>
    );
  }