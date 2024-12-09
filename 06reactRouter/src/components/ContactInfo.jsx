import React from 'react'

const ContactInfo = () => {
  return (
    <div className='flex flex-row w-screen h-fit bg-lime-400 border-3
                     border-gray-300 p-3 shadow-lg text-black'>
        <h2>Contact Information</h2>
        <p>Email: john.doe@example.com</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
    </div>
  )
}

export default ContactInfo