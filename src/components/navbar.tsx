"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fonction pour faire défiler la page jusqu'à un ID
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Détermine la hauteur de la navbar pour ne pas cacher la section
      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setIsSticky(true); // Scroll down
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`z-10 w-full bg-bleu-vert flex justify-around items-center ${isSticky ? 'sticky top-0' : ''}`}>
      <div className="px-5">
        <Image src="/images/Logo-removebg-preview.png" alt="Logo" width={220} height={50} />
      </div>
      <div className="hidden font-semibold w-full sm:block">
        <div className="flex">
          <button
            onClick={() => scrollToSection('accueil')}
            className="nav-button"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection('presentation')}
            className="nav-button"
          >
            Présentation
          </button>
          <button
            onClick={() => scrollToSection('realisations')}
            className="nav-button"
          >
            Réalisations
          </button>
          <button
            onClick={() => scrollToSection('competences')}
            className="nav-button"
          >
            Compétences
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="nav-button"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('cv')}
            className="nav-button"
          >
            CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
