import React from "react";
import { Icon, Name, PlayerCardContainer } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

interface PlayerCardProps{
    name: string;
    onRemove: () => void;
}

export function PlayerCard({name, onRemove}: PlayerCardProps){
    return(
        <PlayerCardContainer>
            <Icon name="person"/>
            <Name>
                {name}
            </Name>
            <ButtonIcon 
                name="close"
                variant="SECONDARY"
                onPress={onRemove}
            />
        </PlayerCardContainer>
    )
}