import {useState} from 'react'

const useActions = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)

    const colors = Object.freeze({
        first: '#16a085',
        second: '#8e44ad',
        third: '#c0392b'
    })

    const setAction = ( newProp, functionNumber, index) => {
        const newArray = actions.map((func, funcNb) => {
            if (funcNb === functionNumber) {
                return func.map((action, i) => {
                    if (i === index) {
                        return {...action, ...newProp}
                    }
                    return action
                })
            }
        })
        setActions(newArray)
    }

    const getAction = (functionNumber, index) => actions[functionNumber][index]
    
    const getActions = (functionNumber) => actions[functionNumber]

    const resetActions = () => setActions(initialValue)

    return {
        setAction,
        getAction,
        getActions,
        resetActions,
        actions,
        colors
    }
}

export default useActions