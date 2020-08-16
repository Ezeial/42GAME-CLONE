import React, { useEffect } from 'react'
import styled from 'styled-components'
import Move from '../../../assets/Move.svg'
import useToggle from '../../../utils/useToggle'

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

const FunctionBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    margin: 5px;
    padding: 5px;
`

const Select = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: ${props => props.bg ? props.bg : '#FFF'};
    border-radius: 5px;
    padding: 5px;
    margin: 10px;

    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 30px;
    font-weight: bold;

    outline: none;
    cursor: pointer;
    
    border: solid 2px ${props => props.bg ? props.bg : '#EEE'};

    transition: all 0.3s;
    &:hover {
        transform:scale(1.1);
    }
    ${props => props.toggled && `
        border-color: yellow;
        transform:scale(1.1);
    `}
`

const Svg = styled.img`
    width: 45px;
    height: 45px;

    transform: rotate(${props => props.rotate}deg);
    background-position: center;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-clip: padding;
`

const AskContainer = styled(Container)`
    position: absolute;
    top:0;
    transform: translateY(-300px);
    background-color: rgba(220, 220, 220, 0.8);
`

const Flex = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
`

function AskPannel({ handleClick, i, y }) {
    return <AskContainer>
            <Flex>
                <Select onClick = {e => handleClick({ move: 'F0' }, i, y)}>
                    F0
                </Select>
                <Select onClick = {e => handleClick({ move: 'F1' }, i, y)}>
                    F1
                </Select>
                <Select onClick = {e => handleClick({ color: '#FFF' }, i, y)} bg = '#FFF'/>
            </Flex>
            <Flex>
                <Select onClick = {e => handleClick({ move: 'LEFT' }, i, y)}>
                    <Svg src = {Move} rotate = {0}/>
                </Select>
                <Select onClick = {e => handleClick({ move: 'FORWARD' }, i, y)}>
                    <Svg src = {Move} rotate = {90}/>
                </Select>
                <Select onClick = {e => handleClick({ move: 'RIGHT' }, i, y)}>
                    <Svg src = {Move} rotate = {180}/>
                </Select>
            </Flex>
            <Flex>
                <Select onClick = {e => handleClick({ color: '#EDA' }, i, y)} bg = '#EDA'/>
                <Select onClick = {e => handleClick({ color: '#ADE' }, i, y)} bg = '#ADE'/>
                <Select onClick = {e => handleClick({ color: '#DFE' }, i, y)} bg = '#DFE'/>
            </Flex>
        </AskContainer>
}

function Actions({ actions, moves, handleClick }) {

    const { toggle, toggled, reset } = useToggle(actions.map(func => func.length))

    return (
        <Container>
            {
                actions.map((func, i) => {
                    return <FunctionBox>
                        <Select bg = '#EEE'> F{i}</Select>
                        {
                            func.map((action, y) => {
                                return <Select onClick = {e => toggle(i, y)} toggled =  {toggled[i][y]} bg = {action.color}>
                                    {
                                        moves.names.includes(action.move) ? <Svg src = {Move} rotate = {moves[action.move]}/> : action.move
                                    }
                                    {
                                        toggled[i][y] && <AskPannel i = {i} y = {y} handleClick = {handleClick}/>
                                    }
                                </Select>
                            })
                        }
                    </FunctionBox>

                })
            }
        </Container>
    )
}

export default Actions;
