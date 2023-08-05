import { TouchableOpacityProps } from "react-native";
import { ButtonIconContainer, Icon } from "./styles";
import {MaterialIcons} from "@expo/vector-icons"
import React from "react";

interface ButtonIconProps extends TouchableOpacityProps{
    variant?: "PRIMARY" | "SECONDARY";
    name: keyof typeof MaterialIcons.glyphMap;
}
export function ButtonIcon({name,  variant="PRIMARY", ...rest}: ButtonIconProps){
    return(
        <ButtonIconContainer {...rest}>
            <Icon name={name} variant={variant}/>
        </ButtonIconContainer>
    )
}