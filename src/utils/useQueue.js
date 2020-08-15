import {useState} from 'react'

// tous tes fichiers sont indent à 2 et celui-ci à 4. Il faut choisir

const useQueue = (initialValue = []) => {
    const [actions, setActions] = useState(initialValue)
  
    // on ne donne pas de paramètre inutile ! 
    const increment = () => {
      if (isLast()) return
      setActions(actions.filter((a, i) => i !== 0))
    }
    
    const getAction = () => actions[0]

    const isLast = () => 0 === actions.length
    
    const resetQueue = () =>{ 
      setActions(initialValue)
    }

    // Nouvelle queue , [ 'F0' , 'FORWARD', 'UP' ]
    // si 'FO' -> map(newAction -> F0)
    // si 'ACTION' -> consomme l'action ( return new ship ) -> retire le premier item de l'array et set la nouvelle queue

   const mapFunction = (func, array) => {
     // nom de variables : array c'est un array d'actions, de quoi ??? trouver un bon nom
    if (array.length === 1) return setActions([ ...func ]) 
    // "acc" c'est quoi ? faut être claire dans les noms
    return setActions(array.reduce((acc, current, i) => {
      if(!(Array.isArray(acc))) acc = [ ...func ]
      acc.push(current)
      return acc 
    }))
  }
 

    return {
      increment,
      getAction,
      actions,
      resetQueue,
      mapFunction,
      isLast
    }
  }

  export default useQueue