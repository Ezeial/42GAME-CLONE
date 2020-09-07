import React from 'react'
import styled from 'styled-components'
import Move from '../../../assets/Move.svg'
import useToggle from '../../../utils/useToggle'
import useOutsideClick from '../../../utils/useOutsideClick'

const Container = styled.div`
    display:flex;
    align-items:flex-start;
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

    ${props => props.toggled && `
        border-color: yellow;
        transform:scale(1.1);
    `}
    ${props => props.current &&`
        border: 2px solid red;
    `}
    ${props => !props.static &&`
        transition: all 0.3s;
        &:hover {
            transform:scale(1.1);
        }
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


function AskPannel({ reset, handleClick, i, y, colorPannel, actions }) {

    const { node } = useOutsideClick(reset)

    const { first, second, third } = colorPannel

    return <AskContainer ref = {node}>
            <Flex>
                {
                    actions.map((f, nb) => <Select onClick = {e => handleClick({ move: `F${nb}` }, i, y)}>F{nb}</Select>)
                }
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
                <Select onClick = {e => handleClick({ color: first }, i, y)} bg = {first}/>
                <Select onClick = {e => handleClick({ color: second }, i, y)} bg = {second}/>
                <Select onClick = {e => handleClick({ color: third }, i, y)} bg = {third}/>
            </Flex>
        </AskContainer>
}

function Actions({ actions, moves, handleClick, actionIdx, colorPannel }) {

    const { toggle, toggled, reset } = useToggle(actions.map(func => func.length))

    return (
        <Container>
            {
                actions.map((func, i) => {
                    return <FunctionBox>
                        <Select static bg = '#EEE'> F{i}</Select>
                        {
                            func.map((action, y) => {
                                return <Select current = {actionIdx.x === i && actionIdx.y === y} onClick = {e => toggle(i, y)} toggled =  {toggled[i][y]} bg = {action.color}>
                                    {
                                        moves.names.includes(action.move) ? <Svg src = {Move} rotate = {moves[action.move]}/> : action.move
                                    }
                                    {
                                        toggled[i][y] && <AskPannel { ...{ handleClick, reset, colorPannel, i, y, actions }}/>
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
