"use client"
import React, { useEffect, useState } from 'react';
import '../style/typing.scss'; // Fichier CSS pour les styles

const TypingAnimation: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let charIndex = 0;

    const typeWriter = () => {
      if (charIndex <= text.length) {
        setDisplayText(() => text.substring(0, charIndex + 1));
        charIndex++;
        timeoutId = setTimeout(typeWriter, 80);
      } else {
        setTimeout(() => {
          let eraseIndex = text.length;
          const eraseText = () => {
            if (eraseIndex >= 0) {
              setDisplayText(() => text.substring(0, eraseIndex));
              eraseIndex--;
              timeoutId = setTimeout(eraseText, 50);
            } else {
              setIsTyping(true);
              setDisplayText('');
              charIndex = 0;
              setTimeout(() => {
                typeWriter();
              }, 3000);
            }
          };
          eraseText();
        }, 6000);
      }
    };

    setTimeout(() => {
        typeWriter();
      }, 3000);

    // Nettoyer le timeout lors du démontage du composant pour éviter les fuites de mémoire
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="typing-animation-container relative">
      <div className='absolute flex'>
      <span className="typed-text text-3xl">{displayText}</span>
      {isTyping && <span className="typing-bar blink-animation">&nbsp;</span>}
      </div>
    </div>
  );
};

export default TypingAnimation;
