import React from 'react'
import Board from './components/board'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Board/>
    </Container>
  )
}

export default App
