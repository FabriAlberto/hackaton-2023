import React from "react";

const useColorMatching = () => {

  const uselighterColor = (color: string, percent: number) => {
    const num = parseInt(color.slice(1), 16); // Convierte el color a número entero
    const r = (num >> 16) + percent; // Componente rojo ajustado
    const g = ((num >> 8) & 0x00ff) + percent; // Componente verde ajustado
    const b = (num & 0x0000ff) + percent; // Componente azul ajustado
    
    const adjustedColor = (
      (r < 255 ? r : 255) * 0x010000 +
      (g < 255 ? g : 255) * 0x000100 +
      (b < 255 ? b : 255)
    ).toString(16);

    return `#${adjustedColor.padStart(6, "0")}`;
  };

  return {
    uselighterColor,
  };
};

export default useColorMatching;
