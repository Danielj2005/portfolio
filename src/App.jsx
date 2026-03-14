
import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { Section, SectionWithTitle, SectionCard } from "./components/Section"
import Footer from "./components/Footer"


function App() {
  
  const exp = [
    { id: 1, title: "5 Años", subtitle: "Full Stack PHP (PDO/MVC) & MySQL"},
    { id: 2, title: "+1 Año", subtitle: "Full Stack Python (Django/FastAPI) & Laravel"},
    { id: 3, title: "IA", subtitle: "Pandas & ML Models"},
    { id: 4, title: "Modern", subtitle: "React, Tailwind css, TS & Node.js"}
  ];

  const coreBackend = [
    { id: 1, text: "PHP (PDO/MVC)"},
    { id: 2, text: "MySQL"},
    { id: 3, text: "API / API REST"},
    { id: 4, text: "Role-Based Access Control (RBAC)"},
    { id: 5, text: "Multi-factor Authentication (MFA)"},
    { id: 6, text: "Security Knowledge-Based Authentication (KBA)"},
    { id: 7, text: "Scrapping"},
    { id: 8, text: "Javascript (AJAX / jQuery)"},
    { id: 9, text: "Bootstrap (Bootstrap Icons)"},
    { id:10, text: "PostgreSQL"}
  ];
  
  const auge = [
    { id: 1, text: "FastAPI"},
    { id: 2, text: "Django"},
    { id: 3, text: "Pandas"},
    { id: 4, text: "Machine Learning"},

  ];

  const modernWeb = [
    { id: 1, text: "React (Vite)"},
    { id: 2, text: "Node.js / Express"},
    { id: 3, text: "TypeScript"},
    { id: 4, text: "Tailwind CSS"},
    { id: 5, text: "Supabase"},
    { id: 6, text: "Vercel"},
    
  ];

  return (
    <>
      <NavBar />
      <Hero />

      <Section id="experience" classNames="bg-slate-800/50 py-12 border-y border-slate-800">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {
            exp.map((item) => (
              <div key={item.id}>
                  <p class="text-3xl font-bold text-white">{item.title}</p>
                  <p class="text-sm text-slate-500 italic">{item.subtitle}</p>
              </div>
            ))
          }
        </div>
      </Section>


      <SectionWithTitle
        id="stack" 
        classNames="py-20 px-5"
        title="Dominio Tecnológico"
        >
          <SectionCard 
            title="Core Backend (5 años)"
            colorTitle="text-blue-400"
            className="border-blue-500/20 text-left" 
            array={coreBackend}/>

          <SectionCard 
            title="+1 year with Python & AI (En auge)"
            colorTitle="text-yellow-400"
            className="border-yellow-500/20 text-left scale-105 shadow-xl shadow-yellow-500/5" 
            array={auge}/>

          <SectionCard 
            title="Modern Stack Web"
            colorTitle="text-emerald-400"
            className="border-emerald-500/20 text-left" 
            array={modernWeb}/>

      </SectionWithTitle>    



      <SectionWithTitle
        id="proyectos" 
        classNames="py-20 px-4 bg-slate-800/30"
        classNamesTitle="text-left "
        title="Proyectos Destacados"
        >
          <SectionCard 
            title="Core Backend (5 años)"
            colorTitle="text-blue-400"
            className="border-blue-500/20 text-left" 
            array={coreBackend}/>

      </SectionWithTitle>    


      <Footer />


    </>
  )
}

export default App
