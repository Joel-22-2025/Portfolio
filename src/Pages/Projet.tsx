import food from '../assets/food.png'
const Projet = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-screen bg-green-100">
            <h1 className="text-center font-bold text-3xl text-blue-700  ">Projets</h1>
            <p className="text-lg mt-10">Voici quelques-uns de mes projets récents :</p>

            <div className="flex justify-center items-center mt-5 gap-10 flex-wrap">
                <div className='border-amber-300 border-2 w-100 h-100 flex flex-col justify-center items-center gap-5 p-5 rounded-lg bg-white'>
                    <img src={food} alt="Food Project " width="500" height="300" />
                    <p>Projet 100% fonctionnel actuellement utilisé et disponnible sur <a href="https://dayane-food.vercel.app/" target="_blank" rel="noopener noreferrer">https://dayane-food.vercel.app/</a></p>
                </div>
                {/* <div className='border-amber-300 border-2 w-100 h-100 flex flex-col justify-center items-center gap-5 p-5 rounded-lg bg-white'>
                    <img src={food} alt="Food Project " width="500" height="300" />
                    <p>Projet 100% fonctionnel actuellement utilisé et disponnible sur <a href="https://dayane-food.vercel.app/" target="_blank" rel="noopener noreferrer">https://dayane-food.vercel.app/</a></p>
                </div>
                <div className='border-amber-300 border-2 w-100 h-100 flex flex-col justify-center items-center gap-5 p-5 rounded-lg bg-white'>
                    <img src={food} alt="Food Project " width="500" height="300" />
                    <p>Projet 100% fonctionnel actuellement utilisé et disponnible sur <a href="https://dayane-food.vercel.app/" target="_blank" rel="noopener noreferrer">https://dayane-food.vercel.app/</a></p>
                </div> */}
                {/* <div className='w-200'>
                    <img src={food} alt="Food Project " width="300" height="300" />
                    <p>Projet 100% fonctionnel actuellement utilisé et disponnible sur <a href="https://dayane-food.vercel.app/" target="_blank" rel="noopener noreferrer">https://dayane-food.vercel.app/</a></p>
                </div>  */}
            </div>
        </div>  
     );
}
 
export default Projet;