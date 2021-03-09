import React from 'react';
import { Button } from '../../components/commons/Button';
import TextField from '../../components/forms/TextField';
import { Box } from '../../components/foundation/layout/Box';
import { Grid } from '../../components/foundation/layout/Grid';
import  Text  from '../../components/foundation/Text'


function FormContent() {
    const [userInfo, setuserInfo] = React.useState({
        usuario: 'omariosouto',
        email: 'devsoutinho@gmail.com'
    });
    
    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        console.log('Mudar o valor do input', fieldName);
        setuserInfo({
            ...userInfo,
            [fieldName]: event.target.value,
        });
    }

    const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;
    
    return (
        <form onSubmit={() => {
            event.preventDefault();
            console.log('O formulário está pronto, vamos cadastrar de fato o usuário')
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
             placeholder="Email" 
             name="email"
             value={userInfo.email}
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