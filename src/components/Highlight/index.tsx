import React from "react";
import { HighlightContainer, HighlightMain, HighlightSecondary } from "./styles";

interface HighlightProps{
    title: string;
    subtitle: string;
}
export function Highlight({title, subtitle}: HighlightProps){
    return (
        <HighlightContainer>
            <HighlightMain>
                {title}
            </HighlightMain>
            <HighlightSecondary>
                {subtitle}
            </HighlightSecondary>
        </HighlightContainer>
    )
}