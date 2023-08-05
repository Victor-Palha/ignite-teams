import React from "react";
import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

interface HeaderProps{
    showBackButton?: boolean;
}
export function Header({showBackButton = true}: HeaderProps){
    const navigate = useNavigation()
    function handleGoBack(){
        navigate.goBack()
    }
    function handleGoHome(){
        navigate.navigate("groups")
    }
    return(
        <HeaderContainer>
            {showBackButton && (
                <BackButton onPress={handleGoBack}>
                    <BackIcon/>
                </BackButton>
            )}
            <TouchableOpacity onPress={handleGoHome}>
                <Logo source={logoImg}/>
            </TouchableOpacity>
        </HeaderContainer>
    )
}