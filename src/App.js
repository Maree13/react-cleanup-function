// CleanUp Function

import { useState, useEffect } from 'react';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const sizeController = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', sizeController);
  });

  return (
    <div>
      <h1>Šírka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};

export default App;
