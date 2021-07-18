import React, {useState} from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import Resume from './Resume'
import Blog from './Blog'

function MainDiv(){

    const [showPage, setShowPage] = useState('about')

    function displayPage(){
    switch (showPage) {
        case "about":
            return <AboutMe/>
        case "resume":
            return <Resume/>
        case 'blog':
            return <Blog/>
        default:
            break;
    }
}

    return (
        <div className='flex flex-row m-auto w-3/4 content-center items-center h-5/6 max-h-mainDiv font-newFont'>
            <NavBar setPage={setShowPage}/>
            <ProfileCard/>
            {displayPage()}            
        </div>
    )
}

export default MainDiv