import { TouchableOpacity } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

interface FilterProps {
    isActive: boolean
}
export const FilterContainer = styled(TouchableOpacity)<FilterProps>`
    ${({theme, isActive}) => css`
        border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : theme.COLORS.GRAY_700};
    `}
    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;
`


export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    text-transform: uppercase;
`