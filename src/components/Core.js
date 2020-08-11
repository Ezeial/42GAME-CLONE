import React from 'react';
import { useShipStore } from "../contexts/ShipContextProvider"
import { useActionStore } from "../contexts/ActionContextProvider"

function Core() {
    const {
        playNextTurn,
        reset
    } = useShipStore()

    const {
        resetActions
    } = useActionStore()

    const resetGame = () => {
        resetActions()
        reset()
    }

    return (
        <div>
            <button onClick = {resetGame}>reset</button>
            <button onClick = {playNextTurn}>playNextTurn</button>
        </div>
    )
}

export default Core;
