// css styles
import './App.css'
// components
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import { Section, SectionWithTitle } from "./components/Section"
import { Card, CardProject } from "./components/Card"
import Badge from "./components/Badge"
import Footer from "./components/Footer"
// data
import data from "./data/data.json"

function App() {
  
  return (
    <>
      <NavBar />
      <Hero />

      <Section id="experience" classNames="bg-slate-800/50 py-12 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {
            data.exp.map((item) => (
              <div key={item.id}>
                  <p className="text-3xl font-bold text-white">{item.title}</p>
                  <p className="text-sm text-slate-500 italic">{item.subtitle}</p>
              </div>
            ))
          }
        </div>
      </Section>

      <SectionWithTitle
        idSection="stack" 
        classSection="py-20 px-5 "
        title="Dominio Tecnológico">

          <Card 
            title="Full Stack Web (5 years)"
            titleClass="text-xl font-semibold mb-6 text-blue-400 text-center"
            cardClass="bg-slate-800 p-6 rounded-xl border border-blue-500/20" >

              <Badge 
                badgeClass="bg-slate-900 px-3 py-1 rounded-md text-xs border border-slate-700" 
                array={data.coreBackend} />

          </Card>

          <Card 
            title="Learning Modern Stack Web, Python & AI"
            titleClass="text-xl font-semibold mb-6 text-yellow-400 text-center"
            cardClass="bg-slate-800 p-6 rounded-xl border border-yellow-500/20 text-left scale-105 shadow-xl shadow-yellow-500/5">
            
              <Badge 
                badgeClass="bg-slate-900 px-3 py-1 rounded-md text-xs border border-slate-700" 
                array={data.auge} />

          </Card>

          <Card 
            title="Modern Stack Web"
            titleClass="text-xl font-semibold mb-6 text-emerald-400 text-center"
            cardClass="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 text-left">

              <Badge 
                badgeClass="bg-slate-900 px-3 py-1 rounded-md text-xs border border-slate-700" 
                array={data.modernCore} />

          </Card>


      </SectionWithTitle>    

      <SectionWithTitle
        idSection="projects" 
        classSection="py-20 px-4 bg-slate-800/30"
        classTitle="text-left "
        title="Proyectos Destacados"
        >
          {

            data.proyects.map((item) => (

              <CardProject 
                key={item.id}
                title = {item.title}
                titleClass = {item.titleClass}
                subtitle = {item.subtitle}
                subtitleClass = {item.subtitleClass}
                cardClass = {item.cardClass}
                imgSrc = {item.imgSrc}
                imgClass = {item.imgClass}
                imgAlt = {item.imgAlt}
                array = {item.data}
                >

              </CardProject>
            ))            

          }

      </SectionWithTitle>    


      <Footer />


    </>
  )
}

export default App
