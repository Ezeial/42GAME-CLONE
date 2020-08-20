import {useState} from 'react'

const functions = [ 'F0', 'F1', 'F2', 'F3', 'F4', 'F5']

const useActions = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue.map(len => Array.from(Array(len)).map(a => {return { move: '', color: '' }})))
    const [actionIdx, setActionIdx] = useState({x: 0, y: 0})

    const getCurrent = () => actions[actionIdx.x][actionIdx.y]

    const isLast = () => actionIdx.y === actions[actionIdx.x].length - 1

    const setNextIdx = (current, prevIndex) => {
        if (functions.includes(current)) return setActionIdx({ x: functions.indexOf(current), y: 0 })
        if (isLast()) return

        setActionIdx({ x: prevIndex.x, y: prevIndex.y + 1 })
    }

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

    const resetActions = () => setActions(initialValue.map(len => Array.from(Array(len)).map(a => {return { move: '', color: '' }})))

    return {
        actionIdx,
        setNextIdx,
        setAction,
        resetActions,
        getCurrent,
        actions
    }
}

export default useActions