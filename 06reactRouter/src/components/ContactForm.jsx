import React from 'react'

const ContactForm = () => {
  return (
    
    <div className='w-2/4 h-fit'>
        <form className='flex gap-4 flex-col border-2 border-gray-400 outline-none shadow-2xl p-9'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>  
            <button type="submit" className='border-3 bg-blue-500 self-center px-5 py-3'>Submit</button>  {/* This button will trigger the form submission */} 

        </form>
    </div>
  )
}

export default ContactForm