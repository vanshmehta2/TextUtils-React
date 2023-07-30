import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  // document.body.style.backgroundColor = '#042743'
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)
  const [TextFormtextColor, settextColor] = useState({
         color:'black'
  })
 
  const showAlert = (message,type)=>{
      setAlert({
        message:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  let toggleMode =()=> {
    if(mode ==='dark'){
      setMode("light")
      showAlert("light Mode has been Enabled", "success");
      document.body.style.backgroundColor = 'white'
      settextColor({
        color:'black'
      })
    }
    else{
      setMode("dark")
      showAlert("Dark Mode has been Enabled", "success");
      document.body.style.backgroundColor = '#042743'
      settextColor({
        color:'white'
      })
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <switch>
          <Route exact path="/about">
              <About />
          </Route>
          <Route exact path="/">
              <TextForm header="Enter the text" TextFormtextColor={TextFormtextColor}/>
          </Route>
        </switch>
      </div>
      </Router>
    </>
  );
}

export default App;
