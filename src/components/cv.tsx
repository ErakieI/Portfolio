import React from 'react';

const CV: React.FC = () => {
  return (
    <div id="cv" className="py-6 overflow-hidden text-center">
      <a
        href="/CV_Mathieu_J.pdf"
        download="CV_Mathieu_J.pdf"
        className="bg-red-600 hover:bg-red-800 text-white text-xl font-bold py-4 px-8 rounded"
      >
        Télécharger mon CV
      </a>
    </div>
  );
};

export default CV;
