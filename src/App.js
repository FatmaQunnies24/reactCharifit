
import "./ReasonOfHelping.css";

import About from './Pages/About';
import Blog from './Pages/Blog';
import Cause from './Pages/Cause';
import Contact from './Pages/Contact';
import Elements from './Pages/Elements';
import SingleBlog from './Pages/SingleBlog';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Pages/Login';
import Registerr from './Pages/Registerr';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from "./HomePage";

function App(props) {
  return(
 <div>

      <Routes>
         <Route path="/" element={<Navigate to="/Home" />}/>
        <Route path="/Home" element={<HomePage img="/images/boyImg.png"  type="home"/>} />
        <Route path="/About" element={<HomePage img="/images/bradcam.png" type="about"/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/SingleBlog" element={<SingleBlog />} />
        <Route path="/Elements" element={<Elements />} />
        <Route path="/Cause" element={<Cause />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Registerr" element={<Registerr />} />

        <Route path="/Login" element={ <GoogleOAuthProvider clientId="930083034754-4m7h0a0778gqa96haqr7i3qg37bgjhf7.apps.googleusercontent.com">
                      
                      <Login/>  
                                  </GoogleOAuthProvider>
} />

      </Routes>
    </div>
  );
}

export default App;
