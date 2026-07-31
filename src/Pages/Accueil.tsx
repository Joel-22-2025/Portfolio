import photo from '../assets/photo.png'
import { Typewriter } from "react-simple-typewriter";


const Accueil = () => {
    return ( 
        <>
            <div className='relative z-10 font-poppins  flex justify-center  min-h-screen flex-wrap bg-[#F8FAFC] py-10' >
                <div className="flex flex-col-reverse md:flex-row w-full gap-10 items-center max-w-6xl md:gap-50" >
                    <div className="text-center md:text-left">
                    <h1 className="font-extrabold font-poppins text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
                    BIENVENUE SUR MON <br />
                    <span
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
                        >
                        <Typewriter
                            words={["PORTFOLIO"]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <span className="inline-block animate-bounce">🎉</span>
                    </h1>

                    <p className="font-inter text-base sm:text-lg md:text-xl my-6 text-gray-700 max-w-xl">
                    Je suis un développeur passionné par la création d'applications  web innovantes.
                    </p>


                    <a
                        href="#contact"
                        className="bg-blue-700 hover:bg-[#0D1730] text-white font-bold py-2 px-4 rounded"
                    >
                        Me contacter
                    </a>
                </div>

                <div data-aos="fade-right" className="shrink-0 relative"
                                    >
                    {/* Decorative frame offset */}
                    <div className="absolute -inset-3 rounded-3xl border-2 border-[#3E6FF4]/30 -rotate-3" />
                    <img
                        src={photo}
                        alt="Photo de profil"
                        className="relative w-72 md:w-96 lg:w-[420px] rounded-3xl object-cover shadow-2xl border-4 border-white"
                    />
                    {/* Badge flottant */}
                    <div className="absolute -bottom-5 -right-5 bg-[#3E6FF4] text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                        Développeur Full Stack
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Accueil;