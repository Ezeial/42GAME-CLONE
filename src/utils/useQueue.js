import {useState, useEffect} from 'react'

const useQueue = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)
    const [actionIndex, setActionIndex] = useState(0)
    const [displayedQueue, setDisplayedQueue] = useState(initialValue)

    useEffect(() => {
      if (actions.length > 10) {
        setDisplayedQueue(actions.filter((action, i) => i > actions.length - 11))
      } else setDisplayedQueue(actions)
      console.log(displayedQueue)
    }, [actions])

    const add = action => {
      setActions([...actions, action])
    }

    const adds = newActions => {
      setActions([...actions, ...newActions])
    }
  
    const increment = callback => {
      if (isLast()) return
      setActionIndex(prev => prev + 1)
    }
    
    const getAction = () => actions[actionIndex]

    const isLast = () => actionIndex === actions.length
    
    const resetQueue = () =>{ 
      setActionIndex(0)
      setActions(initialValue)
    }

    return {
      add,
      increment,
      getAction,
      actions,
      resetQueue,
      adds,
      isLast,
      displayedQueue
    }
  }

  export default useQueue