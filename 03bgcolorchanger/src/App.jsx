import { useState } from 'react'

import './App.css'

function App() {
  let [color,setColor]=useState('olive');

  return (
    <div className='w-screen h-screen duration-600 ease-linear' style={{backgroundColor:color}} >
      <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0 gap-3'>
        
          <button className='bg-red-600 hover:-translate-y-1' onClick={()=>setColor('red')}>Red</button>
          <button className='bg-black hover:-translate-y-1' onClick={()=>setColor('black')}>Black</button>
          <button className='bg-green-600 hover:-translate-y-1' onClick={()=>setColor('green')}>Green</button>
          <button className='bg-pink-400 hover:-translate-y-1' onClick={()=>setColor('pink')}>Pink</button>
          <button className='bg-yellow-400 hover:-translate-y-1 text-black' onClick={()=>setColor('yellow')}>Yellow</button>
       


      </div>
      
      
    </div>
  )
}

export default App
