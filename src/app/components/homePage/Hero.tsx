"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    { id: 1, image: '/images/content/1.jpg' },
    { id: 2, image: '/images/content/2.jpg' },
    { id: 3, image: '/images/content/3.jpg' },
    { id: 4, image: '/images/content/4.jpg' },
  ];

  return (
    <section className="intro">
      <div className="intro__slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="intro__item">
                <div className="intro__image-container">
                  <Image
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="container">
                  <div className="intro__content">
                    <div className="title intro__title">
                      <p>Final Offer</p>
                    </div>
                    <div className="intro__text">
                      <p>
                        Up to <span>50%</span> sale for all furniture items!
                      </p>
                    </div>
                    <a className="btn btn--white" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="commitments">
        <div className="container">
          <ul className="commitments__inner d-flex jc-sb">
            <li className="commitments__item commitments__item--warranty">Two years warranty</li>
            <li className="commitments__item commitments__item--van">Free shipping</li>
            <li className="commitments__item commitments__item--return">Return policy in 30 days</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;