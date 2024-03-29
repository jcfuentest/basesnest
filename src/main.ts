import './style.css'

import { setupCounter } from './counter'
import {charmander} from './bases/03-clases'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>${charmander.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
