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
        <div className='w-full bg-white h-3/4 rounded-sm'>
            <div className='m-4 h-3/4'>
                    <p className='font-bold text-center text-4xl'>Let's get in touch!</p>
                    <div className='grid justify-items-center h-full'>
                    <p className='font-thin text-center text-lg  mb-2'>Please complete the contact form and I'll be in touch.</p>
                    <form className="contact-form m-auto w-3/4 " onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-4'>
                        <input type="hidden" name="contact_number" />
                        <div className='col-span-2'>
                        <input className='border-2 w-full' type="text" name="user_name" placeholder='Name' required/></div>
                        <div className='col-span-1'>
                            <input className='border-2 w-full' type="email" name="user_email" placeholder='Email' required/>
                        </div>
                        <div className='col-span-1'>
                            <input className='border-2 w-full' type="phone" name="user_phone" placeholder='Phone'/>
                        </div>
                        <div className='col-span-2'>
                        <textarea className='border-2 w-full' name="message" placeholder='Write Your Message'/>
                        </div>
                        <div className='col-span-2'>
                        <input className='' type="submit" value="Send" onClick={()=>sendEmail} />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}