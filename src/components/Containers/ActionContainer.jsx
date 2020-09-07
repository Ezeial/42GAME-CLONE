import React from 'react'
import Actions from '../PureComponents/ActionContainer/Actions'
import Player from '../PureComponents/ActionContainer/Player'
import useCommands from '../../utils/useCommands'

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

    const {
        handleTurn,
        handleRun,
        handlePause,
        actionIdx,
        actions,
        setAction
    } = useCommands([4, 4])


    return (
        <>
            <Actions { ...{ actionIdx, actions, colorPannel }} moves = {Moves} handleClick = {setAction}/>
            <Player {...{ handleTurn, handleRun, handlePause }}/>
        </>
    )
}

export default ActionContainer
