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
    width: 45px;
    height: 45px;

    cursor: pointer;

    transform: rotate(${props => props.rotate}deg);
    background-position: center;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-clip: padding;
`

function Player({ handlePlay, handlePause, handleRun }) {
    return (
        <Container>
            <Svg src = {PlaySvg} onClick = {handlePlay}/>
            <Svg src = {RunSvg} onClick = {handlePause}/>
            <Svg src = {PauseSvg} onClick = {handleRun}/>
        </Container>
    )
}

export default Player;
