import React from "react";
import { FilterContainer, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface FilterProps extends TouchableOpacityProps{
    title: string;
    isActive?: boolean;
}
export function Filter({title, isActive = false, ...rest}: FilterProps){
    return (
        <FilterContainer isActive={isActive} {...rest} >
            <Title>
                {title}
            </Title>
        </FilterContainer>
    )
}