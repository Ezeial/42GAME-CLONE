import {useState} from 'react'

const useActions = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)

    // colors est une constante il n'a pas à être exporté ici.
    // ici c'est un hooks qui fait des choses pas un exportateur de data
    // PAS DE DATA dans les composants 
    // en + il n'était pas utilisé 

    const setAction = ( newProp, functionNumber, index) => {
        const newArray = actions.map((func, funcNb) => {
            if (funcNb === functionNumber) {
                return func.map((action, i) => {
                    if (i === index) {
                        return {...action, ...newProp}
                    }
                    return action
                })
            } else return func
        })
        setActions(newArray)
    }
    
    const getActions = (functionNumber) => actions[functionNumber]
    

    const resetActions = () => setActions(initialValue)

    return {
        setAction,
        getActions,
        resetActions,
        actions
    }
}

export default useActions