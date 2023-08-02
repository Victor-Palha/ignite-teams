import React from "react";
import { ButtonContainer, Title } from "./styles";

interface ButtonProps{
    variant?: "PRIMARY" | "SECONDARY"
    title: string
}
export function Button({variant = "PRIMARY", title}: ButtonProps){
    return(
        <ButtonContainer variant={variant}>
            <Title>
                {title}
            </Title>
        </ButtonContainer>
    )
}