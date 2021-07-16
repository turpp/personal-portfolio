import React, {useState} from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import Resume from './Resume'

function MainDiv(){

    const [showPage, setShowPage] = useState('about')

    function displayPage(){
    switch (showPage) {
        case "about":
            return <AboutMe/>
        case "resume":
            return <Resume/>
        default:
            break;
    }
}

    return (
        <div className='flex flex-row m-auto w-3/4 content-center items-center h-5/6 max-h-mainDiv font-newFont'>
            <NavBar/>
            <ProfileCard/>
            {displayPage()}            
        </div>
    )
}

export default MainDiv