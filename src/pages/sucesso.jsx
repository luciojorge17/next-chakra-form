import { Flex, Heading, Text, Container, Button, Link } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Sucesso() {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Loja cadastrada com sucesso</title>
            </Head>

            <Container>
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    minHeight="100vh"
                >

                    <Image src="/success.svg" alt="Imagem" width="250" height="250" />

                    <Heading mt="10" as="h1" fontSize="xl" color="green.300">
                        Parabéns, a loja foi cadastrada!
                    </Heading>

                    <Text textAlign="center" fontSize="sm" mt="2" mb="6">
                        As credenciais para acesso ao aplicativo PJ foram enviadas para o e-mail informado.
                    </Text>

                    <Button onClick={() => router.push('/')} size="lg" colorScheme="green">Cadastrar nova loja</Button>

                    <Link isExternal fontSize=".5rem" color="gray.500" position="absolute" bottom="2" href="https://storyset.com/business">Business illustrations by Storyset</Link>
                </Flex>
            </Container>
        </>
    )
}