import React from 'react'
import WM from '../photos/WM.png'
import dateSideKick from '../photos/dateSideKick.png'

export default function Projects(){

    return(
        <div className="flex w-full bg-white h-3/4 rounded-sm">
            <div className='grid grid-cols-2'>
                <div className='col-span-2 border-b-4'>
                    <p className=''>Projects</p>
                </div>
                <div className='col-span-1'>
                    <img className='m-auto w-3/4' src={WM} alt='screen shot of Wealth Management of the Ozarks on Desktop computer'/>
                </div>
                <div className='col-span-1'>
                    <img className='m-auto w-3/4' src={dateSideKick} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                </div>
                
            </div>
        </div>
    )
}