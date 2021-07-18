import React from 'react'
import ATUlogo from '../photos/ATU-logo.jpeg'
import FlatironLogo from '../photos/FlatironLogo.png'

export default function Resume(){
    return(
        <div className="flex w-full bg-white h-3/4 rounded-sm">
            <div className='flex-1 overflow-auto'>
                <div className='border-b-2'>
                    <p className='text-left font-bold text-2xl p-2'>Resume</p>
                </div>
                <div className="grid grid-cols-1 border-b-2">
                    <p className='p-4'>An innovative thinker who takes pride in high quality work. My experience of being a business owner ,as a Financial Advisor, gives me the unique skills of leading a team, client relations, problem solving, listening, and a relentless solution focus mindset. I know how to break down problems, find solutions and present these solutions in a simplistic actionable manner. I have a passion for learning and helping others succeed.</p>
                </div>
                <div className='grid grid-cols-3 border-b-2'>
                    <div className='col-span-1'>
                        <img src={ATUlogo} alt='Arkansas Tech University Logo' className='w-3/4 m-auto pt-2'/>
                    </div>
                    <div className='col-span-2 p-4'>
                        <p className="font-bold text-xl"><u>Arkansas Tech University</u></p>
                        <p className='font-semibold text-lg'>Bachelors of Science in Business Administration in Economics and Finance</p>
                        <p>
                            <ul className='text-left'>
                                <li>- Graduated Summa Cum Laude</li>
                                <li>- Inducted into Beta Gamma Sigma</li>
                                <li>- Member of Sigma Pi Fraternity International</li>
                                <li>- Dean’s list every semester of college</li>
                            </ul>
                        </p> 
                    </div>

                    <div className='col-span-1'>
                        <img src={FlatironLogo} alt='Arkansas Tech University Logo'/>
                    </div>
                    <div className='col-span-2 p-4'>
                        <p className='font-bold text-xl'><u>Flatiron Schools</u></p>
                        <p className='font-semibold text-lg'>Software Engineering Program</p>
                        <p>
                            <ul className='text-left'>
                                <li>- Full Stack Web Development</li>
                                <li>- Javascript and React.js</li>
                                <li>- Ruby and Ruby on Rails</li>
                            </ul>
                        </p> 
                    </div>
                </div>
                <div className='grid grid-cols-2 border-b-2 p-4'>
                    
                        <div className="">
                            <p className='text-lg font-semibold'>Technical Skills</p>
                            <ul className='text-left pl-8'>
                                <li>- Javascript</li>
                                <li>- React.js</li>
                                <li>- Redux</li>
                                <li>- Ruby</li>
                                <li>- Ruby on Rails</li>
                                <li>- Bootstrap</li>
                                <li>- Tailwind CSS</li>
                                <li>- HTML/CSS</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="">
                                <p className='text-lg font-semibold'>Non-Technical Skills</p>
                                <ul className='text-left pl-8'>
                                    <li>- Greate Communicator</li>
                                    <li>- Teamwork</li>
                                    <li>- Problem-solving</li>
                                    <li>- Researching</li>
                                    <li>- Attention to detail</li>
                                    <li>- Curious</li>
                                    <li>- Life Long Learner</li>
                                    <li>- Friendly</li>
                                    <li>- Passionate</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    
                    <div className="p-4">
                        <p className='font-bold text-2xl'>Work History</p>
                        <div>
                            <p className='font-semibold text-xl text-left'>Edward Jones</p>
                            <p className='font-medium text-lg text-right'>Financial Advisor, CRPC®</p>
                            <ul className='text-left'>
                                <li>- Lead branch team in daily operations.</li>
                                <li>- Managed client relations with a book of business of over 300 families.</li>
                                <li>- Administered solutions to complex problems in a simple actionable way.</li>
                                <li>- Educated clients, prospects, and students on financial planning and economics.</li>
                                <li>- Grew business to over $20 million under management with being the sole revenue source.</li>
                                <li>- Earned Edward Jones Golden Shovel award for the rate of business growth in first year of business.</li>
                            </ul>
                        </div>
                    </div>
                    

                
            </div>
        </div>
    )
}