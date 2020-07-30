import React, { useState } from 'react'
import styled from 'styled-components'
import Map1 from '../map/map1.json'

import Arrow from '../assets/Arrow.svg'

const Container = styled.div`
    position: relative;
    width: 500px;
    height: 500px;

    display: grid;
    background-color: rgb(220, 220, 220);
    grid-template-rows: repeat(${props => props.x}, 1fr);
    grid-template-columns: repeat(${props => props.y}, 1fr); 
    grid-gap: 1px;

    padding: 10px;
    border: solid 5px black;
    border-radius: 5px;
`

const InvisibleGrid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-rows: repeat(${props => props.x}, 1fr);
    grid-template-columns: repeat(${props => props.y}, 1fr); 
    grid-gap: 1px;
    padding: 10px;
`

const Box = styled.div`
    border-radius: 5px;
    background-color: ${props => props.color || '#444'};
    display:flex;
    justify-content:center;
    align-items:center;
`

const ShipSvg = styled.img`
    width: 30px;
    transform: rotate(${props => props.rotation}deg);

    grid-column-start: ${props => props.x};
    grid-column-end: ${props => props.x + 1};
    grid-row-start: ${props => props.y};
    grid-row-end: ${props => props.y + 1};

    justify-self: center;
    align-self:center;
`

/*

Le board :
    - sa taille sera définit par le tableau d'objet qu'on récupere

    array[x][y] = [
        [{obj}, {obj}, {obj}],
        [{obj}, {obj}, {obj}],
        [{obj}, {obj}, {obj}]
    ]

    x: column , y: rows

        obj (case): {
            color: '#000',
            stars: true
        }

    On mappe le board avec comme deux variable la taille des arrays
    On mappe les cases avec comme couleur la proriété color

*/

function Ship() {
    const [position, setPosition] = useState({x: 1, y: 1})
    
    return <ShipSvg x = {position.x} y = {position.y} src = {Arrow}/>
}

function Board() {

    const xLen = Map1.length
    const yLen = Map1[0].length

    return (
        <React.Fragment>
            <Container x = {xLen} y = {yLen}>
                <InvisibleGrid x = {xLen} y = {yLen}>
                    <Ship/>
                </InvisibleGrid>
                {
                    Map1.map((row) => {
                        return row.map((box) => <Box color = {box.color}/>)
                    })
                }
            </Container>
        </React.Fragment>
    )
}

export default Board;
