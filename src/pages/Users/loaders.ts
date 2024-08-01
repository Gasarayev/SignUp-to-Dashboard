
import { user_get } from "../../api/users";

export async function profileLoader({ params }: any) {
    const { userID } = params
    const resp = await user_get(userID)
    return resp.data
}