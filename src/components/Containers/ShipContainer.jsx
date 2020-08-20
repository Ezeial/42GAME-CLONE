import React from 'react'
import Board from '../PureComponents/ShipContainer/Board'
import Ship from '../PureComponents/ShipContainer/Ship'
import { useShipStore } from '../../contexts/ShipContextProvider'

// un hook pour géré le ship

function ShipContainer() {

    const { ship, map } = useShipStore()

    return (
        <>
            <Board map = {map}>
                <Ship ship = {ship}/>
            </Board>
        </>
    )
}

export default ShipContainer
