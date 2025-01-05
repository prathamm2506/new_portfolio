import React from 'react'
import './Experience.css'
import img1 from '../../assets/indrones.png'
import img2 from '../../assets/rhyno.png'
import img3 from '../../assets/thefastway.png'

const Experience = () => {
  return (
    <div>
        <div className='eduu'>
                <h1>Where Skills Met Impact</h1>
        
                <div className='flex items-center justify-between mt-12 respoedu'>
                    <div className='educard'>
                        <img src={img1} alt="img" className='w-1/4 lg:w-2/5'/>
                        <h2 className='mb-4'>R & D Intern</h2>
                        <p className='text-black'>Indrones Solution Private Limited</p>
                        <br />
                        <p className='mb-8'>Designed and implemented software solutions to enhance drone operations, reducing latency by
50% through streamlining processes.
- Implemented core scripts for faster drone operations saving 90% of actual time.</p>
                        <h4>May 2024 - July 2024</h4>
                    </div>
        
                    <div className='educard'>
                        <img src={img2} alt="img" className='w-1/4 lg:w-2/5'/>
                        <h2 className='mb-4'>Web Developer Intern</h2>
                        <p className='text-black'>Rhyno Wheels Private Limited</p>
                        <br />
                        <p className='mb-8'>Crafted the company’s official website from scratch, with the latest tech stack, reducing load times
by 15% and improving user engagement up to 3X.
- Performed daily tasks including deployment, site optimization, and SEO. </p>
                        <h4>March 2024 - Aug 2024</h4>
                    </div>
        
                    <div className='educard'>
                        <img src={img3} alt="img" className='w-1/4 lg:w-2/5'/>
                        <h2 className='mb-4'>Web Developer Intern</h2>
                        <p className='text-black'>The Fast Way</p>
                        <br />
                        <p className='mb-8'>Delivered two major web projects, improving site responsiveness and usability by 30%. Implemented full-stack solutions within fast development cycles, getting hands-on experience with industry practices. </p>
                        <h4>Jan 2023 - June 2023</h4>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Experience