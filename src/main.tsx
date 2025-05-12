import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'primereact/resources/themes/saga-blue/theme.css'; // Tema principal
import 'primereact/resources/primereact.min.css';         // Estilos principais do PrimeReact
import 'primeicons/primeicons.css';                       // Ícones do PrimeReact
import PlanetTable from './planets/PlanetsTable';


        

import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <PlanetTable/>
    
  </StrictMode>,
)


