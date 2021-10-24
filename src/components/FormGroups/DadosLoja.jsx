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
                    inputMode="decimal"
                    mask="99.999.999/9999-99"
                    isRequired
                />
                <Input
                    label="Razão Social"
                    name="razaoSocial"
                    isRequired
                />
                <Input
                    label="Nome Fantasia"
                    name="nomeFantasia"
                    isRequired
                />
                <Input
                    label="E-mail"
                    name="email"
                    inputMode="email"
                    isRequired
                />
            </Stack>
        </Box>
    )
}