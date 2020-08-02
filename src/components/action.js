import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Queue from '../utils/queue'

const q = new Queue()

function Control({ shipControl }) {
    return (
        <div>
            <button onClick = {e => q.enqueue(shipControl.turnL)}>turnL</button>
            <button onClick = {e => q.enqueue(shipControl.turnR)}>turnR</button>
            <button onClick = {e => q.enqueue(shipControl.move)}>move</button>
            <button onClick = {e => q.dequeue()}>dq</button>
            <button onClick = {e => q.print()}>print</button>
        </div>
    )
}

export default Control
