import React from 'react'
import DateSidekickScreenShot from '../../photos/DateSidekickScreenShot.png'

export default function WM(props){

    return (
        <div className='modal-layout'>
            <img src={DateSidekickScreenShot} alt='Date Sidekick Screen Shot'/>
            <p className='text-2xl font-bold text-center mt-8'>Date Sidekick</p>
            <p className='p-4'>Date Sidekick is your assistant to help find and decide on places to go. I use React on the front-end and Rails API on the back end. I also use Yelp-Fusion API to get dynamic data for the application. This is also setup for mobile devices.</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>React.js, React Router, Bootstrap, Heroku, Ruby on Rails, Yelp Fusion API</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://date-sidekick.herokuapp.com/'><button className='bg-blue-400 h-full rounded text-white px-8'>Visit</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}