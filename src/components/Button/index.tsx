import React from "react";
import { ButtonContainer, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    title: string
    variant?: "PRIMARY" | "SECONDARY"
}

export function Button({variant = "PRIMARY", title, ...rest}: ButtonProps){
    return(
        <ButtonContainer variant={variant} {...rest}>
            <Title>
                {title}
            </Title>
        </ButtonContainer>
    )
}