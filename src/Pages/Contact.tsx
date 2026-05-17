import fb from '../assets/fb.png'
import appel from '../assets/appel.png'
import github from '../assets/github.png'
import whatsapp from '../assets/whatsapp.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Contact = () => {
     useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return ( <>

        <div className="min-h-screen  justify-center py-10 pt-25 ">
            <h1 className="text-center font-bold text-3xl text-blue-700 underline ">Contacts</h1>

            <div className="flex flex-col md:flex-row justify-center items-center">

                <div className='flex md:py-50 md:ml-10 py-10 flex-col bg-blue-50 shadow-2xl rounded-4xl gap-2 justify-center items-center  '>
                    <p className='text-center '>Envoyé moi un message si vous en avez, je suis là et prêt pour discuter avec vous d'un nouveau projet</p><br />
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-center" className='flex items-center  '>
                        <img src={appel} alt="" className='w-10' />
                        <p><span className='font-bold ml-3'>Appel: </span> 0146095797</p>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-center" className='flex items-center'>
                        <img src={whatsapp} alt="" className='w-10' />
                        <p><span className='font-bold ml-3'>Whatsapp: </span> 0146095797</p>
                    </div>
                    <div data-aos="fade-up"  className='flex  items-center'>
                       <img src={fb} alt="" className='w-10' />
                       <p><span className='font-bold ml-3'>Facebook: </span> JoelFenou</p>
                    </div>
                    <div data-aos="fade-up"  className='flex  items-center '>
                        <img src={github} alt="" className='w-10' />
                        <p><span className='font-bold ml-3'> GitHub: </span>Joel-22-25</p>
                    </div>
                </div>
                <div  className='flex flex-col  justify-center items-center md:p-20 p-10 rounded-2xl '>
                    <svg 
                        viewBox="0 0 200 200" 
                        xmlns="http://www.w3.org/2000/svg"  
                        className="absolute w-72 md:w-[750px] opacity-20 -z-10">
                            
                        <path 
                            fill="#3E6FF4" 
                            d="M43.8,-52.9C56.9,-41.1,68,-27.5,69.6,-13C71.2,1.4,63.5,16.8,55.7,34.1C48,51.3,40.3,70.5,25.7,80C11,89.4,-10.6,89.1,-29.1,81.6C-47.5,74.1,-62.7,59.6,-73.7,41.9C-84.8,24.2,-91.6,3.4,-84.4,-11C-77.3,-25.5,-56.2,-33.6,-39.8,-44.9C-23.4,-56.1,-11.7,-70.5,1.8,-72.7C15.3,-74.8,30.6,-64.8,43.8,-52.9Z" 
                            transform="translate(100 100)" 
                        />
                    </svg>
                    <p className='text-center px-10'>Envoyé moi un message si vous en avez, je suis là et prêt pour discuter avec vous d'un nouveau projet</p><br />
                    <form action="" className='flex flex-col '>
                        <label htmlFor="" className='font-bold '>Identité:</label>
                        <input type="text" className='border-1 md:w-100' /><br />
                        <label htmlFor="" className='font-bold'>Objet:</label>
                        <input type="text" className='border-1 md:w-100' /><br />

                        <label htmlFor="" className='font-bold'>Message:</label>
                        <textarea name="" id=""  className='border-1'></textarea><br />
                        <a href="" className='bg-blue-700 p-2 rounded-2xl self-center text-white'>Envoyé</a>
                    </form>
                </div> 
            </div>
        </div>
        
    </> );
}
 
export default Contact;