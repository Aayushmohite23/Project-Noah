import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';
import { GoFileDirectory } from 'react-icons/go';
import { BiCommentDetail } from 'react-icons/bi';

export default function IndiExplore() {
  return (
    <div className=" w-full h-auto text-white p-10 lg:p-20 flex flex-col gap-10">
      <h1 className="font-semibold text-4xl md:text-6xl">
        The Power of Music: How It Shapes Our Minds and Souls
      </h1>
      <div>
        <div className="flex items-center mb-4">
          <p className="flex-shrink-0 flex flex-row items-center gap-3">
            <FaRegClock className="w-6 h-6" />
            <span className="w-40">June 27, 2024</span>{' '}
          </p>
          <p className="flex-grow flex flex-row justify-center items-center gap-3">
            <VscAccount className="w-6 h-6" />
            <span>Author name</span>
          </p>
        </div>

        <div className="flex items-center">
          <p className="flex-shrink-0 flex flex-row items-center gap-3">
            <GoFileDirectory className="w-6 h-6" />
            <span className="w-40">Category</span>{' '}
          </p>
          <p className="flex-grow flex justify-center items-center gap-3">
            <BiCommentDetail className="w-6 h-6" />
            <span>20 Comments</span>
          </p>
        </div>
      </div>

      <div className="w-full pt-10">
        <p className="font-normal text-lg mb-5">
        Music deeply impacts our brain it influences everything from emotions and memory to physical heath and cognitive function.
         Music acts as a universal language by transcending all the boundaries, cultures and generations.
          It deeply impacts a human mind and soul that affects our everyday activities, customs and holidays.
           We cannot deny that music has the ability to evoke strong emotions.
         But it is also a question that how exactly does it influence us?
        </p>
        <p className="font-normal text-lg mb-5">
          No more further delay, Let’s dive in!
        </p>
      </div>
    </div>
  );
}
