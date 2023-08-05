import React, { useState } from "react";
import { FormContainer, HeaderList, NumbersOfPlayers, PlayerContainer } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";

interface RouteParams {
    group: string;
}

export function Players(){

    const [team, setTeam] = useState('time a')

    const [players, setPlayers] = useState<string[]>([])

    const route = useRoute()
    const {group} = route.params as RouteParams

    return (
        <PlayerContainer>
            <Header/>
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />

            <FormContainer>
                <Input
                    placeholder="Digite o nome do jogador"
                    autoCorrect={false}
                />
                <ButtonIcon 
                    name="add"
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
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {
                            return
                        }}
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

            <Button title="REMOVER TURMA" variant="SECONDARY"/>
        </PlayerContainer>
    )
}