import React from 'react';

interface SkillProps {
  name: string;
  logo: string;
  percentage: number;
}

const Skill: React.FC<SkillProps> = ({ logo, name, percentage }) => {
  const radius = 45; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle

  // Calcul de la longueur du trait en fonction du %
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-40 h-40 relative flex flex-col">
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-bleu-vert"
          strokeWidth="6"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0"
          r={radius}
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
        />
        <circle
          className="text-bordeau"
          strokeWidth="6"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
          style={{
            transition: 'stroke-dashoffset 0.3s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <img className="w-7 h-6" src={logo} />
        <span className="text-lg font-bold">{name}</span>
        <span className="text-lg font-black text-bordeau">{percentage}%</span>
      </div>
    </div>
  );
};

export default Skill;
