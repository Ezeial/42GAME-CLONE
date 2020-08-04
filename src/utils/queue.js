import {useState} from 'react'

const useQueue = (initialValue = []) => {
    const [actions, setActions] = useState([...initialValue, 'END'])
    const [actionIndex, setActionIndex] = useState(0)
  
    const add = item => {
      const tempArray = actions.filter(item => item !== 'END')
      setActions(tempArray)
      setActions([...tempArray, item, 'END'])
    }
  
    const increment = callback => {
      if (!actions[actionIndex + 1]) return
      setActionIndex(prev => prev + 1)
      console.log(actions[actionIndex])
    }
    
    const getAction = () => actions[actionIndex]

    const getActions = () => actions

    const isLast = () => actions[actionIndex] === 'END' ? true : false
  
    return {
      add,
      increment,
      getAction,
      getActions,
      isLast
    }
  }

  export default useQueue