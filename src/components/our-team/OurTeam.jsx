import React from 'react'
import './ourTeam.css'
import IMAGE1 from '../../assets/images/image1.webp'
import IMAGE2 from '../../assets/images/image2.webp'
import IMAGE3 from '../../assets/images/image3.webp'
import IMAGE4 from '../../assets/images/image4.webp'
import IMAGE5 from '../../assets/images/image5.webp'
import IMAGE6 from '../../assets/images/image6.webp'
import IMAGE7 from '../../assets/images/image7.webp'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function OurTeam() {

  return (
    <section id="our-team">

       
        <div className="our-team-heading">
            <h3>Lernen Sie unseren Spezialisten kennen</h3>
        </div>

        
        <div className="team-box-container">
        <Swiper 
        className='mySwiperteam'
        slidesPerView= {1}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        >
        <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img"> 
                            <img alt="" src={IMAGE1}/>
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
                
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE2} />
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
                
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE3}/>
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE4} />
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
                
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE5} />
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
                
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE6} />
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="team-box">
                        <div className="team-img">
                            <img alt="" src={IMAGE7} />
                        </div>
                        {/* <div className="team-text">
                            <strong>Dr. Paradox Alex</strong>
                            <span>Skin Specialist</span>
                        </div> */}
                    </div>
                </div>
            </SwiperSlide>
            
            <div class="swiper-pagination"></div>
            </Swiper>
        </div>
    </section>
  )
}

export default OurTeam