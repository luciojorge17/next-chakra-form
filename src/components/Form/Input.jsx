import { Input as ChakraInput, FormControl, FormLabel } from '@chakra-ui/react'
import { useField } from '@unform/core'
import { useEffect, useRef } from 'react';

export default function Input({ label, name, isRequired = false, ...rest }) {

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

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
            <ChakraInput ref={inputRef} {...rest} />
        </FormControl>
    )
}