import { Select as ChakraSelect, FormControl, FormLabel } from '@chakra-ui/react'
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react';

export default function Select({ label, name, isRequired = false, children, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

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
            <ChakraSelect
                ref={inputRef}
                onFocus={clearError}
                {...rest}
            >
                {children}
            </ChakraSelect>

        </FormControl>
    )
}