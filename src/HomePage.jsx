import './App.css';
import './HomePage.css';
// import '../src/Pages/CausesList.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logoImage from './logo.png';
import "./ReasonOfHelping.css";

import About from './Pages/About';
import Blog from './Pages/Blog';
import Cause from './Pages/Cause';
import Contact from './Pages/Contact';
import Elements from './Pages/Elements';
import SingleBlog from './Pages/SingleBlog';
import Activities from './Pages/Activities';
import CausesList from './Pages/CausesList';
import Statistic from './Pages/Statistic';
import Volunteer from './Pages/Volunteer';
import News from './Pages/News';
import Donation from './Pages/Donation';
import Footer from './Pages/Footer';
import NavPar from './Pages/NavPar';


import ReasonOfHelping from './ReasonOfHelping';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';


function HomePage (props){

const [reasonOfHelping,setReasonOfHelping]=useState([{"id":1,"name":"Collecting Fund","imgUrl":"1.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."},
  {"id":2,"name":"Blood Camp","imgUrl":"2.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."},
  {"id":3,"name":"Friendly Volunteer","imgUrl":"3.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."}]);




  const [causesList, setCausesList] = useState([{
    "name": "Clothes For Everyone",
    "Raised": "$5000.00", 
    "Goal": "$9000.00",
    "pre":"30%",
    "imgUrl":"/images/causes/5.png",

    "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
    "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
},
{
    "name": "Clothes For Everyone",
    "Raised": "$5000.00", 
    "Goal": "$9000.00",
    "pre":"30%",
    "imgUrl":"/images/causes/4.png",

    "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
    "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
},
{
    "name": "Clothes For Everyone",
    "Raised": "$5000.00", 
    "Goal": "$9000.00",
    "pre":"30%",
    "imgUrl":"/images/causes/3.png",

    "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
    "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
},
{
    "name": "Clothes For Everyone",
    "Raised": "$5000.00", 
    "Goal": "$9000.00",
    "pre":"30%",
    "imgUrl":"/images/causes/2.png",
    "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
    "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
},
{
    "name": "Clothes For Everyone",
    "Raised": "$5000.00", 
    "Goal": "$9000.00",
    "pre":"30%",
    "imgUrl":"/images/causes/1.png",
    "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
    "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
}]);





useEffect(() => {
  fetch("", {
      headers: {
          // Authorization: "Bearer " + token,
      },
  })
      .then((response) => response.json())
      .then((data) => {
        setReasonOfHelping(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    
    <div className="App">
      <NavPar img="/images/boyImg.png"  type="home"></NavPar>




      <div class="reson_area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center mb-55">
                        <h3><span>Reason of Helping</span></h3>
                    </div>
                    </div>
                    </div> 

                    <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                    <div className="thum">
                    {reasonOfHelping.map(reason => (
                        <ReasonOfHelping
                            key={reason.id}
                            imgUrl={reason.imgUrl}
                            name={reason.name}
                            desc={reason.desc}
                        />
                    ))}
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    



<Activities></Activities>


<div className="popular_causes_area section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section_title text-center mb-55">
                            <h3><span>Popular Causes</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
        <div className="col-lg-12">
            <div className="causes_active owl-carousel">
                {causesList.map((cause, index) => (
                
<CausesList list={causesList} cause={cause} index={index} ></CausesList>

))}
            </div>
        </div>
    </div>
                </div>
                </div>








<Statistic></Statistic>







                <div class="our_volunteer_area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center mb-55">
                        <h3><span><br></br><br></br>Our Volunteer</span></h3>
                    </div>
                    </div>
                    </div> 
                    <div class="volunteer-list">
      <Volunteer />

    </div>
                      </div>
                    </div>










                    <div class="news__area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center mb-55">
                        <h3><span>News & Updates</span></h3>
                    </div>
                </div>
            </div>
           
        
                  <News></News>
    </div>
</div>

   







<Donation></Donation>


<Footer></Footer>

<Routes>
      <Route path="/Home" element={<HomePage />} />
                        <Route path="/About" element={<About></About>} />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/SingleBlog" element={<SingleBlog />} />
                        <Route path="/Elements" element={<Elements />} />
                        <Route path="/Cause" element={<Cause />} />
                        <Route path="/Contact" element={<Contact/>} />
                      </Routes>
    </div>
  );
}

export default HomePage;
