import React, {useState} from 'react'
import ProfilePic from '../photos/profilePic.png'
import Github from '../photos/GitHub-Mark-120px-plus.png'
import LinkedIn from '../photos/linkedinMark.png'
import Dev from '../photos/dev-black.png'
import NavBar from '../Components/NavBar'

function ProfileCard(props){

    

    return (
        <div className= "bg-blue-50  w-full drop-shadow-xl rounded-md mb-4  mx-auto max-w-lg lg:col-span-5 lg:shadow-2xl lg:h-5/6 relative z-40 overflow-auto overscroll-contain">
            <img src={ProfilePic} className='object-fill mx-auto rounded-md pb-4 w-full' />
            <p className="text-3xl">Tripp White</p>
            <p className="text-xl">Software Engineer</p>
            <div className='flex flex-row justify-between w-1/4 mx-auto'>
                <div className="flex-1">
                    <a href='https://github.com/turpp'><img src={Github} className="p-2" /> </a>
                </div>
                <div className="flex-1">
                    <a href='https://www.linkedin.com/in/thomas-tripp-white'><img src={LinkedIn} className="p-2"/> </a>
                </div> 
                <div className="flex-1">
                    <a href='https://dev.to/turpp'><img src={Dev} className="p-2"/> </a>
                </div>
            </div>
            <div className='flex justify-around h-16 items-center w-full border-t-2 object-bottom' >
                <div className=''>
                    <button className=" p-2 rounded-lg bg-blue-800 text-white shadow ">Download Resume</button>
                </div>
                <div>
                    <button className=' p-2 rounded-lg bg-gray-500 text-white shadow '>Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard