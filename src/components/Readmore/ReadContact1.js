import React, { useState } from 'react';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { TbSend } from 'react-icons/tb';
import { BiLogoGmail, BiLike, BiCommentDetail  } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { AiFillLike } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import img1 from '../../assets/images/ReadBlog-img1.jpg';
import img2 from '../../assets/images/ReadBlog-img2.jpg';
import img3 from '../../assets/images/ReadBlog-img33.png';
import img4 from '../../assets/images/ReadBlog-img4.jpg';
import img5 from '../../assets/images/ReadBlog-img5.jpg';
import StarryBackground from "../StarryBackground";

function IndiContent() {
  const [email, setEmail] = useState('');
  const handleClick = () => {
    console.log(email);
  };
  return (
    <section className=" w-full h-auto min-h-full text-white p-10 lg:p-20 flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="text-white">
          <h2 className="font-semibold text-3xl md:text-5xl mb-5">
            Table of Content
          </h2>
          <p className="flex flex-row items-center text-xl  md:text-2xl font-normal mb-4">
            <BsDot />
            Cognitive Benefits: More Than Just a Tune
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Harnessing the Power of Music
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            The Emotional Resonance of Music
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Music and the Soul: A Spiritual Connection
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Conclusion
          </p>
        </div>
        <div className="w-full md:w-auto mx-auto md:mx-0">
          <div className="flex flex-col justify-center items-center w-80 sm:96 h-64 bg-indi-content rounded-[20px] px-4 py-2">
            <h3 className="flex flex-row items-center gap-2 font-semibold text-3xl mb-2">
              Subscribe
              <span>
                <BiLogoGmail />
              </span>
            </h3>
            <div className="w-full relative mb-4">
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border rounded-3xl px-2 py-4"
              />
              <button
                onClick={handleClick}
                className="absolute top-0 right-0 text-2xl px-2 py-4 pr-4 bg-transparent z-10"
              >
                <TbSend />
              </button>
            </div>
            <p className="font-semibold text-lg mb-8">Follow us</p>
            <div className="w-full flex flex-row items-center justify-evenly">
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <RiInstagramFill className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <IoLogoTwitter className="text-4xl" />
              </a>
              <a
                href="#"
                className="text-white bg-purple-600 w-12 h-12 flex items-center justify-center rounded-3xl"
              >
                <IoLogoLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">Cognitive Benefits</h3>
          <p className="font-normal text-lg text-justify">
          Beyond feelings, music offers important psychological advantages. According to studies playing an instrument enhances focus, problem solving abilities and also memory. Cognitive processes like spatial-temporal reasoning and language development can be improved even by listening. The “Mozart Effect” for instance, is a controversial theory that argues that consuming classical music might momentarily increase IQ and enhance the task performance.
          </p>
          <p className="font-normal text-lg text-justify">
          It is now worldwide acknowledged that music therapy is an effective treatment for neurological conditions. With the help of music-based therapies, patients with diseases like Alzheimer or stroke have shown significant improvements in motor abilities and memory recall. This is all due to the fact that music activates different brain areas, strengthening preexisting neural connections and making new ones.
          </p>
        </div>
        <div className="w-full sm:w-2/3">
          <img
            src={img1}
            className="mt-20 rounded-2xl w-full sm:h-100 object-cover object-center"
          />
        </div>
      </div>

      {/* Foundation */}
      <div className="mt-10">
        <h3 className="font-semibold text-3xl mb-6">
        Harnessing the Power of Music
        </h3>
        <p className="font-normal text-lg mb-5">
        Considering the deep influence of music, integrating it into daily life can have a huge positive impact. Listening to music improves our lives whether it is through crafting playlists for different moods, watching live performances or picking up an instrument. Music therapy involves systematic methods to maximize its therapeutic potential for anyone looking for emotional respite or mental stimulation.
        Music is a timeless friend that provides comfort, joy and inspiration as we traverse the challenges of contemporary life. The importance of music is highlighted by its capacity to mold our emotions and thoughts, serving as a constant reminder of its indispensable place in the human experience.

        </p>

        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={img2}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
      </div>
      </div>

      {/* Challenges */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">The Emotional Resonance of Music</h3>
          <p className="font-normal text-lg text-justify">
          The power of music is to evoke strong feelings is among its most significant effects. A single tune has the power to make a person cry or take take us back to an old memory or fill up our hearts with joy. Neuroscientists have found that music triggers the release of dopamine, the “feel-good” neurotransmitter, which stimulates the brains reward system. For this reason, a familiar song can instantly calm us down and make us feel better when things are tough.
          Additionally, music has the ability to reflect our feelings. While upbeat sounds can energize us, inspiring ambition and excitement, sad songs frequently offer comfort amid grief. Music is a potent instrument for emotional healing and connection because of its dual capacity to reflect and impact emotions

          </p>
        </div>
        <div className="w-full sm:w-2/3">
          <img
            src={img3}
            className="rounded-2xl w-full sm:h-96 object-cover object-center mt-20"
          />
        </div>
      </div>

      {/* Tips and Tricks */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
      <div className="w-full sm:w-2/3">
          <img
            src={img4}
            className="rounded-2xl w-full sm:h-96 object-cover object-center mt-20"
          />
        </div>
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">Music and the Soul</h3>
          <p className="font-normal text-lg text-justify">
          Spirituality has constantly been entwined with music. It is a way to connect with something bigger than ourselves, whether it be through contemporary praise melodies or ancient chants. Music’s rhythmic and harmonic patterns have the ability to produce contemplative state that promote tranquillity and reflection. Music is a vital component of ritual in many cultures, signifying time and unity.
          The ability of music to express beyond words is another aspect of its spiritual influence. There are moments when a tune can communicate ideas and feelings that words cannot. By bridging comprehension and empathy barriers, nonverbal communication enables people to establish strong connections with both their inner selves and others.
          </p>
        </div>
        
      </div>

      {/* Conclusion */}
      <div className='w-full mt-20'>
      <h3 className="font-semibold text-3xl mb-8">
        Conclusion
        </h3>
        <div className='w-full'>
          <img src={img5} alt='image'className=" object-cover object-center rounded-2xl w-full h-40 sm:h-96" />
        </div>
        <div className='mt-10'>
          <p className='font-normal text-lg sm:text-xl mb-5'>Music is a power that sharpens our intellects, affects our emotion and feeds our souls; it is more than just a sound. Every aspect of our being is impacted by music, whether it be through the calming tunes or the upbeat beat of dance tune or the profound spiritual meaning of a hymn. By comprehending and accepting its potential, we open up a vast reservoir of joy, healing and connection.</p>
          <p className='font-normal text-lg sm:text-xl mb-5'>Remember, Beyondriffs is here to support your musical journey. Happy strumming! 🎸</p>
        </div>
      </div>

      {/* Like */}
      
    </section>
  );
}

export default IndiContent;
