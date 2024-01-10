import "preline/preline";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Resume from "./components/Resume/Resume";

function App() {
  return (
     <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
    </div>
  );
}


export default App;