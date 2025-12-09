import { useTrafficLight } from "../hooks/useTrafficLight"

export const TrafficLightWithHook = () => {

  // Custom Hook with all the logic
  const { countDown, percentage, redLightClass, greenLightClass, yellowLightClass } = useTrafficLight();

  return (
    <div className="bg-gradient">
      <div className="flex flex-col items-center space-y-8">

        <h1 className="text-white text-3xl font-thin">Semáforo con useEffect</h1>

        <h2 className="text-white text-xl">Countdown {countDown}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${percentage}%` }}
          >
          </div>
        </div>

        {/* Semáforo */}
        <div className={`w-32 h-32 ${redLightClass} rounded-full`}></div>
        <div className={`w-32 h-32 ${yellowLightClass} rounded-full`}></div>
        <div className={`w-32 h-32 ${greenLightClass} rounded-full`}></div>
      </div>
    </div>
  )
}