import React from "react";
import { ListEmptyContainer, Message } from "./styles";

interface ListEmptyProps {
    message: string;
}
export function ListEmpty({message = "Nenhum item encontrado"}: ListEmptyProps){
    return (
        <ListEmptyContainer>
            <Message>
                {message}
            </Message>
        </ListEmptyContainer>
    )
}