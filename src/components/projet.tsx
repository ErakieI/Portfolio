"use client";
import React, { useState, useEffect, useRef } from 'react';

interface ProjetProps {
  img: string;
  titre: string;
  description: string;
  githubRepo: string;
}

const Projet: React.FC<ProjetProps> = ({ img, titre, description, githubRepo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Fonction pour ouvrir la modale
  const openModal = () => {
    setModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    // Ajouter un écouteur d'événement pour les clics sur le document
    document.addEventListener('mousedown', handleClickOutside);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
      <img
        className="w-auto h-auto object-cover object-center"
        src={img}
        alt={titre}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-bold text-center text-white mb-2">{titre}</h2>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          En savoir plus
        </button>
      </div>

      {/* Modale */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div ref={modalRef} className="w-full sm:w-3/4 lg:w-1/2 h-auto bg-white p-4 rounded-lg relative overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 modal-close-btn"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img className="w-3/4 h-auto object-cover object-center mb-4 m-auto" src={img} alt={titre} />
            <h2 className="text-2xl font-bold mb-2 text-center ">{titre}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
              href={githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Voir le code sur GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projet;
