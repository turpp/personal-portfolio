import React, {useState} from 'react'
import ProfileCard from './ProfileCard'
import AboutMe from './AboutMe'
import NavBar from './NavBar'
import Resume from './Resume'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'
import WM from './modals/WM'
import DateSidekick from './modals/DateSidkick'
import MyRound from './modals/MyRound'
import TournamentWizard from './modals/TournamentWizard'
import EcookBook from './modals/EcookBook'
import MovieMadness from './modals/MovieMadness'

function MainDiv(){

    const [showPage, setShowPage] = useState('about')
    const [showModal, setModal] = useState(false)

 

    function displayContent(){
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
            return <Projects setModal={setModal}/>
        default:
            break;
    }

}

function displayPage(){
    if(showModal){
        switch(showModal){
            case 'wm':
                return <WM setModal={setModal}/>
            case 'datesidekick':
                return <DateSidekick setModal={setModal}/>
            case 'myround':
                return <MyRound setModal={setModal}/>
            case 'tournamentwizard':
                return <TournamentWizard setModal ={setModal}/>
            case 'ecookbook':
                return <EcookBook setModal={setModal}/>
            case 'moviemadness':
                return <MovieMadness setModal={setModal}/>
    
            default:
                break;
        }
    } else{
        return(
        <div className='grid grid-cols-2 font-newFont sm:grid-cols-12  sm:h-screen  sm:pt-8 md:max-w-3xl lg:pt-0 lg:max-w-full desktop:max-w-screen-xl  m-auto lg:max-h-mainDiv relative'>
            <div className='col-span-2 sticky top-0 sm:col-start-2 lg:col-start-0 lg:col-span-1  my-auto lg:place-self-end sm:place-self-end sm:mt-4 sm:-mr-4 desktop:mt-40 lg:mt-28 z-50 ' >
                <NavBar setPage={setShowPage}/>
            </div>
            <div className='w-full col-span-2  sm:col-span-8 sm:overflow-auto lg:h-full lg:col-span-11  lg: col-start-1 lg:pr-8 lg:m-auto '>
                <div className='lg:grid lg:grid-cols-12 lg:h-full lg:place-items-center '>
                <ProfileCard setPage={setShowPage}/>
                {displayContent()}
                </div>
            </div>
        </div>
        )
    }
}


    return <div className='w-screen h-screen p-16 overflow-auto'>{displayPage()}</div>
}

export default MainDiv