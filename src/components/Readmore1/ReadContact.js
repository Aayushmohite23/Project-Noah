import React, { useState } from 'react';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { TbSend } from 'react-icons/tb';
import { BiLogoGmail, BiLike, BiCommentDetail  } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { AiFillLike } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import img1 from '../../assets/images/therapy-fg-img1.jpeg';
import img2 from '../../assets/images/Healing-fg-img2.png';
import img3 from '../../assets/images/Healing-fg-img3.jpeg';
import img4 from '../../assets/images/ReadBlog-img4.jpg';
import img5 from '../../assets/images/listing-fg-img5.png';
import img6 from '../../assets/images/Age-fg-img6.jpg';
import img7 from '../../assets/images/Science-fg-img7.jpg'
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
            Music Therapy: What Is It?
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Healing the Mind
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Healing the Body
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Healing the Soul
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            How Does It Work?
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Who Can Benefit?
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            The Science Behind It
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            The Future of Music Therapy
          </p>
          <p className="flex flex-row items-center text-xl md:text-2xl font-normal mb-4">
            <BsDot />
            Embracing Music as a Healer
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
          <h3 className="font-semibold text-3xl mb-6">Music Therapy: What Is It?</h3>
          <p className="font-normal text-lg text-justify">
          Music therapy extends well beyond the pleasure of listening to your favorite songs.
           It is an evidence-based practice led by trained professionals who use music strategically
            to improve emotional, mental, and physical well-being. Whether it’s through creating melodies,
             engaging in rhythmic exercises, or even listening with intention, music therapy adapts to meet individual needs.
          </p>
          <p className="font-normal text-lg text-justify">
          This idea of music as a healing tool isn’t new.
           From ancient rituals involving chants to modern compositions that soothe the soul,
            music has long played a vital role in human wellness. Today, its effectiveness is 
            supported by science and implemented in settings ranging from hospitals to homes.
          </p>
        </div>
        <div className="w-full sm:w-2/3">
          <img
            src={img1}
            className="mt-20 rounded-2xl w-full sm:h-96 object-cover object-center"
          />
        </div>
      </div>

      {/* Foundation */}
      <div className="mt-10">
        <h3 className="font-semibold text-3xl mb-6">
        Healing the Mind
        </h3>
        <p className="font-normal text-lg mb-5">
        Music plays a significant role in our mental well-being.
         Have you ever noticed how the right song can change your mood immediately?
          Music therapy goes one step further. It has proven to reduce stress, anxiety,
           and depression by activating the brain to release dopamine—the "happy chemical." 
        </p>
        <p className="font-normal text-lg mb-5">
        For individuals battling trauma or PTSD, music becomes a safe space to process emotions.
         It is also used as a stimulation device for cognitive skills. When it comes to Alzheimer patients,
          they do respond favorably to a past-music record, which results in remembrance before finally getting lost.
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
          <h3 className="font-semibold text-3xl mb-6">Healing the Body</h3>
          <p className="font-normal text-lg text-justify">
          Music does not just affect our emotions; it also influences our body.
           Studies have shown that listening to soothing music can lower blood pressure,
            slow heart rate, and even boost the immune system. Music therapy is often used in
             pain management as it provides distraction and comfort, reducing the perception of pain.
          </p>
          <p className="font-normal text-lg text-justify">
          For stroke patients or patients recovering from injuries,
           rhythmic music aids in rehabilitation of their motor skills.
            The rhythm sets a structure that helps them regain movement and coordination.
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
          <h3 className="font-semibold text-3xl mb-6">Healing the Soul</h3>
          <p className="font-normal text-lg text-justify">
             Music is a touch to the soul beyond the mind and body.
             It makes you mindful of your being in the moment. Often,
             music therapy gives way to emotional release so that people can
             put their feelings into words when they cannot. In palliative care,
             where patients are terminally ill, music is a source of comfort and
             a bridge for deep emotional connections with loved ones. 
          </p>
        </div>  
       </div>

      {/* Conclusion */}
      <div className="mt-10">
        <h3 className="font-semibold text-3xl mb-6">
          The Foundation: Open Chords
        </h3>
        <h4 className="font-semibold text-2xl mb-4">How Does It Work?</h4>
        <p className="font-normal text-lg mb-5">
          Music therapy isn’t a one-size-fits-all solution.
          Therapists use a variety of techniques based on individual needs:
        </p>

        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={img5}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-around gap-4 sm:gap-0">
            <div className="font-normal text-xl sm:text-2xl flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Active Participation :
              </p>
               <p className="flex-1">
                  Singing, playing instruments, or composing songs.
               </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Passive Listening :
              </p>
              <p className="flex-1">
              Relaxing to specific genres or compositions.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Improvisation :
              </p>
              <p className="flex-1">
                Creating spontaneous music to explore feelings.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="font-normal text-lg mb-5">
          Each is individualized, ensuring the therapy works for the person it's created for.
          </h4>
        </div>
      </div>

      {/* Like */}
      <div className="mt-10">
        <h3 className="font-semibold text-3xl mb-6">
          The Foundation: Open Chords
        </h3>
        <h4 className="font-semibold text-2xl mb-4">Who Can Benefit?</h4>
        <p className="font-normal text-lg mb-5">
        Music therapy is universal, its benefits extend to people of all ages:
        </p>

        <div className="w-full flex flex-col sm:flex-row  gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={img6}
              alt="image"
              className=" object-cover object-center rounded-2xl w-full sm:h-72 "
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-around gap-4 sm:gap-0">
            <div className="font-normal text-xl sm:text-2xl flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Children :
              </p>
               <p className="flex-1">
                It’s particularly effective for developmental disorders like autism, improving communication and social skills.
               </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Adults :
              </p>
              <p className="flex-1">
              This helps manage workplace stress as well as emotional trauma through the healing balm of music as an escape.
              </p>
            </div>
            <div className="font-normal text-xl sm:text-2xl  flex flex-col sm:flex-row items-start justify-between">
              <p className="font-semibold flex items-center mr-2">
                <BsDot />Elderly :
              </p>
              <p className="flex-1">
              It supports dementia care and offers a means of continuing social contact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Behind*/}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">The Science Behind It</h3>
          <p className="font-normal text-lg text-justify">
              Science supports what many of us intuitively know:
              music heals. Neuroscience shows that music engages 
              the brain in multiple ways, increasing neuroplasticity.
              It has been proven to reduce cortisol levels (the stress hormone) and
              increase oxytocin (the bonding hormone), creating a balanced mental state.
          </p>
        </div>
        <div className="w-full sm:w-2/3">
          <img
            src={img7}
            className="rounded-2xl w-full sm:h-100 object-cover object-center mt-20"
          />
        </div>  
       </div>

       {/*The Future of Music Therapy*/}
         <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
      <div className="w-full sm:w-2/3">
          <img
            src={img1}
            className="rounded-2xl w-full sm:h-96 object-cover object-center mt-20"
          />
        </div>
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">The Future of Music Therapy</h3>
          <p className="font-normal text-lg text-justify">
              As technology advances, music therapy does too.
              Now I envision AI creating customized sounds to relieve stress
              (that's already happening) or virtual reality combining visuals
              and music to immerse therapy. And it goes on like that; the more
              and more people embrace this practice; its scope keeps growing.
          </p>
        </div>  
       </div>

       {/*Embracing Music as a Healer*/}
        <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-20 mt-4">
        <div className="w-full sm:w-1/3 h-1/2">
          <h3 className="font-semibold text-3xl mb-6">Embracing Music as a Healer</h3>
          <p className="font-normal text-lg text-justify">
             Music therapy reminds us that healing does not always come in the form of pills or procedures.
             Sometimes, it is just a melody that speaks to you, a rhythm that moves you,
             or a lyric that understands you.
          </p>
          <p className="font-normal text-lg text-justify">
             The next time you're feeling overwhelmed, take some time.
             Put on a song that makes you feel something. Let the music work its magic.
             And if you're ever interested in music therapy as a means to reconnect with mind, 
             body, and soul, this might be the opportunity to start exploring it.
          </p>
           <p className="font-normal text-lg text-justify">
             Music isn't just noise in the background; music is a lifeline, a healer, and a friend. 
           </p>
        </div> 
        <div className="w-full sm:w-2/3">
          <img
            src={img4}
            className="rounded-2xl w-full sm:h-96 object-cover object-center mt-20"
          />
        </div> 
       </div>

    </section>
  );
}

export default IndiContent;
