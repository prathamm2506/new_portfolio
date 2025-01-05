import React from 'react'
import './Education.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'


const Education = () => {
  return (
    <div className='eduu' id='edusec'>
        <h1>Academic Milestones</h1>

        <div className='flex items-center justify-between mt-12 respoedu'>
            <div className='educard'>
                <img src={img1} alt="img" className='w-1/4 lg:w-1/3'/>
                <h2 className='mb-4'>Secondary School Certificate</h2>
                <p className='text-black'>Dominic Savio Vidyalaya</p>
                <br />
                <p className='mb-8'>Thrived academically and socially at Dominic Savio Vidyalaya. Demonstrated leadership in student activities, achieved academic excellence, and developed strong interpersonal skills through collaborative projects. </p>
                <h4>June 2011 - March 2020</h4>
            </div>

            <div className='educard'>
                <img src={img3} alt="img" className='w-1/4 lg:w-1/3'/>
                <h2 className='mb-4'>Diploma in Information Technology</h2>
                <p className='text-black'>Government Polytechnic Mumbai</p>
                <br />
                <p className='mb-8'>Completed Diploma in IT at Government Polytechnic Mumbai. Acquired hands-on skills in programming, networking, and systems analysis. Excelled in team projects, problem-solving, and adapting to emerging technologies. </p>
                <h4>Jan 2021 - June 2023</h4>
            </div>

            <div className='educard'>
                <img src={img2} alt="img" className='w-1/4 lg:w-1/3'/>
                <h2 className='mb-4'>B.E. Artificial Intelligence and Data Science</h2>
                <p className='text-black'>VES Institute of Technology</p>
                <br />
                <p className='mb-8'>Currently pursuing BE in AI and DS at VESIT. Applying theoretical knowledge to real-world problems, honing programming skills, and collaborating on impactful projects. Demonstrating adaptability and critical thinking in diverse contexts. </p>
                <h4>Sept 2023 - June 2026</h4>
            </div>
        </div>
    </div>
  )
}

export default Education