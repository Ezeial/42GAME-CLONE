import React from 'react';
import { useShipStore } from "../contexts/ShipContextProvider"
import { useActionStore } from "../contexts/ActionContextProvider"

function Core() {
    const {
        playNextTurn,
        adds,
        reset
    } = useShipStore()

    const {
        actions,
        resetActions
    } = useActionStore()

    const resetGame = () => {
        resetActions()
        reset()
    }

    const enqueue = (e) => {
        adds(actions[0].map(a => a.move))
    }

    return (
        <div>
            <button onClick = {resetGame}>reset</button>
            <button onClick = {playNextTurn}>playNextTurn</button>
        </div>
    )
}

export default Core;
