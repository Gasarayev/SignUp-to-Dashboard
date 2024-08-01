
import axios from "axios";
import { BASE_URL } from "../index";


export const USERS = `${BASE_URL}/9cda598e0693b49ef1eb/`



export const users_get = () => axios.get(USERS)
export const user_get = (id?: string) => axios.get(`${USERS}${id}`)





