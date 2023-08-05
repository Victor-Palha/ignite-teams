import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { InputContainer } from "./styles";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps{
    inputRef?: React.RefObject<TextInput>
    
}

export function Input({inputRef, ...rest}: InputProps){
    const {COLORS} = useTheme()
    return (
        <InputContainer
            placeholderTextColor={COLORS.GRAY_300}
            ref={inputRef}
            {...rest}
        />
    )
}