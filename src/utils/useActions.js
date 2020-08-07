import {useState} from 'react'

const useActions = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)

    const setAction = (newProp, index) => setActions(actions.map((item, i) => i === index && {...item, ...newProp} ))

    const getAction = (index) => actions[index]

    const resetActions = () => setActions([])

    return {
        setAction,
        getAction,
        resetActions
    }
}

export default useActions