import { createContext } from "react";

import { defaultValTye } from "../types/iam/type";



const defaultIAM: defaultValTye | {} = {}

export const AIMContext = createContext(defaultIAM)


export const AIMProvider = AIMContext.Provider
