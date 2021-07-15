import React from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'

function MainDiv(){
    return (
        <div className='flex flex-row m-auto w-2/3 content-center items-center h-3/4 max-h-mainDiv'>
            <NavBar/>
            <ProfileCard/>
            <AboutMe/>
        </div>
    )
}

export default MainDiv