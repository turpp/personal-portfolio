import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_g3plhln', 'template_5fz0qsv', e.target, 'user_41oPFOX8J0CIxOSN5u16e')
          .then((result) => {
              console.log(result.text, 'sent email');
          }, (error) => {
              console.log(error.text, 'error on sent email');
          });
      }


    return(
        <div className='content-layout'>
            <div className='m-4 h-3/4'>
                    <p className='font-bold text-center text-4xl'>Let's get in touch!</p>
                    <div className='grid justify-items-center h-full'>
                    <p className='font-thin text-center text-xs  mb-4'>Please complete the contact form and I'll be in touch.</p>
                    <form className="contact-form m-auto w-5/6 " onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-4'>
                        <input type="hidden" name="contact_number" />
                        <div className='col-span-2'>
                        <input className='w-full shadow-lg border pl-2' type="text" name="user_name" placeholder='Name' required/></div>
                        <div className='col-span-1'>
                            <input className='w-full shadow-lg border pl-2' type="email" name="user_email" placeholder='Email' required/>
                        </div>
                        <div className='col-span-1'>
                            <input className='w-full shadow-lg border pl-2' type="phone" name="user_phone" placeholder='Phone'/>
                        </div>
                        <div className='col-span-2'>
                        <textarea className='w-full shadow-lg border pl-2' name="message" placeholder='Write Your Message'/>
                        </div>
                        <div className='col-span-2'>
                        <button className='bg-blue-500 py-2 px-8 rounded-md text-white shadow' type="submit" value="Send" onClick={()=>sendEmail}>Send</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}