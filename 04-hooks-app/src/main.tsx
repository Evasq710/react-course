import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    <PokemonPage />
  </StrictMode>,
)
