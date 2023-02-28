import { useState } from 'react'
import { BrowserRouter,Routes,Route, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'


function App() {
  const [mode,setMode]=useState(false)
  const {id}=useParams()

  return (
    <div className={mode?"dark":""}>
      <div className={`dark:bg-[#232323] relative`}>
        <BrowserRouter>
        <Navbar setMode={setMode} mode={mode}/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>    
      </div>
    </div>
  )
}

export default App
