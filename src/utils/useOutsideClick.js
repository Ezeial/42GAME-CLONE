import {useEffect, useRef, useCallback} from 'react'

const useOutsideClick = (cb) => {
    const node = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) return 
        document.removeEventListener("mousedown", handleClick)
        cb()
    }
      
    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
    }, [])

    return {
        node
    }
}

export default useOutsideClick