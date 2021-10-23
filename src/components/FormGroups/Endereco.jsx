import { Box, Stack } from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'
import Input from '../Form/Input'
import { Subtitle } from '../Subtitle'

export function Endereco() {
    return (
        <Box>
            <Subtitle text="Endereço" icon={IoLocationOutline} />
            <Stack mt="4" spacing="6">
                <Input
                    label="CEP"
                    name="cep"
                    isRequired
                />
                <Input
                    label="Cidade"
                    name="cidade"
                    isRequired
                />
                <Input
                    label="Bairro"
                    name="bairro"
                    isRequired
                />
                <Input
                    label="Endereço"
                    name="endereco"
                    isRequired
                />
                <Input
                    label="Número"
                    name="numero"
                    type="number"
                    isRequired
                />
                <Input
                    label="Complemento"
                    name="complemento"
                />
            </Stack>
        </Box>
    )
}