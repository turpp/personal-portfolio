import React from 'react'
import tournamentWizardScreenShot from '../../photos/tournamentWizardScreenShot.png'

export default function TournamentWizard(props){

    return (
        <div className='m-4 bg-white shadow-2xl rounded-sm'>
            <img src={tournamentWizardScreenShot} alt='Tournament Wizard Screen Shot'/>
            <p className='text-2xl font-bold text-center mt-8'>Tournament Wizard</p>
            <p className='p-4'>Running Golf tournaments can be stressful. When I took over as tournament chairman at my golf club I knew the old school pen and paper way of running tournaments was not going to work. This is why I developed Tournament Wizard. This applications helps me mangae all parts of tournament hosting. It allows the club to store its members and quickly add them to any tournament. Tournament Wizard helps with the check in process and even has a fluid system to add late signups. The round entry is very simple and makes counting scores at the end of the tournament much easier.</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>Bootstrap, Heroku, Ruby on Rails</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://tournament-wizard.herokuapp.com/'><button className='bg-blue-400 h-full rounded text-white px-8'>Visit</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}