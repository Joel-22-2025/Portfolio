import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import photo2 from "../assets/photo2.png";

const Apropos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="apropos"
      className="font-poppins relative min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#e8eeff] py-24 px-6 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3E6FF4]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3E6FF4]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Section title */}
      <div className="text-center mb-16">
        <p className="text-[#3E6FF4] font-semibold tracking-widest uppercase text-sm mb-2">
          Qui suis-je ?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0D1730]">
          À propos
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-[#3E6FF4] rounded-full" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Image */}
        <div
          data-aos="fade-right"
          className="shrink-0 relative"
        >
          {/* Decorative frame offset */}
          <div className="absolute -inset-3 rounded-3xl border-2 border-[#3E6FF4]/30 -rotate-3" />
          <img
            src={photo2}
            alt="Photo de profil"
            className="relative w-72 md:w-96 lg:w-[420px] rounded-3xl object-cover shadow-2xl border-4 border-white"
          />
          {/* Badge flottant */}
          <div className="absolute -bottom-5 -right-5 bg-[#3E6FF4] text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
            Développeur Full Stack
          </div>
        </div>

        {/* Text content */}
        <div data-aos="fade-left" className="flex flex-col gap-6 max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0D1730] leading-snug">
            Passionné par le code,<br />
            <span className="text-[#3E6FF4]">orienté solutions.</span>
          </h3>

          <div className="flex flex-col gap-4 text-[#3a3a3a] text-base leading-relaxed">
            <p>
              Je suis un <strong>développeur web et mobile</strong> passionné par
              la création d'applications modernes, performantes et intuitives.
              Curieux et constamment en quête d'apprentissage, j'aime transformer
              des idées en solutions concrètes à travers le code.
            </p>
            <p>
              Spécialisé dans des technologies modernes comme{" "}
              <strong>React, Tailwind CSS, PHP, Laravel</strong> et{" "}
              <strong>JavaScript</strong>, je travaille sur des projets variés :
              applications de gestion, plateformes web dynamiques et responsives.
            </p>
            <p>
              Au-delà du développement, je m'intéresse à{" "}
              <strong>l'intelligence artificielle</strong>, à la{" "}
              <strong>cybersécurité</strong> et à l'<strong>UX</strong> afin de
              concevoir des applications utiles, sécurisées et agréables.
            </p>
            <p>
              Mon objectif : évoluer en tant que développeur full stack, relever
              de nouveaux défis techniques et participer à des projets innovants à
              fort impact.
            </p>
          </div>

          {/* Skills chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["React", "Tailwind CSS", "Laravel", "PHP", "JavaScript", "UI/UX"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-[#3E6FF4]/10 text-[#3E6FF4] text-xs font-semibold px-3 py-1 rounded-full border border-[#3E6FF4]/20"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#3E6FF4] hover:bg-[#2a55d4] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-[#3E6FF4]/40 hover:shadow-xl hover:-translate-y-0.5"
            >
              Me contacter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;