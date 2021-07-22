import React from 'react'
import ecookBookScreenShot from '../../photos/ecookBookScreenShot.png'

export default function EcookBook(props){

    return (
        <div className='m-4 bg-white shadow-2xl rounded-sm'>
            <img src={ecookBookScreenShot} alt='Ecook Book Screen Shot'/>
            <p className='text-2xl font-bold text-center mt-8'>Ecook Book</p>
            <p className='p-4'>EcookBook is a web application built with the Sinatra framework and bootstrap for styling.</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>Bootstrap, Sinatra, Ruby</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://github.com/turpp/sinatra-project-ecookbook'><button className='bg-blue-400 h-full rounded text-white px-8'>Visit</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}