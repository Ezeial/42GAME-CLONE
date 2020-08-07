import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import useActions from '../utils/useActions'
import useToggle from '../utils/useToggle'
import Move from '../assets/Move.svg'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    padding: 5px;
    margin: 5px;
    border: solid 3px #222;
    border-radius: 5px;
`

const SelectButtonContainer = styled.button`
    position: relative;
    width: 75px;
    height: 75px;
    background-color: ${props => props.bg ? props.bg : '#EEE'};
    border-radius: 5px;
    padding: 5px;
    margin: 5px;

    display:flex;
    align-items:center;
    justify-content:center;

    color: ${props => props.color ? props.color : '#222'};
    font-size: 40px;
    font-weight: bold;

    border: none;
    cursor: pointer;
    outline:none;
    ${props => props.shadow && `
    box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
    0 2px 2px rgba(0,0,0,0.20), 
    0 4px 4px rgba(0,0,0,0.15), 
    0 8px 8px rgba(0,0,0,0.10),
    0 16px 16px rgba(0,0,0,0.05);
    border: solid 1.5px #222;
    `}
    ${props => props.toggled &&`
    border-color: #111;
    transform:scale(1.1);
    `}
    transition: all 0.7s;
    &:hover {
        transform:scale(1.1);
    }
`

const Svg = styled.img`
    width: 50px;
    transform: rotate(${props => props.rotate}deg);
`

const FunctionBoxContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    margin: 5px;
    padding: 5px;
`

const AskBoxContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    position: absolute;
    top:0;
    transform:translateY(-285px);

    z-index: 50;
`

const AskBoxPannel = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const AskBox = ({ reset }) => {
    const toggleL = useToggle(3)
    const toggleR = useToggle(3)

    useEffect(() => {
        if (toggleL.toggled.find(bool => bool === true) && toggleR.toggled.find(bool => bool === true)) reset()
    }, [toggleL.toggled, toggleR.toggled])
    
    return <AskBoxContainer>
        <AskBoxPannel>
            <SelectButtonContainer onClick = {() => toggleL.toggle(0)} toggled = {toggleL.toggled[0]} shadow move ><Svg src = {Move} rotate = {90}/></SelectButtonContainer>
            <SelectButtonContainer onClick = {() => toggleL.toggle(1)} toggled = {toggleL.toggled[1]} shadow move ><Svg src = {Move} rotate = {0}/></SelectButtonContainer>
            <SelectButtonContainer onClick = {() => toggleL.toggle(2)} toggled = {toggleL.toggled[2]} shadow move ><Svg src = {Move} rotate = {180}/></SelectButtonContainer>
        </AskBoxPannel>
        <AskBoxPannel>
            <SelectButtonContainer onClick = {() => toggleR.toggle(0)} toggled = {toggleR.toggled[0]} shadow bg = '#123'/>
            <SelectButtonContainer onClick = {() => toggleR.toggle(1)} toggled = {toggleR.toggled[1]} shadow bg = '#234'/>
            <SelectButtonContainer onClick = {() => toggleR.toggle(2)} toggled = {toggleR.toggled[2]} shadow bg = '#345'/>
        </AskBoxPannel>
    </AskBoxContainer>
}

const SelectButton = ({ bg, i, toggled, toggle, reset }) =>  {
    return <SelectButtonContainer onClick = {() => toggle(i)} toggled = {toggled[i]} bg = {bg}>
        {i === toggled.indexOf(true) && <AskBox reset = {reset} />}
    </SelectButtonContainer>
}

const FunctionBox = ({ length, i }) => {
    const { toggle, toggled, reset } = useToggle(4)

    return <FunctionBoxContainer>
        <SelectButtonContainer color = '#EEE' bg = '#222'>F{i}</SelectButtonContainer>
        {
           length.map((a, i) => <SelectButton  reset = {reset} toggle = {toggle} toggled = {toggled} i = {i} bg = '#FFF'/>) 
        }
    </FunctionBoxContainer>
}

function ActionBox() {
    const functionsSchema = [ 4 ]
    const { getAction, setAction } = useActions()

    return <Container>
            {functionsSchema.map((caseNumber, i) => <FunctionBox i = {i} length = {Array.from(Array(caseNumber))}/>)}
    </Container>
}

export default ActionBox;
