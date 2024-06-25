import React, { useState } from 'react';
import Search from './Components/Search';
import MapView from './Components/MapView';
import SearchPointer from './Components/SearchPointer';
import MapViewPointe from './Components/MapViewPointe';
import Navbar from './Components/Navbar';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [selectedOption, setSelectedOption] = useState('color');

  return (
    <div>
      <Navbar setSelectedOption={setSelectedOption} />
      {selectedOption === 'color' ? (
        <div>
          <Search setLocations={setLocations} />
          <MapView locations={locations} />
        </div>
      ) : (
        <div>
           <div>
            <SearchPointer setLocations={setLocations} />
            <MapViewPointe locations={locations} />
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
