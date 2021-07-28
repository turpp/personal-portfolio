import React, {useState} from 'react'
import ProfilePic from '../photos/profilePic.jpeg'
import Github from '../photos/GitHub-Mark-120px-plus.png'
import LinkedIn from '../photos/linkedinMark.png'
import Dev from '../photos/dev-black.png'
import NavBar from '../Components/NavBar'

function ProfileCard(props){

    

    return (
        <div className= "bg-blue-50  w-full drop-shadow-xl rounded-md mb-4  lg:col-span-5 lg:shadow-2xl lg:h-5/6">
            <img src={ProfilePic} className='object-cover h-2/3 max-h-96 mx-auto rounded-md pb-4'/>
            <p className="text-5xl">Tripp White</p>
            <p className="text-2xl">Software Engineer</p>
           
            <div className='flex flex-row justify-between w-1/2 mx-auto'>
                <div className="flex-1">
            <a href='https://github.com/turpp'><img src={Github} className="p-2"/> </a>
            </div>
            <div className="flex-1">
            <a href='https://www.linkedin.com/in/thomas-tripp-white'><img src={LinkedIn} className="p-2"/> </a>
            </div> 
            <div className="flex-1">
            <a href='https://dev.to/turpp'><img src={Dev} className="p-2"/> </a>
            </div>
</div>
<br></br>
            <hr></hr>
        <div className='flex justify-around h-16 items-center' >
            <div className=''>
            <button className=" ">Download Resume</button>
            </div>
            <div>
            <button className=' '>Contact Me</button>
            </div>
            </div>
        </div>
    )
}

export default ProfileCard