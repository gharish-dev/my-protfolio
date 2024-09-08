import { useEffect } from 'react';
import './App.css';
import Contract from './componets/Contract';

import Experiment from './componets/Experiment';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import Project from './componets/Project';
import Skil from './componets/Skil';
import Aos from "aos";
import "aos/dist/aos.css"
import Edu from './componets/Edu';


function App() {
  useEffect(() => {
    return () => {
      Aos.init();
    };
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <div className="container ">
      <Home/>
     
      <Skil/>
      <Edu/>
      <Project/>
      <Experiment/>
      
      <Contract/>
     
  
       
      </div>

      
    </div>
    
  );
}

export default App;
