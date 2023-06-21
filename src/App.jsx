/* eslint-disable semi */

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
import Navbar from './components/Navbar';

// eslint-disable-next-line space-before-function-paren
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  );
}

export default App;
