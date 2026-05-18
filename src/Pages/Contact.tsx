import fb from '../assets/fb.png';
import appel from '../assets/appel.png';
import github from '../assets/github.png';
import whatsapp from '../assets/whatsapp.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import { useToast } from '../components/ToastProvider';

const socials = [
  {
    img: appel,
    label: "Téléphone",
    value: "+229 01 46 09 57 97",
    href: "tel:+2290146095797",
    color: "#3E6FF4",
  },
  {
    img: whatsapp,
    label: "WhatsApp",
    value: "+229 01 46 09 57 97",
    href: "https://wa.me/2290146095797",
    color: "#25D366",
  },
  {
    img: fb,
    label: "Facebook",
    value: "JoelFenou",
    href: "https://facebook.com/JoelFenou",
    color: "#1877F2",
  },
  {
    img: github,
    label: "GitHub",
    value: "Joel-22-25",
    href: "https://github.com/Joel-22-25",
    color: "#e2e8f0",
  },
];

const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);



  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    objet: "",
    msg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "fc8dfaac-3181-49d3-b0f7-de7f7235486d",
          name: formData.name,
          subject: formData.objet,
          message: formData.msg,
        }),
      });

      const result = await response.json();
      if (result.success) {
        showToast({ type: "success", message: "Message envoyé avec succès !" });
        setFormData({ name: "", objet: "", msg: "" });
      } else {
        showToast({ type: "error", message: "Erreur lors de l’envoi du message." });
      }
    } catch (err) {
      showToast({ type: "error", message: "Erreur réseau lors de l'envoi." });
    }
  };

  return (
    <section
      id="contact"
      className="font-poppins relative min-h-screen bg-[#0D1730] py-24 px-6 overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#3E6FF4]/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots2" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div data-aos="fade-down" className="text-center mb-16">
          <p className="text-[#3E6FF4] font-semibold tracking-[0.25em] uppercase text-xs mb-3">
            Travaillons ensemble
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Me contacter
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-[#3E6FF4] rounded-full" />
          <p className="mt-6 text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Un projet en tête ? Une question ? Je suis disponible et prêt à
            collaborer. Écrivez-moi, je réponds rapidement.
          </p>
        </div>

        {/* ── Two columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── Left: Social links ── */}
          <div data-aos="fade-right" className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-xl mb-2">
              Retrouvez-moi sur
            </h3>

            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-right"
                data-aos-delay={i * 80}
                className="group flex items-center gap-5 bg-white/5    px-5 py-4
                           hover:bg-white/10 hover:border-white/20 hover:translate-x-1
                           transition-all duration-300"
              >
                {/* Icon container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}33` }}
                >
                  <img src={s.img} alt={s.label} className="w-6 h-6 object-contain" />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    {s.label}
                  </span>
                  <span className="text-white font-semibold text-sm mt-0.5">
                    {s.value}
                  </span>
                </div>

                {/* Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-auto text-gray-600 group-hover:text-[#3E6FF4] group-hover:translate-x-1 transition-all duration-200"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}

            {/* Availability badge */}
            <div className="mt-4 flex items-center gap-3 bg-emerald-500/10 rounded-2xl px-5 py-4">
              {/* <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span> */}
              {/* <p className="text-emerald-400 text-sm font-medium">
                Disponible pour de nouvelles opportunités
              </p> */}
              <p className="text-emerald-400 text-sm font-medium">
                Disponible pour de nouvelles opportunités
              </p> 
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            data-aos="fade-left"
            className="bg-white/5 border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-white font-bold text-xl mb-6">
              Envoyez un message
            </h3>

            {/* <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Votre nom
                </label>
                <input
                  type="text"
                  placeholder="ANANOUFOU Frédit"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`bg-white/5  rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                              outline-none transition-all duration-200
                              ${focused === "name" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                />
              </div>

         
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Objet
                </label>
                <input
                  type="text"
                  placeholder="Proposition de projet"
                  onFocus={() => setFocused("objet")}
                  onBlur={() => setFocused(null)}
                  className={`bg-white/5  rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                              outline-none transition-all duration-200
                              ${focused === "objet" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                />
              </div>

  
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet ou votre question..."
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  className={`bg-white/5  rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                              outline-none resize-none transition-all duration-200
                              ${focused === "msg" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                />
              </div>

            
              <button
                type="button"
                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#3E6FF4] hover:bg-[#2a55d4]
                           text-white font-bold py-3.5 px-8 rounded-xl shadow-lg
                           hover:shadow-[#3E6FF4]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Envoyer le message
              </button>
            </div> */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    Votre nom
                    </label>
                    <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ANANOUFOU Frédit"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`bg-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                                outline-none transition-all duration-200
                                ${focused === "name" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                    />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    Objet
                    </label>
                    <input
                    type="text"
                    name="objet"
                    required
                    value={formData.objet}
                    onChange={handleChange}
                    placeholder="Proposition de projet"
                    onFocus={() => setFocused("objet")}
                    onBlur={() => setFocused(null)}
                    className={`bg-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                                outline-none transition-all duration-200
                                ${focused === "objet" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-xs font-semibold uppercase tracking-widest">
                    Message
                    </label>
                    <textarea
                    rows={5}
                    name="msg"
                    required
                    value={formData.msg}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre question..."
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                    className={`bg-white/5 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600
                                outline-none resize-none transition-all duration-200
                                ${focused === "msg" ? "border-[#3E6FF4] bg-[#3E6FF4]/5" : "border-white/10"}`}
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-[#3E6FF4] hover:bg-[#2a55d4]
                            text-white font-bold py-3.5 px-8 rounded-xl shadow-lg
                            hover:shadow-[#3E6FF4]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                    Envoyer le message
                </button>
            </form>
          </div>
        </div>

        {/* ── Footer note ── */}
        {/* <div data-aos="fade-up" data-aos-delay="200" className="mt-16 text-center border-t border-white/5 pt-10">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} · Développé avec ❤️ par <span className="text-[#3E6FF4] font-semibold">Joël Fenou</span>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;