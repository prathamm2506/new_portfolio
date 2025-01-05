import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='eduu' id='skillssec'>
        <h1>Skills</h1>

        <div className='skillsone my-6'>
            <h2>Programming</h2>
            <div className='flex flex-row gap-6 items-center justify-center flex-wrap'>
            <p className='skills'>Python</p>
            <p className='skills'>C/C++</p>
            <p className='skills'>Java</p>
            <p className='skills'>Lua</p>
            <p className='skills'>Tailwind</p>
            <p className='skills'>JavaScript</p>
            <p className='skills'>PHP</p>
            <p className='skills'>Dart</p>
            </div>
        </div>

        <div className='skillsone my-6'>
            <h2>Databases</h2>
            <div className='flex flex-row gap-6 items-center justify-center flex-wrap'>
            <p className='skills'>Firebase</p>
            <p className='skills'>MySQL</p>
            </div>
        </div>

        <div className='skillsone my-6'>
            <h2>Frameworks/Tools</h2>
            <div className='flex flex-row gap-6 items-center justify-center flex-wrap'>
            <p className='skills'>React JS</p>
            <p className='skills'>Node JS</p>
            <p className='skills'>Flutter</p>
            <p className='skills'>Git/GitHub</p>
            <p className='skills'>BitBucket</p>
            <p className='skills'>Tableau</p>
            <p className='skills'>Postman</p>
            </div>
        </div>
    </div>
  )
}

export default Skills