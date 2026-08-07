import food from '../assets/food.png';
import eleves from '../assets/eleves.PNG';
import signal from '../assets/signal.PNG';
import maman from '../assets/maman.PNG';
import contact from '../assets/contact.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const projects = [
  {
    img: food,
    title: "Site pour restaurant",
    description: "Plateforme de commande en ligne 100% fonctionnelle, conçue pour un restaurant local avec une UI moderne et responsive.",
    link: "https://dayane-food.vercel.app/",
    tags: ["HTML","CSS","JavaScript", "Vercel"],
    category: "Web App",
    delay: 0,
  },
  {
    img: eleves,
    title: "Gestion des élèves",
    description: "Application web de gestion scolaire développée avec React et une API Laravel, actuellement en production.",
    link: "",
    tags: ["React", "Laravel", "API"],
    category: "Full Stack",
    delay: 100,
  },
  {
    img: signal,
    title: "Application de signalisation",
    description: "Outil de signalement d'urgences développé avec React, disponible en production sur Vercel.",
    link: "https://signal-urgente.vercel.app/",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Web App",
    delay: 200,
  },
  {
    img: maman,
    title: "Agenda du médecin",
    description: "Agenda pour connaitre les jours libres ainsi que les jours de travail des médecins a partir de leurs ordres de services.",
    link: "https://planning-liard-rho.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "PWA"],
    category: "Interface",
    delay: 300,
  },
  {
    img: contact,
    title: "Gestion de contacts",
    description: "Application de gestion de contacts réalisée ave NEXT.js, offrant une interface moderne et réactive pour la gestion des informations personnelles.",
    link: "https://contact-book-bodjrenou-joels-projects.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Interface",
    delay: 300,
  },
  
];

// categoryColor was removed because it's currently unused. Re-add if you enable the category badge.

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="projets"
      className="relative z-10 font-poppins relative min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#eaf0ff] py-24 px-6 overflow-hidden"
    >
      {/* ── Decorative blobs ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E6FF4]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3E6FF4]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div data-aos="fade-down" className="text-center mb-5">
          <p className="text-[#3E6FF4] font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Ce que j'ai construit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1730]">
            Mes Projets
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#3E6FF4] rounded-full" />
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center text-gray-500 max-w-xl mx-auto mb-16 text-sm md:text-base leading-relaxed"
        >
          Voici une sélection de projets récents — chacun représente un défi concret
          résolu avec des technologies modernes.
        </p>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            return (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={project.delay}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2
                           transition-all duration-400 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#0D1730]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#0D1730] font-bold text-sm px-5 py-2 rounded-full
                                   hover:bg-[#3E6FF4] hover:text-white transition-colors duration-200 shadow-lg"
                      >
                        Voir le projet →
                      </a>
                    )}
                  </div>
                  {/* Category badge */}
                  {/* <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm ${cat.bg} ${cat.text} border border-white/20`}>
                    {project.category}
                  </span> */}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="font-bold text-[#0D1730] text-lg leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#3E6FF4]/8 text-[#3E6FF4] text-xs font-semibold px-3 py-1 rounded-full "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 self-start inline-flex items-center gap-2 text-sm font-semibold text-[#3E6FF4]
                                 hover:text-[#0D1730] transition-colors duration-200 group/link"
                    >
                      Visiter le site
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="mt-3 self-start text-xs text-gray-400 italic">
                      Accès privé / en production
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom note ── */}
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            D'autres projets sont en cours de développement...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;