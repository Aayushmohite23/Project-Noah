import React from 'react';
import NavBar from '../../components/NavBar';
import ReadExplore from '../../components/Readmore1/ReadExplore';
import ReadContact from '../../components/Readmore1/ReadContact';
import ReadLike from '../../components/Readmore1/ReadLike';
import ReadContect from '../../components/Readmore1/ReadContent';
import ReadFooter from '../../components/Readmore1/ReadFooter';
import ReadRecentpost from '../../components/Readmore1/ReadRecent';

function ReadMore1Blog() {
    return (
      <div className=" w-full h-full min-h-auto overflow-y-auto  bg-black">
        <section class="relative w-full h-3/6 sm:h-5/6 bg-indiBlog bg-cover bg-center lg:bg-no-center lg:bg-left lg:bg-no-repeat">
          <NavBar />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff00] to-[#000000e2] "></div>
        </section>
        <ReadExplore/>
        <ReadContact/>
        <ReadLike/>
        <ReadContect/>
        <ReadRecentpost/>
        <ReadFooter/>
      </div>
    );
  }
  
  export default ReadMore1Blog;