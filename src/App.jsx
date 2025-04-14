import React, { useState } from 'react'; // Importing React and useState hook
import Gallery from './Components/Gallery'; // Importing Gallery component
import './App.css'; // Importing CSS styles


function App() { // to manage the list of tours
const [tours, setTours] = useState([]); // Function to removes a tour from the list

const removeTour = (id) => { 
const updatedTours = tours.filter((tour) => tour.id !== id); //

  }; 

return (
    <main>
      <h1>Welcome to the Tour App </h1> 
      <h2>Explore the world with us!</h2> 
      <h3>Available Tours</h3>
      <p>Discover amazing places and experiences.</p>
      <Gallery tours={tours} setTours={setTours} onRemove={removeTour} /> 
    </main>
  );
}

export default App;   
// to export the App component
  