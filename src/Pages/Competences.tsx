import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import firebase from '../assets/firebase.png';
import laravel from '../assets/laravel.png';
import vercel from '../assets/vercel.png';
import wordpress from '../assets/wordpress.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const skills = [
  { name: "HTML5",       img: html,      level: 95, category: "Front-end" },
  { name: "CSS3",        img: css,       level: 88, category: "Front-end" },
  { name: "JavaScript",  img: js,        level: 82, category: "Front-end" },
  { name: "Tailwind CSS",img: tailwind,  level: 85, category: "Front-end" },
  { name: "Laravel",     img: laravel,   level: 78, category: "Back-end"  },
  { name: "Firebase",    img: firebase,  level: 72, category: "Back-end"  },
  { name: "Vercel",      img: vercel,    level: 80, category: "DevOps"    },
  { name: "WordPress",   img: wordpress, level: 75, category: "CMS"       },
];

// categoryColor was removed because it's currently unused. Re-add if you enable the category badge.

const Competences = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="competences"
      className="font-poppins relative min-h-screen bg-[#0D1730] py-24 px-6 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#3E6FF4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#3E6FF4]/10 rounded-full blur-3xl" />
        {/* Grid dots pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
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

        {/* ── Skill cards grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={`${i * 60}`}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4
                         hover:bg-white/10 hover:border-[#3E6FF4]/50 hover:-translate-y-1
                         transition-all duration-300 cursor-default"
            >
              {/* Category badge */}
              {/* <span
                className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: `${categoryColor[skill.category]}22`,
                  color: categoryColor[skill.category],
                  border: `1px solid ${categoryColor[skill.category]}44`,
                }}
              >
                {skill.category}
              </span> */}

              {/* Logo */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Name */}
              <p className="text-white font-semibold text-sm text-center leading-tight">
                {skill.name}
              </p>

              {/* Progress bar */}
              {/* <div className="w-full">
                <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                  <span>Maîtrise</span>
                  <span className="text-[#3E6FF4] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#3E6FF4] to-[#7aa0ff] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div> */}
            </div>
          ))}
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