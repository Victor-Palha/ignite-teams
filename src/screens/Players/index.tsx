import React, { useState, useEffect, useRef } from "react";
import { FormContainer, HeaderList, NumbersOfPlayers, PlayerContainer } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { PlayerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

interface RouteParams {
    group: string;
}

export function Players(){
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('time a')

    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const navigation = useNavigation()
    const route = useRoute()
    const {group} = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nome inválido', 'O nome não pode ser vazio')
        }
        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {
            await PlayerAddByGroup(newPlayer, group)
            await fetchPlayersByTeam()

            newPlayerNameInputRef.current?.blur()
            Keyboard.dismiss()
            setNewPlayerName('')
        } catch (error) {
            if(error instanceof AppError){
                return Alert.alert('Erro', error.message)
            }else{

                return Alert.alert('Erro', 'Ocorreu um erro inesperado')
            }
        }
    }

    async function fetchPlayersByTeam(){
        try {
            const playersByTeam = await playerGetByGroupAndTeam(group, team)

            setPlayers(playersByTeam)
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro inesperado')
        }
    }

    async function handleRemovePlayer(playerName: string){
        try {
            await playerRemoveByGroup(playerName, group)
            await fetchPlayersByTeam()
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro inesperado')
        }
    }

    async function groupRemove(){
        try {
            await groupRemoveByName(group)
            navigation.navigate("groups")
        } catch (error) {
            Alert.alert('Erro', 'Ocorreu um erro inesperado')
        }
    }

    async function handleGroupRemove(){
        Alert.alert(
            'Remover turma',
            'Tem certeza que deseja remover essa turma?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => groupRemove()}
            ]
        )
    }

    useEffect(()=>{
        fetchPlayersByTeam()
    }, [team])

    return (
        <PlayerContainer>
            <Header/>
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />

            <FormContainer>
                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Digite o nome do jogador"
                    value={newPlayerName}
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon 
                    name="add"
                    onPress={handleAddPlayer}
                />
            </FormContainer>
            <HeaderList>
                <FlatList 
                    data={["time a", "time b"]}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <Filter 
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Nenhum jogador nesse time"
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />

            <Button 
                title="REMOVER TURMA" 
                variant="SECONDARY"
                onPress={handleGroupRemove}
            />
        </PlayerContainer>
    )
}