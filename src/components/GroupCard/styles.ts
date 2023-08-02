import styled from "styled-components/native";
import {UsersThree} from "phosphor-react-native"

export const CardContainer = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    padding: 28px;
    align-items: center;
    border-radius: 6px;
    flex-direction: row;
    margin-bottom: 10px;
`

export const IconUsers = styled(UsersThree).attrs(
    ({theme}) => ({
        color: theme.COLORS.GREEN_700,
        size: 32,
        weight: "fill"
    })
)`
    margin-right: 16px;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG};
    color: ${({theme}) => theme.COLORS.GRAY_100};
`