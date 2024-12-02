
import './App.css'
import Card from './components/Card'

function App() {
  
  

  return (
    <>
    <h2 className='bg-green-400 text-black p-4 font-bold mb-3'>Welcome to DJ Party</h2>
    <div className='flex p-4 space-x-2 align-middle '>
    <Card singername="Naina" song="Arijit"/>
    <Card singername="Dil Chata hai" song="Sonu"/>
    <Card singername="Choli ke piche" song="Mika"/>
    

   
    
    
    </div>
    
      
    </>
  )
}

export default App
