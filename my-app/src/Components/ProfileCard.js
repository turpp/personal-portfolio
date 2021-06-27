import React from 'react'
import ProfilePic from '../photos/profilePic.jpeg'

function ProfileCard(){
    return (
        <div className= "bg-blue-50 my-auto ml-4 w-2/4 h-full">
            <img src={ProfilePic} className='transform scale-75 -translate-y-16'/>
        </div>
    )
}

export default ProfileCard