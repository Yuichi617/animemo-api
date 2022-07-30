import { insert, selectAll, selectByUser, update, deleteById } from "./postsModel"
import { Post } from "@/types/post/entity"
import { PostPostParam, PostPatchParam } from "@/types/post/form";

export const findAllPost = async (): Promise<Post[]> => {
    return await selectAll();
}

export const findPostByUser = async (user: string): Promise<Post[]> => {
    return await selectByUser(user);
}

export const savePost = async (param : PostPostParam): Promise<Post> => {
    return await insert(param);
}

export const editPost = async (param : PostPatchParam): Promise<Post> => {
    return await update(param);
}

export const deletePost = async (id: string) => {
    return await deleteById(id);
}
