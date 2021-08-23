//  Components
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Education from './components/Education'
import Footer from './components/Footer'

//  Global Styles
import { GlobalStyles } from './GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Jumbotron />
      <About />
      <Projects />
      <Skill />
      <Education />
      <Footer />
    </div>
  )
}

export default App
