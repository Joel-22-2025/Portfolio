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

const Competences = () => {
         useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return ( 
    <>
        {/* <div className="flex flex-col justify-center  h-screen flex-wrap-reverse bg-amber-100 '  "> */}
        <div className=" justify-center  min-h-screen flex-wrap-reverse">

            <h1 className="text-center font-bold pt-10 text-3xl text-blue-700 underline ">Compétences</h1>
            
            <div className='flex flex-col md:flex-row justify-center items-center mt-20 px-7 gap-7'>
                <div className=' md:w-1/2 md:p-15 '>
                    <p className=' w-full p-15 text-justify bg-[#0D1730] text-white shadow-2xl'>Ces quelques années de passion et de curiosité m'on poussé à connaitre ces quelques outils dont je m'en suis servir de la création jusqu'a la mise en ligne des différentes projet que j'ai eu à réalisé. Ces outils sont entre autres html, css, React, PHP, firebase, vercel, wordpress, tailwind css, api laravel...  </p>
                    {/* <img src={comp} alt="" width="500" height="100"/> */}
                </div>
                <div className='flex  flex-wrap justify-center items-center md:w-1/2  '>       
                    <div data-aos="zoom-in"><img src={html} alt="" className='object-cover md:w-30 w-25' /></div>
                    <div data-aos="zoom-in"><img src={css} alt="" className='object-cover md:w-51  w-41' /></div>
                    <div data-aos="zoom-in"><img src={js} alt="" className='object-cover md:w-30  w-25' /></div>
                    <div data-aos="zoom-in"><img src={firebase} alt="" className='object-cover md:w-30 md:ml-3  w-25' /></div>
                    <div data-aos="zoom-in"><img src={laravel} alt="" className='object-cover md:w-25 md:ml-4 md:mt-10 w-25' /></div>
                    <div data-aos="zoom-in"><img src={vercel} alt="" className='object-cover md:w-40 md:ml-7 md:mt-10 w-25'/></div>
                    <div data-aos="zoom-in"><img src={wordpress} alt="" className='object-cover md:w-30 md:ml-4 md:mt-10 w-25' /></div>
                    <div data-aos="zoom-in"><img src={tailwind} alt="" className='object-cover md:w-30 md:ml-4 md:mt-10 w-25' /></div>
                </div>
            </div>       
        </div>
    </>
    );
}
 
export default Competences;