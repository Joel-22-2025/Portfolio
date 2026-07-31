//  import { NavLink } from "react-router-dom"; 
//  const Navbar = () => {
//     return ( 
//         <>
//             <div>
//                <nav>
//                   <ul className="flex gap-10 w-full fixed h-15 justify-center items-center  font-bold bg-white  border-gray-300 shadow-2xl text-black">
//                       <li className="mr-150"><NavLink to="/accueil">Accueil</NavLink></li>
//                       <li className=""><NavLink to="/apropos">À propos</NavLink></li>
//                       <li className=""><NavLink to="/competences">Competences</NavLink></li>
//                     <li className=""><NavLink to="/contact">Contact</NavLink></li>
//                      <li className=""><NavLink to="/projet">Projet</NavLink></li>
//                  </ul>
//               </nav>
//           </div>
//       </>
//      );
// }
 
// export default Navbar;
import { useState } from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('accueil');

    const linkClass = (section: string) =>
        `hover:text-[#3E6FF4] ${activeSection === section ? 'text-[#3E6FF4]' : 'text-[#0F172A]'}`;

    return (
        <>
            <nav className="font-poppins fixed top-0 left-0 w-full bg-white shadow-lg z-50">

                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-[#0D1730] md:ml-10">
                        Mon portfolio
                    </h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10 font-semibold">

                        <li>
                            <a
                                href="#accueil"
                                onClick={() => setActiveSection('accueil')}
                                className={linkClass('accueil')}
                            >
                                Accueil
                            </a>
                        </li>

                        <li>
                            <a
                                href="#apropos"
                                onClick={() => setActiveSection('apropos')}
                                className={linkClass('apropos')}
                            >
                                À propos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#competences"
                                onClick={() => setActiveSection('competences')}
                                className={linkClass('competences')}
                            >
                                Compétences
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projets"
                                onClick={() => setActiveSection('projets')}
                                className={linkClass('projets')}
                            >
                                Projet
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => setActiveSection('contact')}
                                className={linkClass('contact')}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-3xl font-bold text-[#0F172A]"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}
                {
                    open && (
                        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-lg font-semibold">

                            <li>
                                <a
                                    href="#accueil"
                                    onClick={() => {
                                        setActiveSection('accueil');
                                        setOpen(false);
                                    }}
                                    className={linkClass('accueil')}
                                >
                                    Accueil
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#apropos"
                                    onClick={() => {
                                        setActiveSection('apropos');
                                        setOpen(false);
                                    }}
                                    className={linkClass('apropos')}
                                >
                                    À propos
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#competences"
                                    onClick={() => {
                                        setActiveSection('competences');
                                        setOpen(false);
                                    }}
                                    className={linkClass('competences')}
                                >
                                    Compétences
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projets"
                                    onClick={() => {
                                        setActiveSection('projets');
                                        setOpen(false);
                                    }}
                                    className={linkClass('projets')}
                                >
                                    Projet
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => {
                                        setActiveSection('contact');
                                        setOpen(false);
                                    }}
                                    className={linkClass('contact')}
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    )
                }

            </nav>
        </>
    );
}

export default Navbar;



// quelle sont les commandes pour installer ts particule v4

// + Thought: 1.3s

// npm install @tsparticles/react @tsparticles/slim

// Pour une installation plus complète (avec tous les plugins) :

// npm install @tsparticles/react @tsparticles/full