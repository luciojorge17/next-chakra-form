import { Input as ChakraInput, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
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
            isRequired={isRequired}
        >
            <FormLabel fontSize="sm">{label}</FormLabel>

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
                    maskPlaceholder={null}
                    ref={inputRef}
                    isInvalid={error}
                    errorBorderColor="red.400"
                    onFocus={clearError}
                    {...rest}
                />
            )}


            {name == 'email-usuario' && <FormHelperText color="blue.300">As credenciais para acessar o app PJ serão enviadas para este e-mail</FormHelperText>}


            {error && <FormHelperText color="red.400">{error}</FormHelperText>}

        </FormControl>
    )
}