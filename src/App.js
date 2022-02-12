import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react';
// import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#808080';
      document.title = 'TextUtils - Dark-Mode';
      // showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#F8F9FA';
      document.title = 'TextUtils - Light-Mode';

      // showAlert("Light mode has been enabled","success");
    }
  }

 
  return (
    <>
    <Router>      
        <Navbar title="UtilText" name="About" mode={mode} toggleMode={toggleMode}/>  
     <Routes>        
          <Route exact path="/" element={<div className="container">
          <TextForm heading="Enter the Text to analyze" tagName="Your TextArea" mode={mode}/>
          </div>} >
               
        </Route>
        <Route exact path="/about" element={<About />}>
            
          </Route>
      </Routes>
    </Router>

         

    
      
     
        
          
         

 
  
  
    </>
  );
}

export default App;
