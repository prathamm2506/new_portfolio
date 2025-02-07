import React from 'react'
import pratham from '../../assets/Pratham.png'
import './Header.css'
import CV from '../../assets/Resume - Pratham Matkar.pdf'

const Header = () => {
  return (
    <div className='contt'>
    <div className='flex w-full h-[85vh] responsiveh'>
        <div className='w-2/4 flex flex-col justify-center items-start'>
            <small className='text-xl leading-8'>Hi, my name is Pratham.</small>
            <h1 className='text-8xl uppercase font-bold my-2'>I BUILD SOLUTIONS WITH IMPACT.</h1>
            <p className='text-xl leading-8'>Creating tech solutions blending innovation with real-world problem-solving.</p>
            <a className='w-max button mt-6' href={CV} download>Download CV</a>
        </div>

        <div className='w-2/4 flex justify-end text-center items-center'>
            <img src={pratham} alt="pratham" className='object-contain w-4/5' />
        </div>
    </div>
    </div>
  )
}

export default Header