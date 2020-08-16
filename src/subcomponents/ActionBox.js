import React, { useEffect } from 'react'
import styled from 'styled-components'
import useToggle from '../utils/useToggle'
import Move from '../assets/Move.svg'
import { useActionStore } from "../contexts/ActionContextProvider"
 
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction: column;
    padding: 5px;
    margin: 5px;
    border: solid 3px #222;
    border-radius: 5px;
`

const SelectButtonContainer = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: ${props => props.bg ? props.bg : '#FFF'};
    border-radius: 5px;
    padding: 5px;
    margin: 5px;

    display:flex;
    align-items:center;
    justify-content:center;

    color: ${props => props.color ? props.color : '#222'};
    font-size: 30px;
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
    width: 40px;
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
    transform:translateY(-300px);

`

const AskBoxPannel = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const AskBox = ({ reset, functionNumber, i }) => {
    const toggleL = useToggle(4)
    const toggleR = useToggle(4)
    const { setAction } = useActionStore()

    const colors = Object.freeze({
        first: '#16a085',
        second: '#8e44ad',
        third: '#c0392b'
    })

    useEffect(() => {
        if (toggleL.toggled.find(bool => bool === true) && toggleR.toggled.find(bool => bool === true)) reset()
    }, [toggleL.toggled, toggleR.toggled, reset])

    return <AskBoxContainer>
        <AskBoxPannel >
            <SelectButtonContainer onClick = {() => {
                setAction({ move: 'F0' }, functionNumber, i)
                toggleL.toggle(0)
                }} 
            toggled = {toggleL.toggled[0]} 
            shadow>F0</SelectButtonContainer>
            <SelectButtonContainer onClick = {() => {
                setAction({ move: 'FORWARD' }, functionNumber, i)
                toggleL.toggle(1)
                }}  toggled = {toggleL.toggled[1]} shadow move ><Svg src = {Move} rotate = {90}/></SelectButtonContainer>
            <SelectButtonContainer onClick = {() => {
                setAction({ move: 'LEFT' }, functionNumber, i)
                toggleL.toggle(2)
                }}  toggled = {toggleL.toggled[2]} shadow move ><Svg src = {Move} rotate = {0}/></SelectButtonContainer>
            <SelectButtonContainer onClick = {() => {
                setAction({ move: 'RIGHT' }, functionNumber, i)
                toggleL.toggle(3)
                }}  toggled = {toggleL.toggled[3]} shadow move ><Svg src = {Move} rotate = {180}/></SelectButtonContainer>
        </AskBoxPannel>
        <AskBoxPannel>
            <SelectButtonContainer onClick = {() => {
                setAction({ color: colors.first }, functionNumber, i)
                toggleR.toggle(0)
                }} toggled = {toggleR.toggled[0]} shadow bg = {colors.first}/>
            <SelectButtonContainer onClick = {() => {
                setAction({ color: colors.second }, functionNumber, i)
                toggleR.toggle(1)
                }} toggled = {toggleR.toggled[1]} shadow bg = {colors.second}/>
            <SelectButtonContainer onClick = {() => {
                setAction({ color: colors.third }, functionNumber, i)
                toggleR.toggle(2)
                }} toggled = {toggleR.toggled[2]} shadow bg = {colors.third}/>
            <SelectButtonContainer onClick = {() => {
                setAction({ color: colors.reset }, functionNumber, i)
                toggleR.toggle(3)
                }} toggled = {toggleR.toggled[3]} shadow bg = {colors.reset}/>
        </AskBoxPannel>
    </AskBoxContainer>
}

const SelectButton = ({ i, toggled, toggle, reset, instruction, functionNumber }) =>  {
    const moveEnum = Object.freeze({
        FORWARD: 90,
        LEFT: 0,
        RIGHT: 180
    })
    return <SelectButtonContainer onClick = {() => toggle(i)} toggled = {toggled[i]} bg = {instruction.color}>
        {i === toggled.indexOf(true) && <AskBox i = {i} functionNumber = {functionNumber} reset = {reset} />}
        {(instruction.move && !instruction.move.startsWith('F0')) && <Svg src = {Move} rotate = {moveEnum[instruction.move]}/>}
        {(instruction.move && instruction.move.startsWith('F0')) && instruction.move}
    </SelectButtonContainer>
}

const FunctionBox = ({ func, functionNumber }) => {
    const { toggle, toggled, reset } = useToggle(4)

    return <FunctionBoxContainer>
        <SelectButtonContainer color = '#EEE' bg = '#222'>F{functionNumber}</SelectButtonContainer>
        {
           func.map((instruction, i) => <SelectButton key = {i} functionNumber = {functionNumber}  reset = {reset} toggle = {toggle} toggled = {toggled} i = {i} instruction = {instruction}/>) 
        }
    </FunctionBoxContainer>
}

function ActionBox() {
    const { actions } = useActionStore()

    return <Container>
            {actions.map((func, i) => <FunctionBox key = {i} functionNumber = {i} func = {func}/> )}
    </Container>
}

export default ActionBox;
