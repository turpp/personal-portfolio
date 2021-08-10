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
        <div className='grid grid-cols-2 font-newFont sm:grid-cols-12 sm:pt-8 sm:h-screen  md:max-w-3xl lg:max-w-screen-xl m-auto lg:max-h-mainDiv sm:my-auto'>
            <div className='col-span-2 sticky top-0 sm:col-start-2 lg:col-start-1 my-auto lg:w-1/2 lg:place-self-end sm:place-self-end sm:mt-4 sm:-mr-4 lg:mt-40 z-50' >
                <NavBar setPage={setShowPage}/>
            </div>
            <div className='w-full col-span-2 mb-16 sm:col-span-8 sm:overflow-auto lg:h-5/6 lg:col-span-10 lg:pr-8 lg:m-auto '>
                <div className='lg:grid lg:grid-cols-12 lg:h-full lg:place-items-center '>
                <ProfileCard setPage={setShowPage}/>
                {displayContent()}
                </div>
            </div>
        </div>
        )
    }
}


    return <div className=''>{displayPage()}</div>
}

export default MainDiv