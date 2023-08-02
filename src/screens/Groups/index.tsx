import React from "react";
import { useState } from "react";
import {GroupContainer} from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

interface GroupsI {
    title: string;
}
export function Groups(){
    const [groups, setGroups] = useState<GroupsI[]>([{
        title: "Turma Teste"
    }])

    return (
        <GroupContainer>
            <Header showBackButton={false}/>
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            
            <FlatList 
                data={groups}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <GroupCard title={item.title}/>
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar uma nova turma?"/>
                )}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
            />
            <Button title="Criar nova turma" variant="PRIMARY"/>
        </GroupContainer>
    )
}