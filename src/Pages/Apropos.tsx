// import capture from '../assets/Capture.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import photo2 from '../assets/photo2.png'
const Apropos = () => {
     useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return ( 
    <>
        <div className="font-poppins flex flex-col justify-center  min-h-screen flex-wrap-reverse bg-[#FFFFFFB3] py-20  ">
            <h1 className="text-center font-bold text-3xl text-[#3E6FF4] pb-15 underline ">À propos</h1>
{/* 
            <div className=' flex flex-col justify-center items-c   enter md:mt-20 '> */}
            <div className='  '>
                <div className='flex flex-col md:flex-row sm:flex-row justify-center items-center gap-10 md:gap-30'>
                    <div data-aos="flip-left" className='' >
                        <img src={photo2} alt="" className='w-60 md:w-100 rounded-2xl border-4 border-[#3E6FF4]' />
                    </div>
                    <div data-aos="fade-up" className='flex flex-col justify-center text-center'  >
                        <h1 className='font-bold py-5 text-2xl '>Qui suis-je ?</h1>
                        <p className=' w-90 md:w-120 sm:w-90 text-justify px-4  '>

                            Je suis un développeur web et mobile passionné par la création d’applications modernes, performantes et intuitives. Curieux et constamment en quête d’apprentissage, j’aime transformer des idées en solutions concrètes à travers le code.

                            Spécialisé dans le développement avec des technologies modernes comme React, Tailwind CSS, PHP, Laravel et JavaScript, je travaille sur des projets variés allant des applications de gestion aux plateformes web dynamiques et responsives.

                            Au-delà du développement, je m’intéresse également à l’intelligence artificielle, à la cybersécurité et à l’expérience utilisateur afin de concevoir des applications à la fois utiles, sécurisées et agréables à utiliser.

                            Mon objectif est de continuer à évoluer en tant que développeur full stack, de relever de nouveaux défis techniques et de participer à des projets innovants ayant un réel impact.

                            Chaque projet représente pour moi une opportunité d’apprendre, de créer et d’améliorer mes compétences pour offrir des solutions toujours plus professionnelles et efficaces.
                        </p>
                
                        <a href="#contact" className='hover:bg-blue-700 self-center bg-[#0D1730] text-white font-bold py-2 px-4 mt-10 rounded'>
                            Me contacter
                        </a>
                    </div>
                </div>
            </div>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 320">
                <path 
                fill="#0099ff" 
                fill-opacity="1" 
                d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,170.7C672,160,768,192,864,218.7C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg> */}
        </div>
    </>
     );
}
 
export default Apropos;