import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppError} from "@utils/AppError"

import { PLAYER_COLLECTION } from "@storage/config";

import { PlayerStorageDTO } from "./playerStorageDTO";
import { playerGetByGroup } from "./playerGetByGroup";

export async function PlayerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try {
        const storagedPlayers = await playerGetByGroup(group)

        const playerAlreadyExists = storagedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExists.length > 0){
            throw new AppError("Player already exists")
        }

        const storage = JSON.stringify([...storagedPlayers, newPlayer])
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
        throw error
    }
}