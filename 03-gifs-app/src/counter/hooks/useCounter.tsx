import { useState } from "react";


/**
 * CUSTOM HOOK
 */
export const useCounter = (initialValue: number = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubtract = () => {
    setCounter(prevCounter => prevCounter - 1); // Si se manda un callback, este se dispara con el estado actual de este counter
  }

  const handleReset = () => {
    setCounter(initialValue);
  }

  return {
    // Properties
    counter,
    // Methos / Acitons
    handleAdd,
    handleSubtract,
    handleReset
  }
}
