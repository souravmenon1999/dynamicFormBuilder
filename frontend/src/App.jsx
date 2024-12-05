import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import MainArea from './components/mainArea'
import { MyContext } from './context'

function App() {
  const [mainComponent, setmainComponent] = useState(true)


  return (


    <>

    <MyContext.Provider value={{mainComponent,setmainComponent}}>
          <div className='flex'>
            <div className='w-40'>
              <Sidebar/>
            </div>
          <div className='w-60'>
              <MainArea/>
          </div>
          
          </div>    
    </MyContext.Provider>
    
   
    </>
  )
}

export default App
