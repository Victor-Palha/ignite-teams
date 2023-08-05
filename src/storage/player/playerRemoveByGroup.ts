import AsyncStorage from "@react-native-async-storage/async-storage"
import { playerGetByGroup } from "./playerGetByGroup"
import { PLAYER_COLLECTION } from "@storage/config"

export async function playerRemoveByGroup(playerName: string, group: string){
    try {
        const storage = await playerGetByGroup(group)

        const filteredPlayers = storage.filter((player) => player.name !== playerName)

        const player = JSON.stringify(filteredPlayers)

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, player)
    } catch (error) {
        throw error
    }
}