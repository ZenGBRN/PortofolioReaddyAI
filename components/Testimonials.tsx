
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const certificates = [
    {
      title: "Advanced React Development",
      issuer: "Meta (Facebook)",
      date: "2023",
      credentialId: "REACT-2023-ADV-001",
      image: "https://readdy.ai/api/search-image?query=Professional%20certificate%20design%20for%20Advanced%20React%20Development%20from%20Meta%20Facebook%2C%20modern%20tech%20certificate%20with%20React%20logo%2C%20blue%20and%20white%20color%20scheme%2C%20official%20document%20style%20with%20holographic%20security%20elements%2C%20premium%20quality%20certificate%20design&width=400&height=300&seq=react-certificate&orientation=landscape",
      description: "Comprehensive certification covering advanced React concepts including hooks, context API, performance optimization, and modern development patterns.",
      skills: ["React Hooks", "Context API", "Performance Optimization", "Testing"]
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "FreeCodeCamp",
      date: "2023",
      credentialId: "JS-ALGO-2023-PRO",
      image: "https://readdy.ai/api/search-image?query=Professional%20JavaScript%20algorithms%20certificate%20from%20FreeCodeCamp%2C%20yellow%20and%20black%20branding%20colors%2C%20coding%20symbols%20and%20data%20structure%20diagrams%2C%20official%20certificate%20design%20with%20security%20watermarks&width=400&height=300&seq=javascript-certificate&orientation=landscape",
      description: "Advanced certification in JavaScript fundamentals, ES6+ features, algorithms, data structures, and functional programming principles.",
      skills: ["ES6+", "Algorithms", "Data Structures", "Functional Programming"]
    },
    {
      title: "Front-End Web Development",
      issuer: "Google",
      date: "2022",
      credentialId: "GOOGLE-FED-2022-CERT",
      image: "https://readdy.ai/api/search-image?query=Google%20front-end%20web%20development%20certificate%2C%20Google%20brand%20colors%20blue%20red%20yellow%20green%2C%20modern%20web%20development%20icons%2C%20official%20Google%20certificate%20design%20with%20security%20features%20and%20professional%20layout&width=400&height=300&seq=google-certificate&orientation=landscape",
      description: "Professional certificate covering HTML5, CSS3, JavaScript, responsive design, accessibility standards, and modern web development practices.",
      skills: ["HTML5", "CSS3", "Responsive Design", "Web Accessibility"]
    },
    {
      title: "3D Web Development with Three.js",
      issuer: "Udemy",
      date: "2023",
      credentialId: "3D-WEB-2023-EXPERT",
      image: "https://readdy.ai/api/search-image?query=Three.js%203D%20web%20development%20certificate%20from%20Udemy%2C%20purple%20and%20white%20color%20scheme%20with%203D%20geometric%20shapes%2C%20modern%20tech%20certificate%20design%20with%20Three.js%20logo%20elements%2C%20professional%20certificate%20layout&width=400&height=300&seq=threejs-certificate&orientation=landscape",
      description: "Specialized certification in 3D web development using Three.js, covering 3D graphics, animations, shaders, and interactive 3D experiences.",
      skills: ["Three.js", "3D Graphics", "WebGL", "3D Animations"]
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Adobe",
      date: "2022",
      credentialId: "ADOBE-UX-2022-FUND",
      image: "https://readdy.ai/api/search-image?query=Adobe%20UI%20UX%20design%20fundamentals%20certificate%2C%20Adobe%20brand%20colors%20red%20and%20black%2C%20creative%20design%20elements%20with%20user%20interface%20mockups%2C%20professional%20Adobe%20certificate%20design%20with%20security%20features&width=400&height=300&seq=adobe-certificate&orientation=landscape",
      description: "Comprehensive certification in user interface and user experience design principles, covering design thinking, prototyping, and user research methodologies.",
      skills: ["Design Thinking", "Prototyping", "User Research", "Adobe Creative Suite"]
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section 
      id="certificates" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute top-16 left-20 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-24 right-16 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-48 right-1/4 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Certificates
          </h2>
          <p className="text-lg text-gray-600">
            Certified expertise in cutting-edge technologies
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1800 delay-200 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificates.map((certificate, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className={`bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-1300 max-w-5xl mx-auto ${
                    index === currentSlide ? 'ring-2 ring-blue-400/50 shadow-blue-200/50' : ''
                  }`}>
                    <div className="md:flex">
                      <div className="md:w-2/5 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                        <img 
                          src={certificate.image}
                          alt={certificate.title}
                          className="relative w-full h-64 md:h-full object-cover object-top"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-sm font-semibold text-gray-700">{certificate.date}</span>
                        </div>
                      </div>
                      
                      <div className="md:w-3/5 p-8">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-black mb-2">{certificate.title}</h3>
                          <p className="text-lg text-blue-600 font-semibold">{certificate.issuer}</p>
                          <p className="text-sm text-gray-500 mt-1">Credential ID: {certificate.credentialId}</p>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {certificate.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-600 mb-3">Key Skills Acquired:</h4>
                          <div className="flex flex-wrap gap-2">
                            {certificate.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm rounded-full border border-blue-200/50"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-1300 transform hover:scale-105 whitespace-nowrap">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-external-link-line"></i>
                            </div>
                            <span>Verify Certificate</span>
                          </button>
                          
                          <div className="flex items-center space-x-2 text-gray-500">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-award-line"></i>
                            </div>
                            <span className="text-sm">Verified Credential</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/80 transition-all duration-1300 cursor-pointer hover:scale-110"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-left-line text-xl text-black"></i>
              </div>
            </button>
            
            <div className="flex space-x-3">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-1300 cursor-pointer ${
                    index === currentSlide 
                      ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-400/50' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/80 transition-all duration-1300 cursor-pointer hover:scale-110"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xl text-black"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
