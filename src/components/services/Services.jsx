import React from 'react';
import './services.css'
import LABOR from '../../assets/images/labor-day.png';
import LEAK from '../../assets/images/leak.png';
import SEWER from '../../assets/images/sewer.png';
import EMERGENCY from '../../assets/images/24-hours.png';
import PIPE from '../../assets/images/pipe.png';
import CAMERA from '../../assets/images/camera.png';
import CONSULT from '../../assets/images/brainstorming.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';



function Services() {
  return (
    <section id="our-services">
       <div className="services-heading">
            <div className="services-heading-text">
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
                <img alt="Kanalsanierung" src={PIPE} />
                <h3>Kanalsanierung</h3>
                <p>Unsere Kanalsanierungsdienste bieten effiziente Lösungen zur Reparatur und Instandhaltung von Abwasserleitungen.</p>             
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box2">
                <img alt="Kanalreinigung" src={LEAK} />
                <h3>Kanalreinigung</h3>
                <p>Durch regelmässige Reinigung der Abwasserleitungen können Verstopfungen und somit kostspielige Grabarbeiten vermieden werden.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box3">
                <img alt="Rohrunterhalt" src={LABOR} />
                <h3>Rohrunterhalt</h3>
                <p>Grabungslose Kanalreparatur, z.B. Rohrauskleidung oder Rohrsprengung, minimiert Ausgrabungen und Störungen.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box4">
                <img alt="Kanal-TV Aufnahme" src={CAMERA} />
                <h3>Kanal-TV Aufnahme</h3>
                <p>Wir erfassen Ihre Liegenschaftsentwässerungs-anlage mit der neusten Kameratechnik und erstellen Ihnen die genauen Pläne, sodass Sie wissen wie der Zustand ist.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box5">
                <img alt="Beratung" src={CONSULT} />
                <h3>Beratung</h3>
                <p>Unsere Beratungsservices bieten maßgeschneiderte Lösungen und fundierte Fachkenntnisse, um Sie bei der Optimierung Ihrer Kanalisation zu unterstützen.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box6">
                <img alt="Schachtsanierung" src={SEWER} />
                <h3>Schachtsanierung</h3>
                <p>Unsere Schachtsanierung optimiert die Funktionalität Ihrer Kanalzugänge, für ein sicheres und zuverlässiges Abwassersystem.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="service-box s-box7">
                <img alt="Notfalleinsatz" src={EMERGENCY} />
                <h3>Notfalleinsatz</h3>
                <p>Unser Notfalleinsatzteam steht Ihnen rund um die Uhr zur Verfügung, um schnelle und effektive Lösungen für akute Abwasserprobleme zu bieten.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Services;