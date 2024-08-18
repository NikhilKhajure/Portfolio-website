import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Myskills from "./Components/Myskills"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Resume from "./Components/Resume"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="" style={{ background: "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(22, 9, 121, 1) 60%, rgba(2, 0, 36, 1) 100%)" }} >
        <Navbar />
        <Home />
        <About />
        <Myskills />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
