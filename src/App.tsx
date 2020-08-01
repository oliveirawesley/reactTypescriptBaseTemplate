import React from 'react';

import Routes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />;
    </BrowserRouter>
  );
};

export default App;
