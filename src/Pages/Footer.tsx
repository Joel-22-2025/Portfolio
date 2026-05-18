import {
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
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

  return (
    <>
      {/* Wave */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-mb-1"
      >
        <path
          fill="#f0f4ff"
          fillOpacity="1"
          d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,202.7C840,213,960,203,1080,181.3C1200,160,1320,128,1380,112L1440,96L1440,320L0,320Z"
        ></path>
      </svg> */}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#f0f4ff] via-white to-[#eaf0ff] font-poppins text-[#0D1730]">

        <div className="max-w-7xl mx-auto px-6 py-16 md:pt-30">

          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div>
              <h1 className="text-3xl font-bold text-[#3E6FF4] mb-5">
                Joel.dev
              </h1>

              <p className="text-gray-600 leading-7">
                Développeur web passionné par la création
                d’interfaces modernes, performantes et élégantes.
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
                  <span>+229 01 97 09 57 97</span>
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