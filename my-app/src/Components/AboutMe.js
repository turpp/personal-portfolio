import { logDOM } from '@testing-library/dom'
import React from 'react'
import JSLogo from '../photos/JSLogo.png'
import reactLogo from '../photos/reactLogo.png'
import RubyLogo from '../photos/ruby.png'
import rubyonrails from '../photos/rubyonrails.png'
import bootstrap from '../photos/bootstrap-logo.svg'
import tailWind from '../photos/tailwindcss-mark.svg'





function AboutMe(){
    return(
        <div className="content-layout">
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
                
                <p className='  text-2xl font-bold p-2 text-left'>My Tech Stack</p>
                <hr></hr>
                <div className="grid md:grid-cols-6 pl-2 pt-1 text-left items-center">
                    <div className=' pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1'>
                        <img className='w-full' src={JSLogo} alt='Logo for JavaScript'/>
                    </div>
                    <div className=" col-span-5 pl-4 mb-6 self-start">
                        <p className='text-lg font-semibold border-b-2'>Javascript</p>
                        <p className='mt-2'>Javascript brings life to my applications. I love how flexable JavaScript is. I can create desktop, mobile, web, and backend applications with a single lanaugage. It has a great open libary of frameworks to learn help with any part of your development. I built myRound application with vanaila javascript and countless other applications using the React framework.</p>
                    </div>


                    <div className="pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1">
                        <img className='w-full' src={reactLogo} alt='Logo for React.js'/>
                    </div>
                    <div className='col-span-5 pl-4 mb-6 self-start'>
                        <p className=' font-newFont text-lg font-semibold border-b-2'>React.js</p>
                        <p>React is my go to Front end framework. I love how I can organize my code in reusable components. I also enjoy the nature of one way data flow between the components. It makes it much easier to manage larger sized applicatoins.</p>
                    </div>

                    <div className="pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1">
                        <img className='w-full' src={RubyLogo} alt='Logo for Ruby'/>
                    </div>
                    <div className='col-span-5 pl-4 mb-6 self-start '>
                        <p className=' font-newFont text-lg font-semibold border-b-2'>Ruby</p>
                        <p className='mt-2'>My first launage I ever learned. Very simple syntax that is also very powerful. My first application I ever built Movie Madness was built using Ruby. I love how easy it is to utilze its OOP features. I also love the simple syntax. Its true what they say, It makes engineers happy!</p>
                    </div>


                    <div className="pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1">
                        <img className='w-full' src={rubyonrails} alt='Logo for Ruby on Rails'/>
                    </div>
                    <div className='col-span-5 pl-4 mb-6 self-start'>
                        <p className=' font-newFont text-lg font-semibold border-b-2' >Ruby on Rails</p>
                        <p className='mt-2'>Take the simplistic Ruby syntax and create powerful web applications. I have used this framework to create both full stack applicatons and also API's. I created Tournament Wizard just using Rails. I have used it many time since as a backend. The simple syntax and the ability to use Active Record makes creating and using a backend simple. </p>
                    </div>

                    <div className="pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1">
                        <img className='w-full' src={tailWind} alt='Logo for Tailwind CSS'/>
                    </div>
                    <div className='col-span-5 pl-4 mb-6 self-start'>
                        <p className=' font-newFont text-lg font-semibold border-b-2'>Ruby</p>
                        <p className='mt-2'>You are curently looking at a Tailwind CSS application as you read this! Tailwind is a utiltiy based framework for react. I love how I am able to stay in the flow as I built my applicaitons. I love how I can make the most custom and unquie application. Its a clean canvas that I get to create. Its much faster developing in this than Straight CSS for me.</p>
                    </div>

                    <div className="pb-2 md:pb-0 pt-8 self-start ml-2 col-span-1">
                        <img className='w-full' src={bootstrap} alt='Logo for Bootstrap'/>
                    </div>
                    <div className='col-span-5 pl-4 mb-6 self-start'>
                        <p className=' font-newFont text-lg font-semibold border-b-2'>Ruby</p>
                        <p className='mt-2'>Bootstrap was the first CSS framework that I learned. I probaly learned it for the same reason everyone does, component based. I can put together a beautiful applications in no time. It gave me a great starting point to see what components look well together and how they all intertwine. I have built many applications just with the built in components and also by adding my own twist to some as well. </p>
                    </div>
                </div>

                <p className=' font-newFont text-2xl font-bold p-2 text-left border-b-4'>Fun Facts</p>
               
                <div className='grid grid-cols-2 '>
                    <div className=' grid justify-items-center border-r-4' >
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-700" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <p className="p-2">Been with wife for 34% of our young lives</p>
                    </div>
                    <div className=' grid justify-items-center'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        </div>
                            <p className='p-2'>Dog Dad of the Year</p>
                    </div>
                    <div className=' grid justify-items-center border-r-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                        </svg>
                        </div>
                        <p className='p-2'>Golf Nut! Player, Coach, and Tournament Chairman</p>
                    </div>
                    <div className=' grid justify-items-center'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

