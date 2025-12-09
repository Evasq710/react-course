import { useEffect, useState } from "react"

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

// If we add a new color in the colors object, it will be recognized as a new valid string type
type TrafficLightColor = keyof typeof colors;

const initialSeconds: Record<TrafficLightColor, number> = {
  red: 5,
  yellow: 4,
  green: 8,
}


export const TrafficLightWithEffect = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countDown, setCountDown] = useState(5);

  /**
   * useEffect
   * @param effect — Imperative function that can return a cleanup function
   * @param deps — If present, effect will only activate if the values in the list change.
   *  - If deps is omittted, the 'effect' function will execute after every render of the component.
   *  - If deps is an empty array ([]), the 'effect' function will execute only once, when the component initially mounts
   *  - If deps is an array with values, the 'effect' function will re-execute whenever any of those values change
   * 
   * @param effect: @returns - Cleanup function. Executed in two main scenarios:
   *  1. Before the next re-render when dependencies change
   *  2. When the component unmounts
   */

  // Countdown effect
  useEffect(() => {
    if (countDown === 0) return;

    /**
     * setTimeout: Executes a function or a block of code ONCE after a specified delay. Can be cleared with clearTimeout
     * setInterval: Executes a function or a block of code REPEATEDLY at a fixed interval. Can be cleared with clearInterval
     * In this context, setInterval doesn't make sense, because the countdown change will trigger the effect execution again
     */
    const timeoutId = setTimeout(() => {
      setCountDown(prev => prev - 1);
    }, 1000);

    // Cleanup function, necessary for the firs renderization (StrictMode > 2 renders at the beginning)
    return () => {
      clearTimeout(timeoutId);
    }
  }, [countDown]);

  // Change light color effect
  useEffect(() => {
    if (countDown !== 0) return;

    let newColor: TrafficLightColor;

    switch (light) {
      case 'red':
        newColor = 'green';
        break;
      case 'yellow':
        newColor = 'red';
        break;
      case 'green':
        newColor = 'yellow';
        break;
    }

    setLight(newColor);
    setCountDown(initialSeconds[newColor]);

  }, [countDown]);

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Semáforo con useEffect</h1>

        <h2 className="text-white text-xl">Countdown {countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${countDown / initialSeconds[light] * 100}%` }}
          >
          </div>
        </div>

        {/* Semáforo */}
        <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'}  rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'}  rounded-full`}></div>
      </div>
    </div>
  )
}