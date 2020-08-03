import React, {useState} from 'react'

const useQueue = () => {
    const [queue, setQueue] = useState([])
  
    const add = item => {
      setQueue([item, ...queue])
    }
  
    const excecute = arg => {
        if (queue.length === 0) return
      queue[queue.length - 1](arg)
      setQueue(queue.filter((item, i) => i !== queue.length - 1))
    }
  
    const print = () => {
      console.log(queue)
    }
  
    return {
      add,
      excecute,
      print
    }
  }

  export default useQueue