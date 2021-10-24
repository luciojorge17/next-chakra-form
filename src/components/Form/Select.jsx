import { Select as ChakraSelect, FormControl, FormLabel, FormHelperText, Text } from '@chakra-ui/react'
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react';

export default function Select({ label, name, isRequired = false, children, ...rest }) {

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
            <ChakraSelect
                ref={inputRef}
                isInvalid={error}
                errorBorderColor="red.400"
                onFocus={clearError}
                {...rest}
            >
                {children}
            </ChakraSelect>

            {error && <FormHelperText color="red.400">{error}</FormHelperText>}

        </FormControl>
    )
}