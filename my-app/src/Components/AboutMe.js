import React from 'react'


function AboutMe(){
    return(
        <div className="flex w-full">
            <div className='flex-1 overflow-auto'>
                <p className='text-2xl font-bold p-4 text-left'>About Me</p>
                <hr></hr>
                <p className="my-8 text-left pl-2">Hello! I am Tripp White! I am a Full Stack Developer from Arkansas. I am a recovering Financial Advisor and passionate developer. Explore my site to learn more about my unquie story and skill set!</p>
                <div className="grid grid-cols-2">
                    <div className='pl-2 pb-2 text-left'>
                        <p>Age... 26</p>
                    </div>
                    <div className='pl-2 pb-2 text-left'>
                        <p>Residence... Arkansas</p>
                    </div>
                    <div className='pl-2 pb-2 text-left'>
                        <p>Freelance.... Availble</p>
                    </div>

                    <div className='pl-2 pb-2 text-left'>
                        <p>Open For Oppourtunites... Yes</p>
                    </div>
                </div>
                
                <p className='text-2xl font-bold p-4 text-left'>My Tech Stack</p>
                <hr></hr>
                <div className="grid grid-cols-2 pl-2 pt-4 text-left">
                    <div>
                        <p className='text-lg font-semibold '>Javascript</p>
                        <p>Brings Webpages to life.</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>React.js</p>
                        <p>Javascript Framework for creating amazing Frontend applications</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold '>Ruby</p>
                        <p>My first launage I ever learned. Very simple syntax that is also very powerful</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold ' >Ruby on Rails</p>
                        <p>Take the simplistic Ruby syntax and create powerful web applications. I have used this framework to create both full stack applicatons and also API's. This is my main backend lauange I use</p>
                    </div>
                </div>

                <p className='text-2xl font-bold p-4 text-left'>Fun Facts</p>
               
                <div className='grid grid-cols-4 '>
                    <div className='border-t-4 border-r-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        Been with wife for 34% of our young lives
                    </div>
                    <div className='border-t-4 border-r-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                                                Dog Dad of the Year
                    </div>
                    <div className='border-t-4 border-r-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                        </svg>
                        Golf Nut
                    </div>
                    <div className='border-t-4 border-r-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Over 10 Countries Visited
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

