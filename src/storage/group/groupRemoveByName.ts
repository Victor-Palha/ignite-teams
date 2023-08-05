import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/config"

export async function groupRemoveByName(groupName: string){
    try {
        const storagedGroups = await groupsGetAll()
        const groups = storagedGroups.filter(group => group !== groupName)

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`)
    } catch (error) {
        throw error
    }
}