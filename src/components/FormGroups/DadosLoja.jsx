import { Box, Stack } from '@chakra-ui/react'
import { IoStorefrontOutline } from 'react-icons/io5'
import Input from '../Form/Input'
import { Subtitle } from '../Subtitle'

export function DadosLoja() {
    return (
        <Box>
            <Subtitle text="Dados da Loja" icon={IoStorefrontOutline} />
            <Stack mt="4" spacing="6">
                <Input
                    label="CNPJ"
                    name="cnpj"
                    isRequired
                    placeholder="00.000.000/0000-00"
                />
                <Input
                    label="Razão Social"
                    name="razao-social"
                    isRequired
                />
                <Input
                    label="Nome Fantasia"
                    name="nome-fantasia"
                    isRequired
                />
                <Input
                    label="E-mail"
                    name="email"
                    type="email"
                    isRequired
                />
            </Stack>
        </Box>
    )
}