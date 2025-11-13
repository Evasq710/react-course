import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { FirstStepsApp } from './FirstStepsApp'
import { MainPage } from './MainPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FirstStepsApp /> */}
    <MainPage />
  </StrictMode>,
)
