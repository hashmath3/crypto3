import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPageComponent from "../components/HomePageComponents/LandingPageComponent";
import News from "../components/News";
import Newstitle from "../components/NewsTitle";
import Test from "../components/Test";
function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
       <Header />
       <LandingPageComponent /> 
      {/* <Newstitle/>
      <News/> *
        */}
    <Footer />  
    </div>
  );
}

export default Home;