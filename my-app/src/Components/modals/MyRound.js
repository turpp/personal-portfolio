import React from 'react'
import myRoundScreenShot from '../../photos/myRoundScreenShot.png'

export default function MyRound(props){

    return (
        <div className='m-4 bg-white shadow-2xl rounded-sm'>
            <img src={myRoundScreenShot} alt='Date Sidekick Screen Shot'/>
            <p className='text-2xl font-bold text-center mt-8'>myRound</p>
            <p className='p-4'>myRound is desgin to help golfer improve there golf game. Most stat trackers are overly complicated and do a poor job of representing a golfer round. myRound will give the golfer all the vital stats they need. It will even show the corelation of where the golfers hit the fairway and there proximity to the hole. The data input is very simple and easy to maintain during a round of golf. Also you dont have to play a full round for this appliation to be useful. You can play as many or as little holes as you want and it will still work!</p>
            <p className='text-left pl-4'>Technologies Used:</p>
            <p className='text-left text-sm pl-4 pb-8 border-b-2'>JavaScript, Bootstrap, Heroku, GitHub Pages, Ruby on Rails</p>
            <div className='flex h-16 items-center justify-evenly' >
                <a className='h-1/2' href='https://turpp.github.io/myRound-frontend/'><button className='bg-blue-400 h-full rounded text-white px-8'>Visit</button></a>
                <button className='bg-black text-white h-1/2 px-8 rounded' onClick={()=>props.setModal(false)}>Close</button>
            </div>
            
        </div>
    )
}