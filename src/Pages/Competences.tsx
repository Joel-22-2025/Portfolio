import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import firebase from '../assets/firebase.png';
import laravel from '../assets/laravel.png';
import vercel from '../assets/vercel.png';
import wordpress from '../assets/wordpress.png';
import nextjs from '../assets/next.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  { name: "HTML5",       img: html },
  { name: "CSS3",        img: css },
  { name: "JavaScript",  img: js },
  { name: "Tailwind CSS",img: tailwind },
  { name: "Laravel",     img: laravel },
  { name: "Firebase",    img: firebase },
  { name: "Vercel",      img: vercel },
  { name: "Next.js",     img: nextjs },
  { name: "WordPress",   img: wordpress },
];

const Competences = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="competences"
      className="relative z-10 font-poppins min-h-screen bg-[#0D1730] py-24 px-6 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#3E6FF4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#3E6FF4]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div data-aos="fade-down" className="text-center mb-6">
          <p className="text-[#3E6FF4] font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Mon arsenal technique
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Compétences
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#3E6FF4] rounded-full" />
        </div>

        {/* ── Intro ── */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed text-sm md:text-base"
        >
          Des années de passion et de curiosité m'ont permis de maîtriser ces outils,
          de la conception à la mise en ligne de projets complets et performants.
        </p>

        {/* ── Carousel en deux rangées ── */}
        <div className="space-y-8">
          {/* Rangée 1 */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            className="overflow-hidden"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.name}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-[#3E6FF4]/50 transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10">
                    <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-white font-semibold text-sm text-center">{skill.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Rangée 2 (inverse sens) */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 0, reverseDirection: true, disableOnInteraction: false }}
            speed={3000}
            className="overflow-hidden"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill.name}>
                <div className="group bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4 hover:bg-white/10 hover:border-[#3E6FF4]/50 transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10">
                    <img src={skill.img} alt={skill.name} className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-white font-semibold text-sm text-center">{skill.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── Bottom CTA note ── */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Et bien plus encore — chaque projet est une nouvelle occasion d'apprendre.
          </p>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            {["React", "PHP", "MySQL", "Git", "Figma"].map((t) => (
              <span
                key={t}
                className="bg-[#3E6FF4]/10 border border-[#3E6FF4]/20 text-[#7aa0ff] text-xs font-semibold px-3 py-1 rounded-full"
              >
                + {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
