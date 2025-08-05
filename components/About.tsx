
'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`flex justify-center transition-all duration-2000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-1500 hover:-translate-y-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20skilled%20front-end%20developer%20named%20Gibran%2C%20modern%20clean%20studio%20lighting%2C%20confident%20expression%2C%20wearing%20contemporary%20smart%20casual%20attire%2C%20high-quality%20headshot%20with%20soft%20bokeh%20background%2C%20cinematic%20photography%20style%2C%20warm%20color%20grading&width=400&height=400&seq=gibran-profile&orientation=squarish"
                    alt="Gibran - Front-end Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1500"></div>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-2000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Gibran</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Passionate front-end developer with over 5 years of experience creating immersive digital experiences. 
                I specialize in modern web technologies and 3D web development, bringing creative visions to life 
                through clean, efficient code and stunning visual design.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in web3 technologies, contributing to 
                open-source projects, and mentoring aspiring developers in the community.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-800">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'HTML5', icon: 'ri-html5-fill', color: 'from-orange-500 to-red-500' },
                  { name: 'CSS3', icon: 'ri-css3-fill', color: 'from-blue-500 to-cyan-500' },
                  { name: 'JavaScript', icon: 'ri-javascript-fill', color: 'from-yellow-400 to-orange-500' },
                  { name: 'TypeScript', icon: 'ri-code-s-slash-fill', color: 'from-blue-600 to-indigo-600' },
                  { name: 'React', icon: 'ri-reactjs-fill', color: 'from-cyan-400 to-blue-500' },
                  { name: 'ReactJS', icon: 'ri-reactjs-line', color: 'from-cyan-500 to-blue-600' },
                  { name: 'Laravel', icon: 'ri-server-fill', color: 'from-red-500 to-pink-500' },
                  { name: 'Figma', icon: 'ri-pencil-ruler-2-fill', color: 'from-purple-500 to-pink-500' }
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group flex items-center space-x-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-1300 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${(index + 4) * 250}ms` }}
                  >
                    <div className={`w-8 h-8 flex items-center justify-center text-white rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-1300`}>
                      <i className={`${skill.icon} text-lg`}></i>
                    </div>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
