import {
  FaGithub,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";
const Footer = () => {
    const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/",
    },

    // {
    //   icon: <FaLinkedin />,
    //   link: "https://linkedin.com/",
    // },

    {
      icon: <FaFacebook />,
      link: "https://facebook.com/",
    },

    // {
    //   icon: <FaInstagram />,
    //   link: "https://instagram.com/",
    // },
    {
      icon: <FaWhatsapp />,
      link: "https://whatsapp.com/",
    },
  ];
    return ( <>
    {/* <div className="flex gap-6 text-3xl">

    </div> */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320">
            <path fill="#0D1730" 
                fill-opacity="1" 
                d="M0,0L48,48C96,96,192,192,288,197.3C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
        <div className=" bg-[#0D1730] text-white">
            {/* #0D1730  #0f172a*/}
            <div className="flex flex-col md:flex-row justify-center text-center md:gap-40 pb-20 gap-10">
            
                <div>
                    <p className="text-[#155dfc] text-1xl font-bold underline">Mon portfolio</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-[#155dfc] text-1xl font-bold underline">Lien utiles</p>
                    <a href="#accueil" className="hover:text-[#155dfc]">Accueil</a>
                    <a href="#apropos" className="hover:text-[#155dfc]">Apropos</a>
                    <a href="#competences" className="hover:text-[#155dfc]">Compétences</a>
                    <a href="#projets" className="hover:text-[#155dfc]">Mes Projet</a>
                    <a href="#contact" className="hover:text-[#155dfc]">Mes Contact</a>
                </div>
                <div>
                    <p className="text-[#155dfc] text-1xl font-bold underline">Contact Infos</p>
                    <div>fenoujoelbodjrenou@gmail.com</div>
                    <div>+229 0197095797</div>
                </div>
                <div>
                    <p className="text-[#155dfc] text-1xl font-bold underline">Réseaux sociaux</p>
                    <div className="flex gap-2 items-center justify-center">
                        {
                        socials.map((social, index) => (

                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            w-10 h-20 flex items-center 
                            text-[#3E6FF4]
                            hover:text-white
                          
                            hover:scale-125
                            transition-all
                            duration-300
                            
                            "
                        >
                            {social.icon}
                        </a>

                        ))
                    }
                    </div>
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-instagram'></i>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-linkedin'></i>
                    <i className='bx bxl-whatsapp'></i>
                    
                    
                </div>
                
           </div>
           
           <hr />
           <p className="py-7 text-center">© Fènou Mahuton Joël BODJRENOU. All rigths reserved</p>
        </div>
    </> );
}
 
export default Footer;






