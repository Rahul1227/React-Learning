import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/'); // Navigate to homepage when button is clicked
  
    }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center text-2xl font-bold gap-4'>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button
            className='text-white bg-gradient-to-r from-pink-400 via-pink-500
             to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
             focus:ring-pink-300 dark:focus:ring-pink-800 
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            onClick={handleClick}
        >
            Go back to Homepage</button>
  
    </div>
  )
}

export default Notfound