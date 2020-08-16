import { useState } from 'react'


// array of array of toggled ( false / true)

const useToggle = (lists) => {
    const [toggled, setToggled] = useState(lists.map(len => Array.from(Array(len)).map(toggle => false)))

    const toggle = (listNb, idx) => setToggled(toggled.map((list, i) => {
        if ( i === listNb) {
            return list.map((toggle, y) => y === idx ? true : false)
        }
        return list.map(e => false)
    }))

    const reset = () => {
        setToggled(lists.map(len => Array.from(Array(len)).map(toggle => false)))
    }

    return {
        toggled,
        toggle,
        reset
    }
}

export default useToggle