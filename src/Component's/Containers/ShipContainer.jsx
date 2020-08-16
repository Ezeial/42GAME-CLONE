import React from 'react'
import Board from '../PureComponents/ShipContainer/Board'
import Ship from '../PureComponents/ShipContainer/Ship'

import Map1 from '../../map/map1.json'

// un hook pour géré le ship

function ShipContainer() {

    // appelle de hook

    return (
        <>
            <Board map = {Map1}>
                <Ship ship = {{x: 1, y: 1, r: 0}}/>
            </Board>
        </>
    )
}

export default ShipContainer
