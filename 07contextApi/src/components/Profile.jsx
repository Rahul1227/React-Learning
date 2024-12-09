import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user } = useContext(UserContext);

    if(!user) return <div>Please <a href='./Login'>log in</a></div>
    else return(
        <div className='w-screen h-screen bg-green-500 text-black font-bold text-xl'>
            <h1>Profile Page</h1>
            <p>Welcome, {user.username}</p>
            <button onClick={() => localStorage.removeItem('user')}>Logout</button>
        </div>
    )

  
}

export default Profile