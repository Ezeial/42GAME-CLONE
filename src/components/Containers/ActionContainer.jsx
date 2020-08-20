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

    const { getCurrent, actionIdx, setAction, actions, setNextIdx } = useAction([ 4, 4 ])

    const { ship, setNextShip, areColorSame } = useShipStore()

    const handlePause = () => {
        setNextShip('FORWARD', ship)
    }

    const handlePlay = () => {
        const { move, color } = getCurrent()
        
        setNextIdx(move, actionIdx)
        
        if (!areColorSame(color, ship)) return

        setNextShip(move, ship)
    }

    const handleRun = () => {
       setInterval(() => handlePlay(), 1000)
    }

    // actionIndex, 
    // elle va définir l'action en cours
    // quand on débute un tour ( action[actionIndex], ship ) -> newShip / (actionIndex) -> actionIndex++

    return (
        <>
            <Actions { ...{ actionIdx, actions, colorPannel }} moves = {Moves} handleClick = {setAction}/>
            <Player {...{ handlePause, handleRun, handlePlay }}/>
        </>
    )
}

export default ActionContainer
