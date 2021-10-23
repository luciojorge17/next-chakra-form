import { Container, Stack, Button } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'

import { Form } from '@unform/web'
import { DadosLoja } from '../components/FormGroups/DadosLoja'
import { Endereco } from '../components/FormGroups/Endereco'

export default function Home() {

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


                <Stack as={Form} spacing="4" onSubmit={handleSubmit}>


                    <DadosLoja />
                    <Endereco />

                    <Button type="submit" colorScheme="green">Finalizar</Button>


                </Stack>


            </Container>

        </>
    )
}
