import React from 'react'
import styled from 'styled-components'
import PlaySvg from '../../../assets/Play.svg'
import RunSvg from '../../../assets/Run.svg'
import PauseSvg from '../../../assets/Pause.svg'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    padding: 5px;
    margin: 5px;
    border: solid 3px #222;
    border-radius: 5px;
`

const Svg = styled.img`
    width: 65px;
    height: 65px;
    transition: all 0.3s ease;
    &:hover {
        transform:scale(1.2);
    }

    cursor: pointer;
`

function Player({ handlePause, handleTurn, handleRun }) {
    return (
        <Container>
            <Svg src = {PlaySvg} onClick = {handleRun}/>
            <Svg src = {RunSvg} onClick = {handleTurn}/>
            <Svg src = {PauseSvg} onClick = {handlePause}/>
        </Container>
    )
}

export default Player;
