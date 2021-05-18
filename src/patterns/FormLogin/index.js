import React from 'react'
import { useRouter } from 'next/router';
import { values } from 'lodash';
import { Button } from '../../components/commons/Button';
import TextField from '../../components/forms/TextField';

function useForm({ initialValues, onSubmit }) {
    
    const [values, setValues] = React.useState(initialValues);

    return {
        values,
        handleSubmit(event) {
            event.preventDefault();
            console.log('Submit do form!');
            onSubmit(values);

        },
        handleChange(event) {
            const fieldName = event.target.getAttribute('name');
            const { value } = event.target;
            console.log('fieldName', fieldName, value);
            setValues((currentValues) => ({
                ...currentValues,
                [fieldName]: value,
            }));
        },
      };
    }

export default function LoginForm() {
    const router = useRouter();
    const initialValues = {
        usuario: '',
        senha: '',
    };
    const form = useForm({
        initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values.null,2));
            router.push('/app/profile');
        }

    });

    return (
        <form id="formCadastro" onSubmit={form.handleSubmit}
        >
            <TextField
            placeholder="Usuário"
            name="usuario"
            value={form.values.usuario}
            onChange={form.handleChange}
            />
            <TextField
            placeholder="Senha"
            name="senha"
            type="password"
            values={form.values.senha}
            onChange={form.handleChange}
            />

            <Button
            type="submit"
            variant="primary.main"
            margin={{
                xs: '0 auto',
                md: 'initial',
            }}
            fullWidth
            >
                Entrar
            </Button>
        </form> 
    );
}