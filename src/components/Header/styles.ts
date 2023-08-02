import styled from "styled-components/native";
import {CaretLeft} from "phosphor-react-native";

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 25px 0px;
`

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(
    ({theme}) => ({
        color: theme.COLORS.WHITE,
        size: 32
    })
)``