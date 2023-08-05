import styled from "styled-components/native";


export const HighlightContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
`

export const HighlightMain = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 5px;
`

export const HighlightSecondary = styled.Text`
    color: ${({theme}) => theme.COLORS.GRAY_300};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`