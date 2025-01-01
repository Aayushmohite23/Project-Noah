import React from 'react';
import NavBar from '../../components/NavBar';
import StarryBackground from "../../components/StarryBackground";
import TermsOfService from '../../components/termsofservice/TermsOfService';
import Explore from '../../components/courses/Explore';

function Policy() {
    return (
      <div className=" w-full h-full min-h-auto overflow-y-auto  bg-black relative z-50 ">
        <StarryBackground />
        <NavBar />
        <TermsOfService/>
        <Explore/>

        
      </div>
    );
  }
  
  export default Policy;