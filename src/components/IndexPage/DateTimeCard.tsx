
import React, { useState, useEffect } from "react";

const DateTimeCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  return (
    <div className="bento-card col-span-3 md:col-span-1 backdrop-blur-lg bg-gradient-to-br from-black/40 to-black/20">
      <h2 className="text-lg text-gray-300 mb-4 font-medium">Date et Heure Actuelles</h2>
      <p className="text-xl font-medium mb-2 text-white">
        {time.toLocaleDateString('fr-FR', dateOptions)}
      </p>
      <p className="text-3xl font-mono font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
        {time.toLocaleTimeString('fr-FR')}
      </p>
    </div>
  );
};

export default DateTimeCard;
