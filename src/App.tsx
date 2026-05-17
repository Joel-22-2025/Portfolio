import Accueil from './Pages/Accueil'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './Pages/Apropos'
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import Competences from './Pages/Competences';
import Card from './Pages/Card';

function App() {

  return (
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
           <section id='contact'>
            <Contact/>
           </section>
           <section id='footer'>
            <Footer/>
           </section>
              
              
               
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
  )
}

export default App
