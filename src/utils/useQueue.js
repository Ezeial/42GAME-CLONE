import {useState} from 'react'

const useQueue = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)
    const [actionIndex, setActionIndex] = useState(0)
  
    const add = action => {
      setActions([...actions, action])
    }
  
    const increment = callback => {
      if (isLast()) return
      setActionIndex(prev => prev + 1)
      console.log(actions[actionIndex])
    }
    
    const getAction = () => actions[actionIndex]

    const isLast = () => actionIndex === actions.length - 1
  
    return {
      add,
      increment,
      getAction,
      actions,
      isLast
    }
  }

  export default useQueue