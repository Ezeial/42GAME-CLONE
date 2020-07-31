import React from 'react'
import styled from 'styled-components'

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


/*


*/
function Board({ map, children }) {

    const xLen = map.length
    const yLen = map[0].length

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Board;
