import "preline/preline";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Project";

function App() {
  return (
     <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}


export default App;