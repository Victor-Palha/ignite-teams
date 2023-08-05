import styled, { css } from "styled-components/native";

interface ButtonTypeStyleProps {
    variant: "PRIMARY" | "SECONDARY"
}

export const ButtonContainer = styled.TouchableOpacity<ButtonTypeStyleProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${props => props.variant === "PRIMARY" ? props.theme.COLORS.GREEN_700 : props.theme.COLORS.RED_DARK};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};  
    `}

`