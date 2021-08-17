import React from 'react'
import WMscreenShot from '../../photos/WMScreenShot.png'

export default function WM(props){

    return (
        <div className='bg-white shadow-2xl rounded-sm relative z-40 '>
            <img className='w-full m-auto' src={WMscreenShot} alt='wealth management of the ozarks webpage'/>
            <p className='text-2xl font-bold text-center mt-8'>Wealth Management of the Ozarks</p>
            <p className='p-4'>Wealth Management of the Ozark out of Ozark, Ar appraoched me about developing a website for them. They had never had a website before and was not sure where to start. I helped them research other website from the industry and helped them come up with some guidelines of what they were looking for. I worked hand in hand with them and also LPL Financial Complaince department to make sure the website met all firm and industry requirments.</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>React.js, React Router, Bootstrap, Firebase</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://www.theozarkswealth.com'><button className='bg-blue-400 h-full rounded text-white px-8'>Visit</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}