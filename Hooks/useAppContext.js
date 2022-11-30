import React, { createContext, useContext } from "react";
import { useDummyProvider } from "./Providers/useDummyProvider";
import { useMenuProvider } from "./Providers/useMenuProvider"

const appContext = createContext();

export const AppProvider =({children})=>{
    const Menu = useMenuProvider();
    const dummy = useDummyProvider();
    return(
        <appContext.Provider value={{Menu, dummy}}>
            {children}
        </appContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(appContext);
};