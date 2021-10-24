import { useRef, useState } from 'react'
import Head from 'next/head'

import { Container, Stack, Button, Flex } from '@chakra-ui/react'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { Header } from '../components/Header'
import { DadosLoja } from '../components/FormGroups/DadosLoja'
import { Endereco } from '../components/FormGroups/Endereco'
import { Usuario } from '../components/FormGroups/Usuario'
import { converterParaNumero } from '../utils'
import { useRouter } from 'next/router'

export default function Home() {

    const router = useRouter();
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(data) {

        setIsLoading(true);

        data.cnpj = converterParaNumero(formRef.current.getFieldValue('cnpj'));
        data.cep = converterParaNumero(formRef.current.getFieldValue('cep'));
        data.celularUsuario = converterParaNumero(formRef.current.getFieldValue('celularUsuario'));

        try {
            const schema = Yup.object().shape({
                cnpj: Yup.string().min(14, 'Digite um CNPJ válido').required('Campo obrigatório'),
                razaoSocial: Yup.string().required('Campo obrigatório'),
                nomeFantasia: Yup.string().required('Campo obrigatório'),
                email: Yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
                cep: Yup.string().min(8, 'Digite um CEP válido').required('Campo obrigatório'),
                uf: Yup.string().required('Campo obrigatório'),
                cidade: Yup.string().required('Campo obrigatório'),
                bairro: Yup.string().required('Campo obrigatório'),
                endereco: Yup.string().required('Campo obrigatório'),
                numero: Yup.string().required('Campo obrigatório'),
                nomeUsuario: Yup.string().required('Campo obrigatório'),
                emailUsuario: Yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
                celularUsuario: Yup.string().min(11, 'Digite um celular válido').required('Campo obrigatório')
            });

            await schema.validate(data, {
                abortEarly: false
            })

            // Chama api aqui
            setIsLoading(false);
            router.push('/sucesso')

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
                setIsLoading(false);

            }
        }

    }

    return (
        <>
            <Head>
                <title>Criação de Loja</title>
            </Head>

            <Header />

            <Container my="4">


                <Stack as={Form} spacing="4" ref={formRef} onSubmit={handleSubmit}>


                    <DadosLoja />
                    <Endereco formRef={formRef} />
                    <Usuario />

                    <Flex>
                        <Button
                            flex="1"
                            size="lg"
                            type="submit"
                            colorScheme="green"
                            type="submit"
                            my="6"
                            isLoading={isLoading}
                        >
                            Finalizar
                        </Button>
                    </Flex>

                </Stack>


            </Container>

        </>
    )
}
