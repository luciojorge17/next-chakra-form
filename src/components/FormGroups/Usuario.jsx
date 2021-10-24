import { Box, Stack} from '@chakra-ui/react'
import { IoPersonOutline } from 'react-icons/io5'
import Input from '../Form/Input'
import { Subtitle } from '../Subtitle'

export function Usuario() {
    return (
        <Box>
            <Subtitle text="Dados do Usuário" icon={IoPersonOutline} />
            <Stack mt="4" spacing="6">
                <Input
                    label="Nome"
                    name="nomeUsuario"
                    isRequired
                />
                <Input
                    label="E-mail"
                    name="emailUsuario"
                    inputMode="email"
                    isRequired
                />
                <Input
                    label="Celular"
                    name="celularUsuario"
                    inputMode="decimal"
                    mask="(99) 99999-9999"
                    isRequired
                />
            </Stack>
        </Box>
    )
}