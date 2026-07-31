import {
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/",
    },
    {
      icon: <FaFacebook />,
      link: "https://facebook.com/",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://whatsapp.com/",
    },
  ];

  // Initialisation des particules
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Configuration des particules
  const particlesOptions = {
    //fullScreen obligatoire pour que les particules s'affichent correctement dans le footer seule
  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  background: {
    color: "transparent",
  },
    fpsLimit: 120,
    interactivity: {
      fullScreen: {
        enable: false,
      },
      events: {
        onHover: {
          enable: true,
          mode: "repulse" as const,
        },
        onClick: {
          enable: true,
          mode: "push" as const,
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: "#0052CC",
      },
      links: {
        color: "#0052CC",
        distance: 300,
        enable: true,
        opacity: 0.3,
        width: 2,
        triangles: {
          enable: false,
        },
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle" as const,
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
        },
      },
    },
    detectRetina: true,
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Footer avec particules en arrière-plan */}
      <footer className="relative bg-gradient-to-br from-[#f0f4ff] via-white to-[#eaf0ff] font-poppins text-[#0D1730] overflow-hidden ">
        
        {/* Conteneur des particules en arrière-plan */}
        {isMounted && (
          <ParticlesProvider init={particlesInit}>
            <div className="absolute inset-0 w-full h-full z-0">
              <Particles
                id="footer-particles"
                options={particlesOptions}
                className="w-full h-full"
                
              />
            </div>
          </ParticlesProvider>
        )}

        {/* Contenu du footer (au-dessus des particules) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:pt-30">
          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h1 className="text-3xl font-bold text-[#3E6FF4] mb-5">
                Joel.dev
              </h1>
              <p className="text-gray-600 leading-7">
                Développeur web passionné par la création
                d'interfaces modernes, performantes et élégantes.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h2 className="text-xl font-semibold mb-5 text-[#3E6FF4]">
                Navigation
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a
                    href="#accueil"
                    className="hover:text-[#3E6FF4] transition duration-300"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#apropos"
                    className="hover:text-[#3E6FF4] transition duration-300"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#competences"
                    className="hover:text-[#3E6FF4] transition duration-300"
                  >
                    Compétences
                  </a>
                </li>
                <li>
                  <a
                    href="#projets"
                    className="hover:text-[#3E6FF4] transition duration-300"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#3E6FF4] transition duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-5 text-[#3E6FF4]">
                Contact
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <span>fenoujoelbodjrenou@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>+229 01 46 09 57 97</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>Cotonou, Bénin</span>
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-xl font-semibold mb-5 text-[#3E6FF4]">
                Réseaux sociaux
              </h2>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-12 h-12
                      rounded-full
                      bg-white
                      shadow-md
                      flex items-center justify-center
                      text-xl
                      text-[#3E6FF4]
                      hover:bg-[#3E6FF4]
                      hover:text-white
                      hover:-translate-y-2
                      hover:shadow-xl
                      transition-all duration-300
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 mt-6 leading-7">
                Retrouvez-moi sur mes plateformes sociales
                pour suivre mes projets et collaborations.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 mt-14 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Fènou Mahuton Joël BODJRENOU — Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
