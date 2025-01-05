import img1 from '../src/assets/Pratham.png'
import Education from './components/education/Education'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Project from './components/projects/Project'
import Testimonial from './components/testimonials/Testimonial'
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Testimonial/>
      <Education/>
      <Project/>
    </div>
  )
}

export default App
