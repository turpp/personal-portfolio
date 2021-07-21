import React from 'react'
import WMscreenShot from '../../photos/WMScreenShot.png'

export default function WM(props){

    return (
        <div className=''>
            <img src={WMscreenShot} alt='wealth management of the ozarks webpage'/>
            <p className='text-2xl font-bold text-center my-8'>Wealth Management of the Ozarks</p>
            <p className=''>Wealth Management of the Ozark out of Ozark, Ar appraoched me about developing a website for them. They had never had a website before and was not sure where to start. I helped them research other website from the industry and helped them come up with some guidelines of what they were looking for. I worked hand in hand with them and also LPL Financial Complaince department to make sure the website met all firm and industry requirments.</p>
            <p className=''>Technologies Used</p>
            <p className=''>React, Bootstrap, Firebase</p>
            <button className='bg-black text-white' onClick={()=>props.setWM(false)}>Close</button>
        </div>
    )
}