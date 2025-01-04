import React from 'react'
import pratham from '../../assets/Pratham.png'
import './Header.css'

const Header = () => {
  return (
    <div className='contt'>
    <div className='flex w-full h-[85vh] responsiveh'>
        <div className='w-2/4 flex flex-col justify-center items-start'>
            <small className='text-xl leading-8'>Hi, my name is Kristina.</small>
            <h1 className='text-8xl uppercase font-bold my-2'>I design for growth.</h1>
            <p className='text-xl leading-8'>I’m a Senior Growth Product Designer with a marketing background, Growth Design Mentor at GDS and Career Coach at Liftyz.</p>
            <button className='w-max button mt-6'>Start Conversation</button>
        </div>

        <div className='w-2/4 flex justify-end text-center items-center'>
            <img src={pratham} alt="pratham" className='object-contain w-3/4' />
        </div>
    </div>
    </div>
  )
}

export default Header