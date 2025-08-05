
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const socialLinks = [
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', url: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: 'ri-github-fill', url: '#', color: 'hover:text-gray-800' },
    { name: 'Twitter', icon: 'ri-twitter-fill', url: '#', color: 'hover:text-blue-400' },
    { name: 'Dribbble', icon: 'ri-dribbble-fill', url: '#', color: 'hover:text-pink-500' },
    { name: 'Behance', icon: 'ri-behance-fill', url: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden"
    >
      <div className="absolute top-16 right-20 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-48 left-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600">
            Ready to bring your vision to life? Get in touch!
          </p>
        </div>

        <div className="flex justify-center">
          <div 
            className={`transition-all duration-1800 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold">Email</p>
                    <p className="text-gray-600">gibran@developer.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-phone-line text-white text-xl"></i>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-black font-semibold">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-8">Follow Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/80 hover:shadow-lg transition-all duration-1300 transform hover:scale-110 ${social.color} group cursor-pointer ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${800 + index * 200}ms` }}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className={`${social.icon} text-xl text-black group-hover:text-current transition-colors`}></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}