import React from "react";
import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";
import logoImg from "@assets/logo.png";

interface HeaderProps{
    showBackButton?: boolean;
}
export function Header({showBackButton = true}: HeaderProps){
    return(
        <HeaderContainer>
            {showBackButton && (
                <BackButton>
                    <BackIcon/>
                </BackButton>
            )}
            <Logo source={logoImg}/>
        </HeaderContainer>
    )
}