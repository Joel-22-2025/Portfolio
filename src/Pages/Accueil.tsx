import photo from '../assets/photo.png'


const Accueil = () => {
    return ( 
        <>
            <div className='flex justify-center  min-h-screen flex-wrap bg-[#F8FAFC] py-10' >
                <div className="flex flex-col-reverse md:flex-row w-full gap-10 items-center max-w-6xl md:gap-50" >
                    <div className='text-center md:text-left '>
                        <h1 className='font-bold text-3xl md:text-5xl '>BIENVENUE SUR MON <br /> <span data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-blue-700'>PORTFOLIO</span> 🎉</h1>
                        <p className='text-2xl md:text-xl my-5'>Je suis un développeur passionné par la création  d'applications <br /> web innovantes.</p>
                        <a  href='#contact'   className='bg-blue-700 hover:bg-[#0D1730] text-white font-bold py-2 px-4 mt-100 rounded'> 
                           Me contacter
                        </a>
                    </div>
                    <div  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"  className='flex justify-center'>
                        <img src={photo} alt="Ma photo" className='object-cover w-52 md:w-100 sm:w-64 shadow-xl rounded-2xl border-2 border-blue-700' />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Accueil;