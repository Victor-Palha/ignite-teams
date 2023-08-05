import React, { useCallback } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import {GroupContainer} from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import {useNavigation, useFocusEffect} from "@react-navigation/native"


export function Groups(){

    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    function handleOpenGroup(group: string){
        navigation.navigate("players", {group})
    }
    function handleNewGroup(){
        navigation.navigate("new")
    }

    async function fetchGroups(){
        const storaged = await groupsGetAll()
        setGroups(storaged)
    }
     
    useFocusEffect(useCallback(()=>{
        fetchGroups()
    }, []))

    return (
        <GroupContainer>
            <Header showBackButton={false}/>
            <Highlight
                title="Turmas"
                subtitle="jogue com a sua turma"
            />
            
            <FlatList 
                data={groups}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <GroupCard 
                        title={item}
                        key={item}
                        onPress={() => handleOpenGroup(item)}    
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar uma nova turma?"/>
                )}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
            />
            <Button 
                title="Criar nova turma" 
                variant="PRIMARY"
                onPress={handleNewGroup}
            />
        </GroupContainer>
    )
}