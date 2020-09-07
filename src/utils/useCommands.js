import {useState, useEffect} from 'react'
import useAction from './useActions'
import { useShipStore } from '../contexts/ShipContextProvider'

const useCommands = (initialValue = [ 4 ]) => {
    const { setAction, setActionIdx, getNextIdx, actionIdx,  actions } = useAction(initialValue)

    const { getNextShip, setShip, ship } = useShipStore()

    const [step, setStep] = useState(0)
    const [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        if (step > 1) {
        setShip(getNextShip(actions[actionIdx.x][actionIdx.y], ship))
        setActionIdx(getNextIdx(actions[actionIdx.x][actionIdx.y].move, actionIdx))
        }      
    }, [step])

    const handleRun = () => {
        setIntervalId(setInterval(() => {
            setStep(prev => prev + 1)
        }, 1000))
    }

    const handleTurn = () => {
        setShip(getNextShip(actions[actionIdx.x][actionIdx.y], ship))
        setActionIdx(getNextIdx(actions[actionIdx.x][actionIdx.y].move, actionIdx))
    }

    const handlePause = () => {
        clearInterval(intervalId)
    }

    return {
        handleTurn,
        handleRun,
        handlePause,
        actionIdx,
        actions,
        setAction
    }
}

export default useCommands