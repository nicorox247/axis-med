import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import IconOperations from './assets/operations.svg';
import IconCurriculum from './assets/curriculum.svg';
import IconValidation from './assets/validation.svg';
import IconMetrics from './assets/metrics.svg';



function App() {
  const divisions = [
    { icon: IconOperations, title: "Operations", desc: "Handles logistics, internal systems, and team coordination for smooth execution." },
    { icon: IconCurriculum, title: "Program/Curriculum", desc: "Leads training, onboarding, and the educational growth of our fellowship teams." },
    { icon: IconMetrics, title: "Clinical Validation", desc: "Sources real-world problems and guides clinical pilots alongside physician mentors." },
    { icon: IconValidation, title: "Internal Validation", desc: "Tracks KPIs, technical progress, and ensures teams stay on mission and accountable." },
  ];

  return (
    <main className="font-sans text-gray-900 bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 via-black to-blue-300 py-24 px-6 text-center text-white">
        <div className="container mx-auto px-4 pb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Translational Medicine. <br className="hidden md:block" />
            Engineering-Based. Nationally Embedded.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            AxisMED is based at Carle Illinois College of Medicine and empowers physician innovators to build clinically validated solutions to real healthcare problems.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {/* <a href="#" className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition">
              Apply for Fellowship
            </a>
            <a href="#" className="border border-blue-600 text-blue-600 px-5 py-3 rounded-md hover:bg-blue-50 transition">
              Submit a Clinical Problem
            </a>
            <a href="#" className="underline text-sm mt-3 block text-gray-600">
              Partner With AxisMED
            </a> */}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-300 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-justify space-y-6 pt-15 pb-15">
          <h2 className="text-2xl font-semibold mb-4">About AxisMED</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            AxisMED is a pre-incubator based at the world’s first engineering-based medical school. We bring together clinical insight, engineering precision, and translational ambition.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Our vision is to build the leading national platform for student-led clinical innovation by bridging medicine, engineering, and entrepreneurship. AxisMED empowers medical trainees to co-develop and validate technologies that address real-world healthcare problems.
          </p>
        </div>
      </section>

      {/* Core Divisions */}
      <section
        id="divisions"
        className="bg-gradient-to-br from-sky-500 via-black to-blue-300 py-24 px-6 text-white"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Core Divisions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
            {divisions.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/20 backdrop-blur border border-white/20 p-10 rounded-2xl shadow-xl hover:scale-[1.03] transition-all duration-300 text-left"
              >
                <div className="mb-4">
                  <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-white/90 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section id="fellowship" className="text-center py-20 px-6 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Join the AxisMED Fellowship</h2>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            Applications for the Fall 2025 AxisMED Fellowship Program will open soon. Express interest to join interdisciplinary teams solving real clinical problems.
          </p>
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Express Interest
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-center py-10 text-sm text-gray-500 bg-white border-t">
        <p>Carle Illinois College of Medicine • team@axismed.org</p>
        <p>
          <a
            href="https://www.linkedin.com/company/axismedill/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>{" "}
          | © {new Date().getFullYear()} AxisMED
        </p>
      </footer>
    </main>
  );
}



export default App
