import React from "react";
import { CardContainer, IconUsers, Title } from "./styles";
interface GroupCardProps {
    title: string;
}
export function GroupCard({title}: GroupCardProps){
    return (
        <CardContainer>
            <IconUsers />
            <Title>{title}</Title>
        </CardContainer>
    )
}