import { createContext, ReactNode, useState } from "react";



export const ThemeContext = createContext<any>(null)


type ThemeContextProvider_T = {
    children: ReactNode
}


const ThemeContextProvider = ({children}: ThemeContextProvider_T) => {

    const [color, setColor] = useState("light")

    return (
        <div>
            <ThemeContext.Provider value={{color, setColor}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeContextProvider