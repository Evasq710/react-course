import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { Toaster } from 'sonner'
// import { MemoCounter } from './06-memos/MemoCounter'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWords } from './05-useReducer/ScrambleWords'
// import { TasksApp } from './05-useReducer/TaskApp'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLight } from './01-useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}

    {/*
     * <Suspense fallback={<Loading /}> 
     *  <Biography />
     * </Suspense>
     * Allows to display content until its children have finished loading
     */}
    {/* <Suspense fallback={
      <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">
          Cargando...
        </h2>
      </div>
    }>
      <ClientInformation getUser={getUserAction(100)} />
    </Suspense> */}

    <ProfessionalApp />
  </StrictMode>,
)
