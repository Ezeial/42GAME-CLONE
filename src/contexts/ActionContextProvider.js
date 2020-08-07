import React, { createContext, useContext } from "react"
import useActions from '../utils/useActions'

const ActionContext = createContext({})

const ActionContextProvider = ({ children }) => {
    const { 
        setAction,
        getAction,
        resetActions,
        getActions,
        actions
    } = useActions([[
        { move: null, color: null}, 
        { move: null, color: null}, 
        { move: null, color: null}, 
        { move: null, color: null}],
    ]) // A RENDRE DYNAMIQUE PLUS TARD




    const values = {
        setAction,
        getAction,
        resetActions,
        getActions,
        actions
    }

    return <ActionContext.Provider value = {values}>{children}</ActionContext.Provider>
}

export function useActionStore() {
    return useContext(ActionContext);
}
  
export default ActionContextProvider;