import { Input as ChakraInput, FormControl, FormLabel, FormHelperText, Text } from '@chakra-ui/react'
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';

export default function Input({ label, name, mask = false, isRequired = false, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <FormControl
            id={name}
        >
            <FormLabel fontSize="sm">{label} {isRequired && <Text as="span" color="red.400">*</Text>}</FormLabel>

            {!mask ? (
                <ChakraInput
                    ref={inputRef}
                    isInvalid={error}
                    errorBorderColor="red.400"
                    onFocus={clearError}
                    {...rest}
                />
            ) : (
                <ChakraInput
                    as={InputMask}
                    mask={mask}
                    ref={inputRef}
                    isInvalid={error}
                    errorBorderColor="red.400"
                    onFocus={clearError}
                    {...rest}
                />
            )}


            {name == 'emailUsuario' && <FormHelperText color="blue.300">As credenciais para acessar o app PJ serão enviadas para este e-mail</FormHelperText>}


            {error && <FormHelperText color="red.400">{error}</FormHelperText>}

        </FormControl>
    )
}