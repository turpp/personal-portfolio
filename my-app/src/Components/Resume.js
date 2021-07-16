import React from 'react'
import ATUlogo from '../photos/ATU-logo.jpeg'
import FlatironLogo from '../photos/FlatironLogo.png'

function Resume(){
    return(
        <div className="flex w-full bg-white h-3/4 rounded-sm">
            <div className='border-b-2'>
                <p>Resume</p>
            </div>
            <div className="grid grid-cols-1 border-b-2">
                <p>An innovative thinker who takes pride in high quality work. My experience of being a business owner ,as a Financial Advisor, gives me the unique skills of leading a team, client relations, problem solving, listening, and a relentless solution focus mindset. I know how to break down problems, find solutions and present these solutions in a simplistic actionable manner. I have a passion for learning and helping others succeed.</p>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={ATUlogo} alt='Arkansas Tech University Logo'/>
                </div>
                <div>
                    <p>Arkansas Tech University</p>
                    <p>Bachelors of Science in Business Administration in Economics and Finance</p>
                    <p>
                        <ol>
                            <li>Graduated Summa Cum Laude</li>
                            <li>Inducted into Beta Gamma Sigma</li>
                            <li>Member of Sigma Pi Fraternity International</li>
                            <li>Dean’s list every semester of college</li>
                        </ol>
                    </p> 
                </div>

                <div>
                    <img src={FlatironLogo} alt='Arkansas Tech University Logo'/>
                </div>
                <div>
                    <p>Flatiron Schools</p>
                    <p>Software Engineering Program</p>
                    <p>
                        <ol>
                            <li>Full Stack Web Development</li>
                            <li>Javascript and React.js</li>
                            <li>Ruby and Ruby on Rails</li>
                        </ol>
                    </p> 
                </div>

                <div className="">
                    <div className="">
                        <p>Technical Skills</p>
                        <ul>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>HTML/CSS</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="">
                            <p>Non-Technical Skills</p>
                            <ul>
                                <li>Greate Communicator</li>
                                <li>Teamwork</li>
                                <li>Problem-solving</li>
                                <li>Researching</li>
                                <li>Attention to detail</li>
                                <li>Curious</li>
                                <li>Life Long Learner</li>
                                <li>Friendly</li>
                                <li>Passionate</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p>Work History</p>
                    <div>
                        <p>Edward Jones</p>
                        <p>Financial Advisor, CRPC®</p>
                        <ul>
                            <li>Lead branch team in daily operations.</li>
                            <li>Managed client relations with a book of business of over 300 families.</li>
                            <li>Administered solutions to complex problems in a simple actionable way.</li>
                            <li>Educated clients, prospects, and students on financial planning and economics.</li>
                            <li>Grew business to over $20 million under management with being the sole revenue source.</li>
                            <li>Earned Edward Jones Golden Shovel award for the rate of business growth in first year of business.</li>
                        </ul>
                    </div>
                </div>
                

            </div>
            
        </div>
    )
}