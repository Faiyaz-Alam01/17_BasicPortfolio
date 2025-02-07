import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //variale
    themeMode: "light",
    //method
    darkTheme: () => {},
    lightTheme: () => {},
})

//theme provider lekar wrap kar dunga : ThemeContext.Provider
export const ThemeProvider = ThemeContext.Provider

export default function useTheme (){
    return useContext(ThemeContext)
}