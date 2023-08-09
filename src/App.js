import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alerts from './Components/Alerts';
import {Routes,Route} from "react-router-dom";
function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      mssg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const toggleMode = ()=>{
  if(mode==='light'){
     setMode('dark');
     showAlert("Dark Mode Enabled","success");
     document.body.style.background='#343a40'
     //document.body.style.color='white'
    //  setInterval(() => {
    //  document.title="TextUtils is amazing";
    //  },2000);
  }else{
    setMode('light');
    document.body.style.background='white';
    showAlert("Light Mode Enabled","success");
    //document.body.style.color='#343a40';
  }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} /> 
<Alerts  alert={alert}/>

{/*above we are passing values to the html elements i.e props */}
{/* in the value we ill only assign that is mentioned in the corresponding propstype else it will throw error */}
<div className="container my-3">
 <Routes>
 <Route exact path="/" element={<TextForm heading="Enter text" mode={mode} showAlert={showAlert}/>}></Route>
 <Route exact path="/about" element={<About mode={mode}/>}></Route>
 </Routes> 
{/* <TextForm heading="Enter text" mode={mode} showAlert={showAlert}/> */}
    
</div>
    </>
  );
}
// const [button,setmyButton] = useState("Enable Dark Mode");
//setmyButton("Enable Dark Mode");
 // setmyButton("Enable Light Mode");
export default App;
