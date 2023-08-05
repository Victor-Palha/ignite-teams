import { TouchableOpacity } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import styled from "styled-components/native";

type ButtonIconProps = {
    variant: 'PRIMARY' | 'SECONDARY'
}

export const ButtonIconContainer = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>((props) => ({
    size: 24,
    color: props.variant === "PRIMARY" ? props.theme.COLORS.GREEN_700 : props.theme.COLORS.RED
}))``