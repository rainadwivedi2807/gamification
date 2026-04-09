import React from 'react';

const GridBackground: React.FC = () => {
  const darkPinkIndices = [7, 14, 34]; // Matches previous visual logic in 12-col
  const lightMagentaIndices = [8, 12,15,26, 35,46]; // Matches previous visual logic in 12-col

  return (
    <div 
      className="absolute inset-0 pointer-events-none grid opacity-40 overflow-hidden"
      style={{
        gridTemplateColumns: 'repeat(12, 80px)',
        gridTemplateRows: 'repeat(5, 80px)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 10%, black 50%)',
        maskImage: 'radial-gradient(circle at center, transparent 10%, black 50%)',
      }}
    >
      {[...Array(60)].map((_, i) => (
        <div 
          key={i} 
          className="border-r border-b border-[#F5D0FE]"
          style={{
            backgroundColor: darkPinkIndices.includes(i) 
              ? 'rgba(251, 207, 251, 0.5)' 
              : lightMagentaIndices.includes(i) 
                ? 'rgba(249, 190, 249, 0.2)' 
                : 'transparent'
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;
