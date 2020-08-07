import { useState } from 'react'


// array of toggled ( false / true)

const useToggle = (length) => {
    const [toggled, setToggled] = useState(Array.from(Array(length)).map(i => false))
    const toggle = (idx) => setToggled(toggled.map((bool, i) => {
        if (bool && !(i === idx)) return false
        else if (!bool && i === idx) return true
        else {
          return bool
        }
    }))
    const reset = () => {
        setToggled(Array.from(Array(length)).map(i => false))
    }
    return {
        toggled,
        toggle,
        reset
    }
}

export default useToggle