import React from 'react';
import './services.css'
import LABOR from '../../assets/images/labor-day.png';
import LEAK from '../../assets/images/leak.png';
import PLUMBER from '../../assets/images/plumber.png';
import TOOLBOX from '../../assets/images/toolbox.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



function Services() {
  return (
    <section id="our-services">
       <div className="services-heading">
            <div className="services-heading-text">
                {/* <strong>Unsere Dienstleistungen</strong> */}
                <h2>Unsere hochwertige Dienste</h2>
            </div>
            <div className="service-slide-btns">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
      <div className="services-box-container">
        <Swiper
          className="mySwiperservices"
          slidesPerView={1}
          spaceBetween={10}
          modules={[ Navigation ]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          breakpoints={{
            850: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box1">
                <img alt="" src={LABOR} width="60" height="60" />
                <strong>Kanalinspektion und Diagnose</strong>
                <p>Ermittlung des Zustands des Problems wie Verstopfungen, Lecks, Risse oder Wurzeleinwüchse.</p>             
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box2">
                <img alt="" src={LEAK} width="60" height="60" />
                <strong>Kanalreinigung und Wartung</strong>
                <p>Hochdruckspülungen zur Beseitigung von Ablagerungen, Fett und anderen Hindernissen in Kanalleitungen.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box3">
                <img alt="" src={PLUMBER} width="60" height="60" />
                <strong>Kanalreparatur und -sanierung</strong>
                <p>Grabungslose Kanalreparatur, z.B. Rohrauskleidung oder Rohrsprengung, minimiert Ausgrabungen und Störungen.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box4">
                <img alt="" src={TOOLBOX} width="60" height="60" />
                <strong>Kanal - Notfallintervention</strong>
                <p>Schneller Einsatz von erfahrenen Technikern, ausgestattet mit dem notwendigen Equipment.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Services;