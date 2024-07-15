import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import UrunEkle from './pages/UrunEkleme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cyan-400'>
        <Navbar />
        <UrunEkle />
    </div>
  )
}

export default App
