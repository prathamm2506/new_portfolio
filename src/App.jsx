import img1 from '../src/assets/Pratham.png'
import BackToTopButton from './components/backtotop/BackToTopButton'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'
import Testimonial from './components/testimonials/Testimonial'
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Experience/>
      <Testimonial/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default App
