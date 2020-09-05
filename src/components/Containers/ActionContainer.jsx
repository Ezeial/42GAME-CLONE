import React from 'react'
import Actions from '../PureComponents/ActionContainer/Actions'
import Player from '../PureComponents/ActionContainer/Player'

import useAction from '../../utils/useActions'
import { useShipStore } from '../../contexts/ShipContextProvider'

const Moves = Object.freeze({
    names: ['FORWARD', 'RIGHT', 'LEFT'],
    FORWARD: 90,
    RIGHT: 180,
    LEFT: 0
})

const colorPannel = Object.freeze({
    first: '#222',
    second: '#3E5',
    third: '#2FE'
})

function ActionContainer() {

    const { setAction, setActionIdx, getNextIdx, actionIdx,  actions } = useAction([ 4, 4 ])

    const { getNextShip, setShip, ship } = useShipStore()

    const handleTurn = (ship, actionIdx) => {
    }

    const handlePlay = () => {
    }
    
    const handleRun = () => {
        const doTurn = (ship, actionIdx) => {
            setShip(ship)
            setActionIdx(actionIdx)
            setTimeout(() => doTurn(getNextShip(actions[actionIdx.x][actionIdx.y], ship), getNextIdx(actions[actionIdx.x][actionIdx.y].move, actionIdx)), 1000)
        }
        doTurn(ship, actionIdx)
    }

    return (
        <>
            <button>stop</button>
            <Actions { ...{ actionIdx, actions, colorPannel }} moves = {Moves} handleClick = {setAction}/>
            <Player {...{ handleTurn, handleRun, handlePlay }}/>
        </>
    )
}

export default ActionContainer
