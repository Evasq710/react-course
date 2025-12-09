import { useState } from "react"

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

// If we add a new color in the colors object, it will be recognized as a new valid string type
type TrafficLightColor = keyof typeof colors;

// type TrafficLightColor = 'red' | 'yellow' | 'green';


export const TrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColor>('red');

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">

        {/* Semáforo */}
        <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'}  rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'}  rounded-full`}></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            onClick={() => setLight('red')}
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Rojo
          </button>
          <button
            onClick={() => setLight('yellow')}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Amarillo
          </button>
          <button
            onClick={() => setLight('green')}
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Verde
          </button>

        </div>
      </div>
    </div>
  )
}