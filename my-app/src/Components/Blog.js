import React from 'react'
import reactLogo from '../photos/reactLogo.png'
import JSLogo from '../photos/JSLogo.png'
import code from '../photos/code.jpeg'
import ReactRails from '../photos/ReactRails.png'
import GithubLogo from '../photos/GitHub_Logo.png'
import FlatironLogo from '../photos/FlatironLogo.png'
import sinatraLogo from '../photos/sinatraLogo.svg'
import RubyLogo from '../photos/RubyLogo.png'
import GreatLeap from '../photos/GreatLeap.jpeg'
import howmany from '../photos/howmany.png'
export default function Blog(){

    return(
    <div className="flex w-full bg-white h-3/4 rounded-sm">
        <div className='grid grid-cols-2 overflow-auto'>
            <div className='col-span-2 m-8 border-b-4'>
                <p className='font-bold text-3xl text-left'>Blog</p>
                <p className='font-thin text-lg text-right'>https://dev.to/turpp</p>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/functional-vs-class-components-react-7nc' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Functional vs Class Components React</p>
                <img className='mb-2' src={reactLogo} alt='logo for React.js' />
                <p className='font-light text-sm'>Which is better? What are the main differences? What are the limits if any? These are all questions I answer while comparing functional and class Components in React.js</p>
                </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/scope-chain-in-javascript-3p1o' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'> Scope Chain in Javascript</p>
                <img className='mb-2' src={JSLogo} alt='Logo for Javascript'/>
                <p className='font-light text-sm'>I break down what Scope is and the different types. I discuss what scope chain is and walk through examples.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/coercion-in-javascript-3fch' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Coercion in Javascript</p>
                <img className='mb-2' src={JSLogo} alt='Logo for Javascript'/>
                <p className='font-light text-sm'>Javascript utilizes implicit type coercion. What does this mean? I explain what coercion is, how it behaves with diffeent operators, the differences between == and ===, thruth/falsy values, and logical operators.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/a-story-about-algorithms-672' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>A Story About Algorithms</p>
                <img className='mb-2' src={code} alt='Photo of Code on a Computer screen'/>
                <p className='font-light text-sm'>Wait algorithms live outside of code? This is a story of a moment of clarity I had when building a wooden fence.</p>
                    </a>
            </div>
            
            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/the-data-types-of-javascript-4p1f' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>The Data Types of Javascript</p>
                <img className='mb-2' src={JSLogo} alt='Logo of Javascript'/>
                <p className='font-light text-sm'>Can you name all 8 different data types of Javascript? What about the difference between primitive and non-primitive? I break down all of this in this concise article.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/get-your-forms-under-control-3g26' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Get Your Forms Under Control</p>
                <img className='mb-2' src={reactLogo} alt="React.js Logo"/>
                <p className='font-light text-sm'>What is the difference between a controlled and uncontrolled form in React? I explain the difference and walk through an example of converting a uncontrolled form.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/host-a-react-and-rails-api-application-4ei8' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Host a React and Rails API Application</p>
                <img className='mb-2' src={ReactRails} alt="React and Ruby on Rails log next to each other"/>
                <p className='font-light text-sm'>One of the best things about being a software engineer is bringing ideas to life. The more advance you get, the harder it is to keep your projects to yourself. In this article I want to layout a simple guide to getting your project out to the masses.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/into-to-github-406c' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Intro to Github</p>
                <img className='mb-2' src={GithubLogo} alt="Logo for Github"/>
                <p className='font-light text-sm'>Basic intro to setting up, and mainting Repositorys for your projects. I also discuss branches and give a list of commands you need to know.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/so-you-re-thinking-about-a-bootcamp-4ma3' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>So Your Thinking About a Bootcamp</p>
                <img className='mb-2' src={FlatironLogo} alt="Flatiron Schools Logo"/>
                <p className='font-light text-sm'>I share my experence with Flatiron software engineering program. </p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/way-to-quick-react-summary-4a71' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Way To Quick React Summary</p>
                <img className='mb-2' src={reactLogo} alt="React.js Logo"/>
                <p className='font-light text-sm'>My goal for this article is to help any beginner or someone who is interested in learning React, get a solid understanding of the main points of react and what it means for their development.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/find-out-exactly-where-someone-clicked-on-an-image-2b1h' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Find Out Exactly Where Somone Clicked on an Image</p>
                <img className='mb-2' src={JSLogo} alt="Javascript Logo"/>
                <p className='font-light text-sm'>Find the exact pixel someone clicked on an image. I used this to help build myRound, a golf round stat tracker. This helps the user correlate where they hit the fairway and green during a round of golf.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/dynamically-create-objects-with-plain-ruby-on-rails-no-javascript-4f6o' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Dynamically Create Objects With Plain Ruby on Rails. (No Javascript)</p>
                <img className='mb-2' src={howmany} alt="A form that ask how many would you like to add"/>
                <p className='font-light text-sm'>I just finished building out Tournament Wizard. This application is designed to help with running golf tournaments. Last year I took over the tournament chairman position at my golf course. My responsibilities are planning and running golf tournaments for the the club. I found out the hard way, running a golf tournament is stressful. The way the club had done it for years was just with old fashion pen and paper. Being a developer this drove me crazy. That lead me to the creation of Tournament Wizard!</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/interesting-tidbits-from-my-latest-application-4e9f' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>Interesting Tidbits From my Latest Application</p>
                <img className='mb-2' src={sinatraLogo} alt="Sinatra Logo"/>
                <p className='font-light text-sm'>I just recently created EcookBook! This web application was built by utilizing the Sinatra framework. The purpose of the app is to store recipes and to also find new ones. During my journey there were some interesting discoveries I made that I think others would find useful. Let’s explore those topics.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/the-journey-to-my-first-cli-application-1ln8' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>The Journey to My First CLI Application</p>
                <img className='mb-2' src={RubyLogo} alt="Ruby Logo"/>
                <p className='font-light text-sm'>Hi! My name is Tripp and I am a member of Flatiron School. I want to share with you my journey in creating Movie Madness. Movie Madness is a CLI application that I made with Ruby. Movie Madness is designed to gather information about movies and then organize them in a way that is fast and easy for the user to get and understand.</p>
                    </a>
            </div>

            <div className='m-4 border-2 shadow'>
                <a href='https://dev.to/turpp/the-great-leap-35kk' target='_blank'>
                <p className='font-semibold text-lg bg-green-100'>The Great Leap</p>
                <img className='mb-2' src={GreatLeap} alt="Man Jumping on the beach with big rocks in the background"/>
                <p className='font-light text-sm'>One word can change everything. For me, one word changed the trajectory of my life. It nudged me into a world of unknown and excitement. This one word is perspective.</p>
                    </a>
            </div>

            {/* <div className='m-4 border-2 shadow'>
            <a href='' target='_blank'>
                <p className='font-light text-sm'></p>
                <img className='mb-2' src={} alt=""/>
                <p className='font-light text-sm'></p>
            </div> */}
        </div>
    </div>
    )
}