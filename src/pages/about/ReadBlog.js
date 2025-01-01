import React from 'react';
import NavBar from '../../components/NavBar';
import ReadExplore from '../../components/Readmore/ReadExplore';
import ReadContact from '../../components/Readmore/ReadContact';
import ReadLike from '../../components/Readmore/ReadLike';
import ReadContact1 from '../../components/Readmore/ReadContact1';
import ReadFooter from '../../components/Readmore/ReadFooter';
import ReadRecentpost from '../../components/Readmore/ReadRecentpost';

function ReadBlog() {
    return (
      <div className=" w-full h-full min-h-auto overflow-y-auto  bg-black">
        <section class="relative w-full h-3/6 sm:h-5/6 bg-indiBlog bg-cover bg-center lg:bg-no-center lg:bg-left lg:bg-no-repeat">
          <NavBar />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff00] to-[#000000e2] "></div>
        </section>
        <ReadExplore/>
        <ReadContact1/>
        <ReadLike/>
        <ReadContact/>
        <ReadRecentpost/>
        <ReadFooter/>
      </div>
    );
  }
  
  export default ReadBlog;