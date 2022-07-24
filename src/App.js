import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import './styles/home.css';

function App() {
  return (
    <>
     <Navbar/>
      <header     id='home' className="header">
   
     <Hero/>
      </header>
      <main>
        <div id='projects' className="projectSection">
          <Projects/>
        </div>
        <div id='skills' className="skillSection">
          <Skills/>
        </div>
        <div id='about' className="aboutSection">
          <About/>
        </div>
        <div id='contact' className="contactSection">
          <Contact/>
        </div>
      </main>
    </>
  );
}

export default App;
