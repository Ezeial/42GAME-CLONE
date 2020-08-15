import { useState } from "react";

const useQueue = (executeAction, initialValue = []) => {
  const [actions, setActions] = useState(initialValue);
  const [handler, setHandler] = useState();

  const resetQueue = () => {
    setActions(initialValue);
  };

  function add(action) {
    const prevActions = [...actions];
    prevActions.push(action);
    setActions(prevActions);
  }

  function executeAllQueue() {
    const handler = setInterval(executeLastAction, 1000);
    setHandler(handler);
  }

  function executeLastAction() {
    setActions((prevActions) => {
      console.info("Actions:", prevActions, "current action:", prevActions[0]);
      if (prevActions.length === 0) {
        setHandler((prevHandler) => clearInterval(prevHandler));
        return prevActions;
      }

      executeAction(prevActions[0]);
      const newActions = [...prevActions];
      newActions.shift();

      return newActions;
    });
  }

  function stopHandler() {
    setHandler((prevHandler) => clearInterval(prevHandler));
  }

  const isRunning = Boolean(handler);

  return {
    actions,
    resetQueue,
    executeLastAction,
    executeAllQueue,
    add,
    isRunning,
    stopHandler,
  };
};

export default useQueue;
