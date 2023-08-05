import React, { useState } from "react";
import { Alert } from "react-native";
import { Content, Icon, NewGroupContainer } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";

export function NewGroup(){
    const [group,  setGroup] = useState("")

    const navigation = useNavigation();

    async function handleNew(){
        try {
            if(group.trim().length === 0){
                return Alert.alert("Atenção", "Informe o nome da turma")
            }
            await groupCreate(group)
            navigation.navigate("players", {group})
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert("Atenção", error.message)
            }else{
                Alert.alert("Atenção", "Não foi possível criar a turma")
            }
        }
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