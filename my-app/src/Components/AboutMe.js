import React from 'react'
import JSLogo from '../photos/JSLogo.png'
import reactLogo from '../photos/reactLogo.png'
import RubyLogo from '../photos/ruby.png'
import rubyonrails from '../photos/rubyonrails.png'




function AboutMe(){
    return(
        <div className=" w-full bg-white rounded-sm p-4 lg:col-span-7 lg:h-3/4 lg:overflow-auto mx-auto max-w-lg lg:max-w-full relative z-40 overscroll-contain">
            <div className=' '>
                <p className=' font-newFont text-2xl font-bold p-2 text-left '>About Me</p>
                <hr></hr>
                <p className=" font-newFont  my-1 text-left pl-2">Hello! I am Tripp White! I am a Full Stack Developer from Arkansas. I am a recovering Financial Advisor and passionate developer. Explore my site to learn more about my unquie story and skill set!</p>
                <div className="grid grid-cols-1 p-4">
                    <div className='pl-2 pb-2 text-left'>
                        <p className=''>Age... 26</p>
                    </div>
                    <div className='pl-2 pb-2 text-left'>
                        <p className=''>Residence... Arkansas</p>
                    </div>
                    <div className='pl-2 pb-2 text-left'>
                        <p className=''>Freelance.... Availble</p>
                    </div>

                    <div className='pl-2 pb-2 text-left'>
                        <p className=''>Open For Oppourtunites... Yes</p>
                    </div>
                </div>
                
                <p className=' font-newFont text-2xl font-bold p-2 text-left'>My Tech Stack</p>
                <hr></hr>
                <div className="grid grid-cols-1 pl-2 pt-1 text-left items-center">
                    <div className=''>
                        <img className='w-1/4' src={JSLogo} alt='Logo for JavaScript'/>
                    </div>
                    <div className="mb-4 ml-2">
                        <p className=' font-newFont text-lg font-semibold '>Javascript</p>
                        <p className='mt-2'>Brings Webpages to life.</p>
                    </div>
                    <div className="mb-4 ml-2">
                    <div className=''>
                        <img className='w-1/4' src={reactLogo} alt='Logo for React.js'/>
                    </div>

                        <p className=' font-newFont text-lg font-semibold '>React.js</p>
                        <p>Javascript Framework for creating amazing Frontend applications</p>
                    </div>
                    <div className="mb-4 ml-2">
                    <div className=''>
                        <img className='w-1/4' src={RubyLogo} alt='Logo for Ruby'/>
                    </div>

                        <p className=' font-newFont text-lg font-semibold '>Ruby</p>
                        <p className='mt-2'>My first launage I ever learned. Very simple syntax that is also very powerful</p>
                    </div>
                    <div className="mb-4 ml-2">
                    <div className=''>
                        <img className='w-1/4' src={rubyonrails} alt='Logo for Ruby on Rails'/>
                    </div>

                        <p className=' font-newFont text-lg font-semibold ' >Ruby on Rails</p>
                        <p className='mt-2'>Take the simplistic Ruby syntax and create powerful web applications. I have used this framework to create both full stack applicatons and also API's. This is my main backend lauange I use</p>
                    </div>
                </div>

                <p className=' font-newFont text-2xl font-bold p-2 text-left border-b-4'>Fun Facts</p>
               
                <div className='grid grid-cols-2 '>
                    <div className=' grid justify-items-center border-r-4' >
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="p-2">Been with wife for 34% of our young lives</p>
                    </div>
                    <div className=' grid justify-items-center'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        </div>
                            <p className='p-2'>Dog Dad of the Year</p>
                    </div>
                    <div className=' grid justify-items-center border-r-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        <p className='p-2'>Golf Nut</p>
                    </div>
                    <div className=' grid justify-items-center'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                        <p className='p-2'>Over 10 Countries Visited</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe

