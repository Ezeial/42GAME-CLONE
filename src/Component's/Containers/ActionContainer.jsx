import React from 'react'
import Actions from '../PureComponents/ActionContainer/Actions'
import Player from '../PureComponents/ActionContainer/Player'

import useAction from '../../utils/useActions'

function ActionContainer() {

    const fake = [
        [ { move: 'FORWARD', color: 'red' }, { move: 'LEFT', color: 'red' }, { move: 'RIGHT', color: 'red' }, { move: '', color: 'red' } ],
        [ { move: '', color: 'red' }, { move: '', color: 'red' }, { move: '', color: 'red' }, { move: '', color: 'red' } ]
    ]

    const { setAction, actions } = useAction([ 4, 4 ])

    const Moves = Object.freeze({
        names: ['FORWARD', 'RIGHT', 'LEFT'],
        FORWARD: 90,
        RIGHT: 180,
        LEFT: 0
    })

    return (
        <>
            <Actions actions = {actions} moves = {Moves} handleClick = {setAction}/>
            <Player/>
        </>
    )
}

export default ActionContainer
