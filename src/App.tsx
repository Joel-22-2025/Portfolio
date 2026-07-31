import Accueil from './Pages/Accueil'
import './App.css'
import whatsappIcon from './assets/whatshapp.png'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './Pages/Apropos'
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import Competences from './Pages/Competences';
import Card from './Pages/Card';
import { ToastProvider } from './components/ToastProvider';

function App() {

   return (
      <ToastProvider>
      <>
        {/* <button className="btn btn-primary bg-amber-400">DaisyUI OK</button>
        <button className="btn btn-success">Success</button> */}
  
          
       {/* <BrowserRouter> */}
           <Navbar />
           <section id='accueil'>
              <Accueil />
           </section>
           <section id='apropos'>
              <Apropos />  
           </section>
           <section id='competences'>
              <Competences /> 
           </section>
           <section id='projets'>
              <Card />
           </section>
            <section id='contact'   className="relative z-10  bg-[#0D1730] min-h-screen rounded-b-[100px] mb-[600px] md:mb-[500px] ">
             <Contact/>
            </section>
            <footer id='footer'  className="fixed bottom-0 left-0 w-full  z-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#eaf0ff]">
             <Footer/>
            </footer>
            <a
              href="https://wa.me/2290146095797"
              target="_blank"
              rel="noopener noreferrer"
            //   className="fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-105"
              className="fixed z-50 bottom-6 right-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-24 h-22"
              />
            </a>

              
              
               
              {/* <Projet /> */}
              
              

            
            {/* <Routes>
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/competences" element={<Competences />} />
              <Route path="/card" element={<Card />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Footer" element={<Footer />} />
            </Routes> 
      </BrowserRouter>  */}
      </>
      </ToastProvider>
  )
}

export default App
