import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/pages/News'
import { ThemeContext } from './context/ThemeContext'; // ✅ added import

const App = () => {
  const { theme } = useContext(ThemeContext); // ✅ now theme will be available

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Navbar />
      <News />
    </div>
  );
};

export default App;
