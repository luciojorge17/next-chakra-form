import { useRef } from 'react'
import Head from 'next/head'

import { Container, Stack, Button, Flex } from '@chakra-ui/react'
import { Form } from '@unform/web'

import { Header } from '../components/Header'
import { DadosLoja } from '../components/FormGroups/DadosLoja'
import { Endereco } from '../components/FormGroups/Endereco'
import { Usuario } from '../components/FormGroups/Usuario'

export default function Home() {

    const formRef = useRef(null);

    function handleSubmit(data) {
        console.log(data);
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
                            type="button"
                            colorScheme="green"
                            type="submit"
                            my="6"
                        >
                            Finalizar
                        </Button>
                    </Flex>

                </Stack>


            </Container>

        </>
    )
}
