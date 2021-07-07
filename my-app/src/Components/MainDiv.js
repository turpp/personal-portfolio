import React from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'

function MainDiv(){
    return (
        <div className='flex flex-row m-auto w-2/3 content-center items-center h-3/4'>
            <ProfileCard/>
            <AboutMe/>
        </div>
    )
}

export default MainDiv