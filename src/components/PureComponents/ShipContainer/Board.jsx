import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-rows: repeat(${props => props.x}, 1fr);
    grid-template-columns: repeat(${props => props.y}, 1fr); 
    grid-gap: 1px;
    padding: 10px;
`

const Container = styled(Grid)`
    position: relative;
    background-color: rgb(220, 220, 220);

    margin: 20px;
    border: solid 5px #222;
    border-radius: 5px;

    box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
    0 2px 2px rgba(0,0,0,0.20), 
    0 4px 4px rgba(0,0,0,0.15), 
    0 8px 8px rgba(0,0,0,0.10),
    0 16px 16px rgba(0,0,0,0.05);
`

const InvisibleGrid = styled(Grid)`
    position: absolute;
    top: 0;
    left: 0;
`

const Box = styled.div`
    border-radius: 5px;
    background-color: ${props => props.color || 'red'};
    display:flex;
    justify-content:center;
    align-items:center;
`

function Board({ children, map }) {

    const xLen = map.length
    const yLen = map[0].length 
    
    return (
        <Container x = {xLen} y = {yLen}>
            <InvisibleGrid x = {xLen} y = {yLen}>
                { children }
            </InvisibleGrid>
            {
                map.map((row) => {
                    return row.map((box) => <Box color = {box.color}/>)
                })
            }
        </Container>
    )
}

export default Board;
