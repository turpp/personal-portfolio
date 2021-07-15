import React from 'react'
import ProfilePic from '../photos/profilePic.jpeg'
import Github from '../photos/GitHub-Mark-32px.png'
import LinkedIn from '../photos/LI-In-Bug.png'
import Dev from '../photos/dev-black.png'

function ProfileCard(){
    return (
        <div className= "bg-blue-50 my-auto w-3/5 h-5/6 filter drop-shadow-xl rounded-md">
            <img src={ProfilePic} className='object-cover h-2/3 max-h-96 mx-auto rounded-md'/>
            <p className="text-5xl">Tripp White</p>
            <p className="text-2xl">Software Engineer</p>
            <br></br>
            <div className='flex flex-row justify-between w-1/4 mx-auto'>
            <a href='https://github.com/turpp'><img src={Github} className='w-4'/> </a>
            <a href='https://www.linkedin.com/in/thomas-tripp-white'><img src={LinkedIn} className="w-4"/> </a>
            <a href='https://dev.to/turpp'><img src={Dev} className="w-4"/> </a>
</div>
<br></br>
            <hr></hr>
        <div className='grid grid-cols-2 flex justify-between'>
            <div className='border-r-2'>
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