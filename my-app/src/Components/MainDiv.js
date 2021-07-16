import React from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'

function MainDiv(){
    return (
        <div className='flex flex-row m-auto w-3/4 content-center items-center h-5/6 max-h-mainDiv font-newFont'>
            <NavBar/>
            <ProfileCard/>
            <AboutMe/>
        </div>
    )
}

export default MainDiv