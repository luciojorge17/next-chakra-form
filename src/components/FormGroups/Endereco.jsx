import { Box, Stack, useToast } from '@chakra-ui/react'
import { IoLocationOutline } from 'react-icons/io5'
import { converterParaNumero } from '../../utils';
import Input from '../Form/Input'
import Select from '../Form/Select';
import { Subtitle } from '../Subtitle'

export function Endereco({ formRef }) {

    const toast = useToast()

    function buscaCep() {
        const cep = converterParaNumero(formRef.current.getFieldValue('cep'));

        if (cep.length !== 8) {
            return toast({
                title: "Preencha um CEP válido",
                description: "",
                status: "warning",
                duration: 2000,
                isClosable: true,
                position: "top"
            })
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((data) => data.json())
            .then((data) => {
                if (!data.erro) {
                    formRef.current.setData({
                        uf: data.uf,
                        cidade: data.localidade,
                        bairro: data.bairro,
                        endereco: data.logradouro,
                    })
                    formRef.current.getFieldRef('numero').focus()
                } else {
                    formRef.current.setData({
                        uf: '',
                        cidade: '',
                        bairro: '',
                        endereco: '',
                    })
                    return toast({
                        title: "Preencha um CEP válido",
                        description: "",
                        status: "warning",
                        duration: 2000,
                        isClosable: true,
                        position: "top"
                    })
                }
            })

    }

    return (
        <Box>
            <Subtitle text="Endereço" icon={IoLocationOutline} />
            <Stack mt="4" spacing="6">
                <Input
                    label="CEP"
                    name="cep"
                    inputMode="decimal"
                    mask="99999-999"
                    onBlur={buscaCep}
                    isRequired
                />
                <Select
                    label="UF"
                    name="uf"
                    isRequired
                >
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>

                </Select>
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