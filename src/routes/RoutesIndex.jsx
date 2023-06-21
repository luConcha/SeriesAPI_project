/* eslint-disable semi */
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SerieDetail from '../pages/SerieDetail';
import SeasonDetail from '../pages/SeasonDetail';
import About from '../pages/About';

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/serie/:id' element={<SerieDetail />} />
      <Route path='/about' element={<About />} />
      <Route path='/season/:idShow/:idSeason' element={<SeasonDetail />} />
    </Routes>
  );
};
export default RoutesIndex;
