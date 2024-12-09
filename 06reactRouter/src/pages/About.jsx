import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-pink-100 flex-col justify-center items-center text-xl'>
        <h1>About</h1>
        <p>This is a simple React app with routing and state management.</p>
        <p>To see the different pages, click on the navigation links above.</p>
        <p>For more information about the code, check out the corresponding video lectures on my YouTube channel.</p>
      <a href="https://www.youtube.com/playlist?list=PLp7r4y2g-z5qZ2r4-zJ6L39k5o5J771v5"><u>React tutorials playlist</u></a>
    </div>
  )
}

export default About