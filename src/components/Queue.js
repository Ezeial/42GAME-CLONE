import React from 'react';
import { useShipStore } from "../contexts/ShipContextProvider"
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
function Queue() {
    
    const { displayedQueue } = useShipStore()

    return (
        <Container>
            { displayedQueue.map(a => <div>{a}</div>) }
        </Container>
    )
}

export default Queue;
