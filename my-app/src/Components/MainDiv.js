import React, {useState} from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import Resume from './Resume'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'

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
        case 'contact':
            return <Contact/>
        case 'project':
            return <Projects/>
        default:
            break;
    }
}

    return (
        
         <div className='grid grid-cols-2 font-newFont'>
            <div className='col-span-2 sticky top-0'>
            <NavBar setPage={setShowPage}/>
            </div>
            <div className='w-full col-span-2 mb-32'>
            <ProfileCard setPage={setShowPage}/>
            {displayPage()}            
        </div>
        </div>
    )
}

export default MainDiv