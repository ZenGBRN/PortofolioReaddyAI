'use client';

import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with 3D product visualization, interactive animations, and seamless checkout flow. Built with React and Three.js for immersive product exploration.",
      tech: ["React", "Three.js", "Spline", "TypeScript", "Stripe"],
      image: "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%203D%20product%20visualization%2C%20clean%20minimalist%20design%2C%20shopping%20cart%20interface%2C%20product%20gallery%20with%20interactive%20elements%2C%20bright%20white%20background%2C%20modern%20UI%2FUX%20design%2C%20high-quality%20web%20design&width=600&height=400&seq=ecommerce-project&orientation=landscape",
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization, interactive charts, and responsive design. Features advanced filtering and customizable widgets for optimal user experience.",
      tech: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "AWS"],
      image: "https://readdy.ai/api/search-image?query=Professional%20SaaS%20dashboard%20interface%20with%20data%20visualization%20charts%2C%20analytics%20graphs%2C%20modern%20dark%20theme%20design%2C%20clean%20interface%20elements%2C%20responsive%20layout%2C%20high-quality%20UI%20design%2C%20bright%20background%20elements&width=600&height=400&seq=saas-dashboard&orientation=landscape",
      link: "#"
    },
    {
      id: 3,
      title: "Creative Agency Website",
      description: "Award-winning agency portfolio featuring parallax scrolling, custom animations, and interactive 3D elements. Showcases creative work through immersive storytelling and engaging user interactions.",
      tech: ["Next.js", "GSAP", "WebGL", "Prisma", "Vercel"],
      image: "https://readdy.ai/api/search-image?query=Creative%20agency%20portfolio%20website%20with%20modern%20design%2C%20interactive%20elements%2C%20creative%20layout%2C%20portfolio%20gallery%2C%20artistic%20design%20elements%2C%20professional%20web%20design%2C%20bright%20clean%20background%2C%20innovative%20UI&width=600&height=400&seq=agency-website&orientation=landscape",
      link: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking interface with biometric authentication, transaction visualization, and seamless money management features. Designed for optimal user experience and security.",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Plaid API"],
      image: "https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20interface%20showing%20modern%20financial%20dashboard%2C%20transaction%20history%2C%20account%20balance%2C%20clean%20mobile%20UI%20design%2C%20professional%20fintech%20design%2C%20bright%20background%2C%20secure%20banking%20interface&width=600&height=400&seq=banking-app&orientation=landscape",
      link: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.getAttribute('data-project-id') || '0');
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('[data-project-id]');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden"
    >
      <div className="absolute top-12 right-24 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-16 left-20 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-64 left-16 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              data-project-id={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div 
                className={`transition-all duration-1800 ${
                  visibleProjects.has(project.id)
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${index % 2 === 0 ? 'translate-x-[-50px]' : 'translate-x-[50px]'} translate-y-10`
                } ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-1300"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-1300 border border-white/30">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-1500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1300"></div>
                  </div>
                </div>
              </div>

              <div 
                className={`transition-all duration-1800 delay-200 ${
                  visibleProjects.has(project.id)
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${index % 2 === 0 ? 'translate-x-[50px]' : 'translate-x-[-50px]'} translate-y-10`
                } ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h3 className="text-3xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-black hover:bg-white/80 transition-all duration-1300 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-1300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap cursor-pointer">
                  <span className="flex items-center space-x-2">
                    <span>View Project</span>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-1300"></i>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}