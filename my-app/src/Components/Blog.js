import React from 'react'
import reactLogo from '../photos/reactLogo.png'
import JSLogo from '../photos/JSLogo.png'
import code from '../photos/code.jpeg'
import ReactRails from '../photos/ReactRails.png'
import GithubLogo from '../photos/Github_Logo.png'
import FlatironLogo from '../photos/FlatironLogo.png'
import sinatraLogo from '../photos/sinatraLogo.svg'
import RubyLogo from '../photos/RubyLogo.png'
import GreatLeap from '../photos/GreatLeap.jpeg'
export default function Blog(){

    return(
        <div className='grid grid-cols-2'>
            <div className='col-span-2'>
                <p className='font-bold text-3xl'>Blog</p>
                <p className='font-thin text-lg'>https://dev.to/turpp</p>
            </div>

            <div className=''>
                <p className=''>Functional vs Class Components React</p>
                <img src={reactLogo} alt='logo for React.js'/>
                <p>Which is better? What are the main differences? What are the limits if any? These are all questions I answer while comparing functional and class Components in React.js</p>
            </div>

            <div className=''>
                <p className=''> Scope Chain in Javascript</p>
                <img src={JSLogo} alt='Logo for Javascript'/>
                <p className=''>I break down what Scope is and the different types. I discuss what scope chain is and walk through examples.</p>
            </div>

            <div className=''>
                <p className=''>Coercion in Javascript</p>
                <img src={JSLogo} alt='Logo for Javascript'/>
                <p>Javascript utilizes implicit type coercion. What does this mean? I explain what coercion is, how it behaves with diffeent operators, the differences between == and ===, thruth/falsy values, and logical operators.</p>
            </div>

            <div className=''>
                <p className=''>A Story About Algorithms</p>
                <img src={code} alt='Photo of Code on a Computer screen'/>
                <p className=''>Wait algorithms live outside of code? This is a story of a moment of clarity I had when building a wooden fence.</p>
            </div>
            
            <div className=''>
                <p className=''>The Data Types of Javascript</p>
                <img src={JSLogo} alt='Logo of Javascript'/>
                <p className=''>Can you name all 8 different data types of Javascript? What about the difference between primitive and non-primitive? I break down all of this in this concise article.</p>
            </div>

            <div className=''>
                <p className=''>Get Your Forms Under Control</p>
                <img src={reactLogo} alt="React.js Logo"/>
                <p className=''>What is the difference between a controlled and uncontrolled form in React? I explain the difference and walk through an example of converting a uncontrolled form.</p>
            </div>

            <div className=''>
                <p className=''>Host a React and Rails API Application</p>
                <img src={ReactRails} alt="React and Ruby on Rails log next to each other"/>
                <p className=''>One of the best things about being a software engineer is bringing ideas to life. The more advance you get, the harder it is to keep your projects to yourself. In this article I want to layout a simple guide to getting your project out to the masses.</p>
            </div>

            <div className=''>
                <p className=''>Intro to Github</p>
                <img src={GithubLogo} alt="Logo for Github"/>
                <p className=''>Basic intro to setting up, and mainting Repositorys for your projects. I also discuss branches and give a list of commands you need to know.</p>
            </div>

            <div className=''>
                <p className=''>So Your Thinking About a Bootcamp</p>
                <img src={FlatironLogo} alt="Flatiron Schools Logo"/>
                <p className=''>I share my experence with Flatiron software engineering program. </p>
            </div>

            <div className=''>
                <p className=''>Way To Quick React Summary</p>
                <img src={reactLogo} alt="React.js Logo"/>
                <p className=''>My goal for this article is to help any beginner or someone who is interested in learning React, get a solid understanding of the main points of react and what it means for their development.</p>
            </div>

            <div className=''>
                <p className=''>Find Out Exactly Where Somone Clicked on an Image</p>
                <img src={JSLogo} alt="Javascript Logo"/>
                <p className=''>Find the exact pixel someone clicked on an image. I used this to help build myRound, a golf round stat tracker. This helps the user correlate where they hit the fairway and green during a round of golf.</p>
            </div>

            <div className=''>
                <p className=''>Dynamically Create Objects With Plain Ruby on Rails. (No Javascript)</p>
                <img src={howmany} alt="A form that ask how many would you like to add"/>
                <p className=''>I just finished building out Tournament Wizard. This application is designed to help with running golf tournaments. Last year I took over the tournament chairman position at my golf course. My responsibilities are planning and running golf tournaments for the the club. I found out the hard way, running a golf tournament is stressful. The way the club had done it for years was just with old fashion pen and paper. Being a developer this drove me crazy. That lead me to the creation of Tournament Wizard!</p>
            </div>

            <div className=''>
                <p className=''>Interesting Tidbits From my Latest Application</p>
                <img src={sinatraLogo} alt="Sinatra Logo"/>
                <p className=''>I just recently created EcookBook! This web application was built by utilizing the Sinatra framework. The purpose of the app is to store recipes and to also find new ones. During my journey there were some interesting discoveries I made that I think others would find useful. Let’s explore those topics.</p>
            </div>

            <div className=''>
                <p className=''>The Journey to My First CLI Application</p>
                <img src={RubyLogo} alt="Ruby Logo"/>
                <p className=''>Hi! My name is Tripp and I am a member of Flatiron School. I want to share with you my journey in creating Movie Madness. Movie Madness is a CLI application that I made with Ruby. Movie Madness is designed to gather information about movies and then organize them in a way that is fast and easy for the user to get and understand.</p>
            </div>

            <div className=''>
                <p className=''>The Great Leap</p>
                <img src={GreatLeap} alt="Man Jumping on the beach with big rocks in the background"/>
                <p className=''>One word can change everything. For me, one word changed the trajectory of my life. It nudged me into a world of unknown and excitement. This one word is perspective.</p>
            </div>

            <div className=''>
                <p className=''></p>
                <img src={} alt=""/>
                <p className=''></p>
            </div>
        </div>
    )
}