
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Capitalweather from './Pages/Capitalweather';
import Country from './Pages/Country';
import Details from './Pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/country" element={<Country />} />
        <Route path="/details/:search" element={<Details />} />
        <Route path="/weather/:capital" element={<Capitalweather />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
