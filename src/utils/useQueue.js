import { useState } from "react";

const useQueue = (initialValue = []) => {
  const [actions, setActions] = useState(initialValue);

  const increment = (callback) => {
    if (isLast()) return;
    setActions(actions.filter((a, i) => i !== 0));
  };

  const getAction = () => actions[0];

  const isLast = () => 0 === actions.length;

  const resetQueue = () => {
    setActions(initialValue);
  };

  // Nouvelle queue , [ 'F0' , 'FORWARD', 'UP' ]
  // si 'FO' -> map(newAction -> F0)
  // si 'ACTION' -> consomme l'action ( return new ship ) -> retire le premier item de l'array et set la nouvelle queue

  const mapFunction = (func, array) => {
    if (array.length === 1) return setActions([...func]);
    return setActions(
      array.reduce((acc, current, i) => {
        if (!Array.isArray(acc)) acc = [...func];
        acc.push(current);
        return acc;
      })
    );
  };

  return {
    increment,
    getAction,
    actions,
    resetQueue,
    mapFunction,
    isLast,
  };
};

export default useQueue;
