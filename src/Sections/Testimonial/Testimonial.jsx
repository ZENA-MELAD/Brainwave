import React, { useRef, useEffect } from "react";
import Bg from "../../assets/Images/Testimonial/BG.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade , Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";
import Img1 from "../../assets/Images/Testimonial/Oval.png";
import Img2 from "../../assets/Images/Testimonial/person-1.jpeg";
import Img3 from "../../assets/Images/Testimonial/person-2.jpeg";
const Testimonial = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiperRef.current.swiper.autoplay.start();
          } else {
            swiperRef.current.swiper.autoplay.stop();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }
  }, []);

  return (
    <div
      className="w-full py-14  mt-8 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat  lg:py-16"
      style={{ backgroundImage: `url(${Bg})`}}
    >
      <h2 className="font-questrial text-sm font-bold tracking-wider text-green-400 uppercase">
        testimonial
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade , Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="w-full testimonial-swiper pb-10"
      >
        <SwiperSlide>
          <TestimonialCard
            image={Img1}
            name="Ian Klein"
            profession="Digital Marketer"
            opinion="Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Img2}
            name="Jane Doe"
            profession=" web developer"
            opinion="Better than all the rest. I’d recommend this product to beginners and advanced users,Simply the best."
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            image={Img3}
            name="John Smith"
            profession="content writer"
            opinion="Simply the best.Better than all the rest I’d recommend this product to beginners and advanced users."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
