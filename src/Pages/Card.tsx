import food from '../assets/food.png'
import eleves from '../assets/eleves.PNG'
import signal from '../assets/signal.PNG'
import maman from '../assets/maman.PNG'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Card = () => {
     useEffect(() => {
            AOS.init({
                duration: 1000,
            });
        }, []);
    return ( <>
    {/* <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">

        
        <div className="w-50 p-2 bg-white rounded-xl  hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
             <img className="h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">Heading</h2>
                <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
            </div>
            <div className="m-2">
                <a role='button' href='#' className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
            </div> 
          
        </div>


        
        
    </div> */}
    <div className='font-poppins h-min-screen py-20 bg-[#F8FAFC]'>
        <h1 className='font-bold text-center text-3xl text-blue-700 pb-7 underline' >Mes Projets</h1>
        <p className='text-center pb-4'>Voici quelques-uns de mes projets récents :</p>
        <div className=' justify-center items-center flex flex-wrap gap-10'>
            <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine"  className='bg-blue-50 w-80 h-105 rounded-2xl shadow-2xl ' >
                <img className='object-cover' src={food} alt="" />
                <div className='p-4 justify-center  flex flex-col gap-7'>
                    <h1 className='font-bold  text-center'>Site pour restaurant</h1>
                    <p className='text-justify'>Projet 100% fonctionnel actuellement utilisé et disponnible sur https://dayane-food.vercel.app/</p>
                    <a href="https://dayane-food.vercel.app/" className='py-2 px-3 rounded-xl self-center bg-blue-900 text-blue-50 '>Visiter</a>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" className='bg-blue-50 w-80 h-105 rounded-2xl shadow-2xl' >
                <img className='object-cover' src={eleves} alt="" />
                <div className='p-4 flex flex-col  gap-7'>
                    <h1 className='font-bold  text-center'>Gestion des élèves</h1>
                    <p className='text-justify'>Application Web dévellopé avec React & un api Laravel 100% fonctionnel et actuellement utilisé.</p>
                    <a href="" className=' py-2 px-3 rounded-xl self-center bg-blue-900 text-blue-50'>Visiter</a>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" className='bg-blue-50 w-80 h-105 rounded-2xl shadow-2xl' >
                <img className='object-cover' src={signal} alt="" />
                <div className='p-4 flex flex-col gap-4'>
                    <h1 className='font-bold  text-center'>Application web de signalisation</h1>
                    <p className='text-justify'>Développé avec react et fontend, cette aplication  elle est actuellement fonctionnel utilisé et disponnible sur https://signal-urgente.vercel.app/</p>
                    <a href="https://signal-urgente.vercel.app/" className='py-2 px-3 rounded-xl self-center bg-blue-900 text-blue-50'>Visiter</a>
                </div>
            </div>

            <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" className='bg-blue-50 w-80 h-105 rounded-2xl shadow-2xl' >
                <img className='object-cover' src={maman} alt="" />
                <div className='p-4 flex flex-col gap-4'>
                    <h1 className='font-bold  text-center'>Agenda du medecin</h1>
                    <p className='text-justify'>Conçu pour une infimière et realisé avec Js, html et css, elle fonctionnel et est disponnible sur https://maman-three.vercel.app/</p>
                    <a href="https://maman-three.vercel.app/" className='py-2 px-3 rounded-xl self-center bg-blue-900 text-blue-50'>Visiter</a>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="50" data-aos-easing="ease-in-sine" className='bg-blue-50 w-80 h-105 rounded-2xl shadow-2xl' >
                <img className='object-cover' src={food} alt="" />
                <div className='p-4 flex flex-col gap-7'>
                    <h1 className='font-bold  text-center'>Site pour restaurant</h1>
                    <p className='text-justify'>Projet 100% fonctionnel actuellement utilisé et disponnible sur https://dayane-food.vercel.app/</p>
                    <a href="https://dayane-food.vercel.app/" className='py-2 px-3 rounded-xl self-center bg-blue-900 text-blue-50'>Visiter</a>
                </div>
            </div>
        </div>
    </div>
    





    </> );
}
 
export default Card;