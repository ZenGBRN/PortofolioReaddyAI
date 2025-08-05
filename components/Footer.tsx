
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-6 relative overflow-hidden">
      <div className="absolute top-8 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-12 right-16 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute top-24 right-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Gibran.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting exceptional digital experiences through innovative front-end development and immersive 3D design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-1300 transform hover:scale-110 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-linkedin-fill text-white"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-1300 transform hover:scale-110 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-github-fill text-white"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-1300 transform hover:scale-110 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-twitter-fill text-white"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:shadow-lg transition-all duration-1300 transform hover:scale-110 cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-dribbble-fill text-white"></i>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-1300 whitespace-nowrap">
                About Me
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-1300 whitespace-nowrap">
                Projects
              </Link>
              <Link href="#testimonials" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-1300 whitespace-nowrap">
                Testimonials
              </Link>
              <Link href="#gallery" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-1300 whitespace-nowrap">
                Gallery
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-1300 whitespace-nowrap">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors duration-1300 cursor-pointer">Web Development</li>
              <li className="hover:text-white transition-colors duration-1300 cursor-pointer">3D Design</li>
              <li className="hover:text-white transition-colors duration-1300 cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white transition-colors duration-1300 cursor-pointer">Mobile Development</li>
              <li className="hover:text-white transition-colors duration-1300 cursor-pointer">Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400" suppressHydrationWarning={true}>
            {new Date().getFullYear()} Gibran. All rights reserved. Crafted with passion and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
