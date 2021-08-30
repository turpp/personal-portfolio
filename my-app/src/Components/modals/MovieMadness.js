import React from 'react'
import movieMadnessScreenShot from '../../photos/movieMadnessScreenShot.png'

export default function MovieMadness(props){

    return (
        <div className='modal-layout'>
            <img src={movieMadnessScreenShot} alt='Movie Madness Screen Shot'/>
            <p className='text-2xl font-bold text-center mt-8'>Movie Madness</p>
            <p className='p-4'>Movie Madness is a ruby application that runs in your terminal. It pulls Information from TMDB website to give the user movie information efficiently and quickly.</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>Ruby, TMDB API</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://www.youtube.com/watch?v=8O-Fm59KvGI'><button className='bg-blue-400 h-full rounded text-white px-8'>See For Yourself</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}