import React, { useState } from "react";
import { Content, Icon, NewGroupContainer } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup(){
    const [group,  setGroup] = useState("")

    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate("players", {group})
    }
    return (
        <NewGroupContainer>
            <Header/>
            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={(text) => setGroup(text)}
                />

                <Button
                    title="Criar"
                    style={{marginTop: 20}}
                    onPress={handleNew}
                />
            </Content>
        </NewGroupContainer>
    )
}