
import axios from "axios";
import { BASE_URL } from "../index";


export const IAM_PROFILE = `${BASE_URL}/9cda598e0693b49ef1eb/0/`



export const iam_get = () => axios.get(IAM_PROFILE)





