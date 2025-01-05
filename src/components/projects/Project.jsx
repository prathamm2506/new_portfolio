import React from 'react'
import './Project.css'
import img1 from '../../assets/texttoimg.png'
import img2 from '../../assets/dobot.png'
import img3 from '../../assets/lung.png'
import img4 from '../../assets/clustering.png'
import img5 from '../../assets/netmonitor.png'
import img6 from '../../assets/droneairgear.png'



const Project = () => {
  return (
    <div className='eduu'>
        <h1>Featured Projects</h1>

        <div className='flex flex-row mt-12 justify-between respoproj'>
            <div className='projcard'>
                <img src={img1} alt="IMG" />
                <a href="https://github.com/prathamm2506/text-to-image"><h3>Text to Image</h3></a>
                <p>November 2024</p>
            </div>

            <div className='projcard'>
                <img src={img2} alt="IMG" />
                <a href="https://github.com/prathamm2506/dobot-magician"><h3>Robotic Arm with AI Vision</h3></a>
                <p>February 2023</p>
            </div>

            <div className='projcard'>
                <img src={img3} alt="IMG" />
                <a href="https://github.com/prathamm2506/lung_cancer_detection"><h3>CNN Based Lung Cancer Detection</h3></a>
                <p>November 2024</p>
            </div>
        </div>

        <div className='flex mt-12 justify-between respoproj'>
            <div className='projcard'>
                <img src={img4} alt="IMG" />
                <a href="https://github.com/prathamm2506/Clustering-For-Delivery-System"><h3>Clustering System for Dilivery Platform</h3></a>
                <p>October 2024</p>
            </div>

            <div className='projcard'>
                <img src={img5} alt="IMG" />
                <a href="https://github.com/prathamm2506/Network_Monitor"><h3>Network Monitoring and Visualization</h3></a>
                <p>October 2024</p>
            </div>

            <div className='projcard'>
                <img src={img6} alt="IMG" />
                <a href="https://droneairgear.com/"><h3>One Stop Solution for Drones</h3></a>
                <p>June 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Project