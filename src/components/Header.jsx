import { Container, Box, Heading } from '@chakra-ui/react'

export function Header() {

    return (
        <Box bg="gray.800" py="4">
            <Container as="header">
                <Heading as="h1" fontSize="large" textAlign="center" textTransform="uppercase">
                    Cadastro de Loja
                </Heading>
            </Container>
        </Box>
    )
}