import React from "react";
import Slider from "react-slick";
import featurepic from "../../assets/images/feature-pic.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarryBackground from "../StarryBackground";
import { Link } from "react-router-dom";


const data = [
  {
    id: 1,
    content: (
      <section className="mt-2 px-4 md:px-20">
        <div className="mt-0 relative w-full h-64 md:h-[500px]">
          {/* Background Image */}
          <img
            src={featurepic}
            alt="Featured Music"
            className="w-full h-full object-cover rounded-lg brightness-75"
          />
          {/* Centered Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center rounded-lg p-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
              Music Therapy: Healing the Mind, Body, and Soul
            </h2>
            <p className="text-sm md:text-base text-white mb-10 opacity-100 max-w-lg">
              Imagine a world without music—a world where melodies don’t lift your spirits, where songs don’t bring memories flooding back, and where rhythms don’t inspire you to move. Sounds dull, doesn’t it?
            </p>
            <Link to={"/about/readmore1blog"}>
               <button className="mt-5 bg-purple-600 px-5 py-2 rounded-full text-white hover:opacity-80 transition duration-300">
                 Read more
               </button>
              </Link>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 2,
    content: (
      <section className="mt-2 px-4 md:px-20">
        <div className="relative w-full h-64 md:h-[500px]">
          {/* Background Image */}
          <img
                      src={featurepic}
                      alt="Featured Music"
                      className="w-full h-full object-cover rounded-lg brightness-75"
                    />
                    {/* Centered Text Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center rounded-lg p-6">
                      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
                      Music for the Mind: The Cognitive Benefits Of Musical Training
                      </h2>
                      <p className="text-sm md:text-base text-white mb-10 opacity-100 max-w-lg">
                      Music has been part of human life and evolution for as far as our memory serves. It helps us express ourselves, celebrate moments in life, and connect with others. But music isn’t all just about feeling good or having fun. Learning music, even if it’s playing an instrument or singing, can make your brain stronger and healthier. In this blog, we’ll talk about how music training can improve your mind and help you in everyday life.
                      </p>
                      <button className="mt-5 bg-purple-600 px-5 py-2 rounded-full text-white hover:opacity-80 transition duration-300">
                        Learn more
                      </button>
                    </div>
                  </div>
                </section>
              ),
            },

            {
                id: 2,
                content: (
                  <section className="mt-2 px-4 md:px-20">
                    <div className="relative w-full h-64 md:h-[500px]">
                      {/* Background Image */}
                      <img
                                  src={featurepic}
                                  alt="Featured Music"
                                  className="w-full h-full object-cover rounded-lg brightness-75"
                                />
                                {/* Centered Text Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center rounded-lg p-6">
                                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
                                    The Power of Music in Therapy
                                  </h2>
                                  <p className="text-sm md:text-base text-white mb-10 opacity-100 max-w-lg">
                                    Music therapy can help reduce anxiety, improve mood, and enhance overall well-being. It’s a powerful tool for healing. Music acts as a universal language by transcending all the boundaries, cultures and generations. It deeply impacts a human mind and soul that affects our everyday activities, customs and holidays. We cannot deny that music has the ability to evoke strong emotions. But it is also a question that how exactly does it influence us?
                                  </p>
                                  <Link to={"/about/readblog"}>
                                  <button className="mt-5 bg-purple-600 px-5 py-2 rounded-full text-white hover:opacity-80 transition duration-300">
                                    Learn more
                                  </button>
                                  </Link>
                                </div>
                              </div>
                            </section>
                          ),
                        },
          ];
          
          export default function Featured() {
            const settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
              fade: false,
              pauseOnHover: false,
            };
          
            return (
              <section className="relative w-full z-20 h-auto lg:h-medium overflow-hidden">
                <StarryBackground/>
                <Slider {...settings} className="relative w-full h-full">
                  {data.map((el) => (
                    <div key={el.id} className="w-full h-full py-0 md:py-0">
                      {el.content}
                    </div>
                  ))}
                </Slider>
                <style jsx>{`
                  .slick-slide > div {
                    display: flex !important;
                    inline-size: 100%;
                    block-size: 50%;
                  }
                `}</style>
              </section>
            );
          }
           