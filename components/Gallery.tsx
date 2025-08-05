'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleTiles, setVisibleTiles] = useState(new Set());
  const sectionRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      title: "UI Design Concept",
      category: "Web Design",
      image: "https://readdy.ai/api/search-image?query=Modern%20UI%20design%20concept%20showing%20clean%20interface%20elements%2C%20minimalist%20web%20design%2C%20bright%20color%20palette%2C%20contemporary%20design%20patterns%2C%20professional%20web%20interface%2C%20high-quality%20design%20mockup&width=400&height=300&seq=gallery-ui-1&orientation=landscape"
    },
    {
      id: 2,
      title: "Mobile App Interface",
      category: "Mobile Design",
      image: "https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20design%20showing%20modern%20smartphone%20screen%2C%20clean%20mobile%20UI%20elements%2C%20contemporary%20app%20design%2C%20bright%20background%2C%20professional%20mobile%20interface%20mockup&width=400&height=300&seq=gallery-mobile-1&orientation=landscape"
    },
    {
      id: 3,
      title: "3D Web Experience",
      category: "3D Design",
      image: "https://readdy.ai/api/search-image?query=3D%20web%20design%20interface%20with%20interactive%20elements%2C%20modern%203D%20graphics%2C%20futuristic%20web%20design%2C%20bright%20clean%20background%2C%20innovative%20digital%20design%2C%20high-quality%203D%20mockup&width=400&height=300&seq=gallery-3d-1&orientation=landscape"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "https://readdy.ai/api/search-image?query=Brand%20identity%20design%20showcase%20with%20modern%20logo%20concepts%2C%20clean%20branding%20materials%2C%20contemporary%20brand%20design%2C%20bright%20professional%20background%2C%20high-quality%20branding%20mockup&width=400&height=300&seq=gallery-brand-1&orientation=landscape"
    },
    {
      id: 5,
      title: "Dashboard Design",
      category: "Web Design",
      image: "https://readdy.ai/api/search-image?query=Modern%20dashboard%20interface%20design%20with%20data%20visualization%2C%20clean%20analytics%20interface%2C%20contemporary%20dashboard%20layout%2C%20bright%20background%2C%20professional%20UI%20design%20mockup&width=400&height=300&seq=gallery-dashboard-1&orientation=landscape"
    },
    {
      id: 6,
      title: "Landing Page",
      category: "Web Design",
      image: "https://readdy.ai/api/search-image?query=Modern%20landing%20page%20design%20with%20hero%20section%2C%20clean%20layout%2C%20contemporary%20web%20design%2C%20bright%20color%20scheme%2C%20professional%20website%20mockup%2C%20high-quality%20design&width=400&height=300&seq=gallery-landing-1&orientation=landscape"
    },
    {
      id: 7,
      title: "E-commerce UI",
      category: "Web Design",
      image: "https://readdy.ai/api/search-image?query=E-commerce%20website%20interface%20design%20with%20product%20showcase%2C%20modern%20shopping%20interface%2C%20clean%20online%20store%20design%2C%20bright%20background%2C%20professional%20retail%20mockup&width=400&height=300&seq=gallery-ecommerce-1&orientation=landscape"
    },
    {
      id: 8,
      title: "App Prototype",
      category: "Mobile Design",
      image: "https://readdy.ai/api/search-image?query=Mobile%20app%20prototype%20design%20showing%20user%20flow%2C%20modern%20app%20interface%20mockup%2C%20contemporary%20mobile%20design%2C%20bright%20clean%20background%2C%20professional%20app%20design%20showcase&width=400&height=300&seq=gallery-prototype-1&orientation=landscape"
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
    const tileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tileId = parseInt(entry.target.getAttribute('data-tile-id') || '0');
            setVisibleTiles(prev => new Set([...prev, tileId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const tileElements = document.querySelectorAll('[data-tile-id]');
    tileElements.forEach((el) => tileObserver.observe(el));

    return () => tileObserver.disconnect();
  }, []);

  const openFullscreen = (item) => {
    setSelectedImage(item);
  };

  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  const prevSlide = () => {
    // implement previous slide functionality
  };

  const nextSlide = () => {
    // implement next slide functionality
  };

  const setCurrentSlide = (index) => {
    // implement set current slide functionality
  };

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-br from-purple-50/30 via-white to-blue-50/30 relative overflow-hidden"
    >
      <div className="absolute top-20 left-16 w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-56 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-80 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 transition-all duration-1800 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-black mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Design Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Explore my creative design portfolio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              data-tile-id={item.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1500 cursor-pointer transform hover:scale-105 ${
                visibleTiles.has(item.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => openFullscreen(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-fullscreen-line text-white text-sm"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              onClick={closeFullscreen}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-white text-xl"></i>
              </div>
            </button>
            
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/60 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/80 transition-all duration-1300 cursor-pointer hover:scale-110"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-left-line text-xl text-black"></i>
              </div>
            </button>
            <div className="flex space-x-3">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-1300 cursor-pointer ${
                    index === 0 
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
      )}
    </section>
  );
}
