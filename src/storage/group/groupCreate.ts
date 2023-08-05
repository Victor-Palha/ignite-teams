import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroupName: string){
    try {
        const storagedGroups = await groupsGetAll()

        const groupAlreadyExists = storagedGroups.includes(newGroupName)
        if(groupAlreadyExists){
            throw new AppError('Group already exists')
        }
        const newStorage = JSON.stringify([...storagedGroups, newGroupName])

        await AsyncStorage.setItem(GROUP_COLLECTION, newStorage)
    } catch (error) {
        throw error
    }
}