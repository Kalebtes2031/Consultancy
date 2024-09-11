import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import About from "./components/About";
import Experience from "./components/Services";
import Feedback from "./components/Feedback";
import Contact from "./components/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Process/>
        </div>
        <About/>
        <Experience/>
        <Feedback/>
        <div className='relative z-0'>
          <Contact/>
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;