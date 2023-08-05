import React from "react";
import { CardContainer, IconUsers, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface GroupCardProps extends TouchableOpacityProps{
    title: string;
}
export function GroupCard({title, ...rest}: GroupCardProps){
    return (
        <CardContainer {...rest}>
            <IconUsers />
            <Title>{title}</Title>
        </CardContainer>
    )
}