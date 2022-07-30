import { insert, selectAll, selectById, update, deleteById } from "./usersModel"
import { User } from "@/types/user/entity"
import { UserPostParam, UserPatchParam } from "@/types/user/form";

export const findAllUser = async (): Promise<User[]> => {
    return  await selectAll();
}

export const saveUser = async (param : UserPostParam): Promise<User> => {
    return await insert(param);
}

export const editUser = async (param : UserPatchParam): Promise<User> => {
    return await update(param);
}

export const getUser = async (id: string): Promise<User> => {
    return await selectById(id);
}

export const deleteUser = async (id: string) => {
    return await deleteById(id);
}
