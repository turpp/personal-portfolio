import React from 'react'
import WM from '../photos/WM.png'
import dateSideKick from '../photos/dateSideKick.png'
import myRound from '../photos/myRound.png'
import TournamentWizard from '../photos/TournamentWizard.png'
import ecookbook from '../photos/ecookbook.png'
import movieMadness from '../photos/movieMadness.png'
export default function Projects(props){

    return(
        <div className="w-full bg-white rounded-sm p-4">
            <div className=''>
            <div className=''>
                <div className='border-b-2'>
                    <p className='font-newFont text-2xl font-bold p-2 text-left'>Projects</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('wm')}>
                    <img className='m-auto w-full' src={WM} alt='screen shot of Wealth Management of the Ozarks on Desktop computer'/>
                    <p className=''>Wealth Management of the Ozarks</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('datesidekick')}>
                    <img className='m-auto w-full' src={dateSideKick} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                    <p className=''>Date Sidekick</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('myround')}>
                    <img className='m-auto w-full' src={myRound} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                    <p className=''>myRound</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('tournamentwizard')}>
                    <img className='m-auto w-full' src={TournamentWizard} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                    <p className=''>Tournament Wizard</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('ecookbook')}>
                    <img className='m-auto w-full' src={ecookbook} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                    <p className=''>Ecookbook</p>
                </div>
                <div className='pt-8' onClick={()=>props.setModal('moviemadness')}>
                    <img className='m-auto w-full' src={movieMadness} alt='Screen shot of Date Sidekick on Desktop and phone'/>
                    <p className=''>Movie Madness</p>
                </div>


                
            </div>
            </div>
        </div>
    )
}