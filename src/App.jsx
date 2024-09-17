import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Home/>
        </div>
        <About/>
        <Experience/>
        <Process/>
        <div className='relative z-0'>
          <Contact/>
        </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;