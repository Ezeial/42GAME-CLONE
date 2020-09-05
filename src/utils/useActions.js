import {useState} from 'react'

const functions = [ 'F0', 'F1', 'F2', 'F3', 'F4', 'F5']

const useActions = (initialValue = []) => {
    
    const [actions, setActions] = useState(initialValue.map(len => Array.from(Array(len)).map(a => {return { move: '', color: '' }})))
    const [actionIdx, setActionIdx] = useState({x: 0, y: 0})

    const isLast = (currentIdx, actions) => currentIdx.y === actions[currentIdx.x].length - 1

    const getNextIdx = (move, currentIdx) => {
        if (functions.includes(move)) return { x: functions.indexOf(move), y: 0 }
        if (isLast(currentIdx, actions)) return currentIdx

        return { x: currentIdx.x, y: currentIdx.y + 1 }
    }

    const setAction = (newProp, functionNumber, index) => {
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
        actions,
        actionIdx,
        setAction,
        resetActions,
        getNextIdx,
        setActionIdx
    }
}

export default useActions