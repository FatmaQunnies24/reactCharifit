
import "./ReasonOfHelping.css";

import About from './Pages/About';
import Blog from './Pages/Blog';
import Cause from './Pages/Cause';
import Contact from './Pages/Contact';
import Elements from './Pages/Elements';
import SingleBlog from './Pages/SingleBlog';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from "./HomePage";

function App(props) {
  return(
 <div>
  {/* <HomePage img="/images/boyImg.png"></HomePage> */}
      <Routes>
        <Route path="/Home" element={<HomePage img="/images/boyImg.png"  type="home"/>} />
        <Route path="/About" element={<HomePage img="/images/bradcam.png" type="about"/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/SingleBlog" element={<SingleBlog />} />
        <Route path="/Elements" element={<Elements />} />
        <Route path="/Cause" element={<Cause />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
