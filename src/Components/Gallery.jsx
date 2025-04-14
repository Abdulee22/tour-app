import React, { useEffect, useState } from 'react';// Importing React and hooks for managing state and side effects
import TourCard from './TourCard.jsx'; // Importing the TourCard component to display individual tours
    
const Gallery = ({ tours, setTours, onRemove }) => { // Gallery component to display a list of tours
const [loading, setLoading] = useState(true); // State to manage loading status
const [error, setError] = useState(null); // State to manage error status
    

    // Function to fetch tour data from the API
    const fetchTours = async () => {
    try {
            const res = await fetch('https://www.course-api.com/react-tours-project'); // Fetching data from the API
            const data = await res.json();
        setTours(data);
        setLoading(false);
    } catch (error) {
        setError(true);
        setLoading(false);
        }
    };

   
    useEffect(() => {
        fetchTours();
    }, []);

    
    if (error) {
        return <h2>Uh Oh, something went wrong</h2>;
    }
    
    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (tours.length === 0) {
        return (
            <div className='length-zero'>
                <h2>No Tours remain</h2>
                <div className='refresh-button'>
                    <p>Refresh the list to see available tours.</p>
                <button onClick={fetchTours}>Refresh tours</button>
                </div>
            </div>
        );
    }

    
    return (
        <section className='tour-list'>
            {tours.map((tour) => (
                <TourCard
                    key={tour.id} // Unique key
                    {...tour} // Pass all tour properties as props   
                    onRemove={onRemove} // Function to remove a tour
                />
            ))}
        </section>
    );
};

export default Gallery; // Exporting the Gallery
