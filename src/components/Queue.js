import React from 'react';
import { useShipStore } from "../contexts/ShipContextProvider"
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
function Queue() {
    
    const { actions } = useShipStore()

    return (
        <Container>
            { actions.map((a, i) => <div key = {i}>{a}</div>) }
        </Container>
    )
}

export default Queue;
