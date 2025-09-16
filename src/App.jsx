import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {persons} from "../data.js"


export const App =() => {
  const [pers, setPers] = useState(persons)

  return (
    
      <div className='d-flex justify-content-center align-items-center flex-column'>
        
        <Header/>
        <Counter count={pers.length}/>
        {pers.length!=0&& <PersList pers={pers} setPers = {setPers}/>}
      </div>
  )
}

