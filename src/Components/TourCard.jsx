import { useState } from 'react';

const TourCard = ({ id, image, info, name, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false); // State to manage read more functionality

  return ( 
    <article className="tour-card"> {/* Tour card container */}
      <img src={image} alt={name} className="tour-image" /> {/* Tour image */}
      <div className="tour-info"> {/* Tour information container */}
        <h2 className="tour-name">{name}</h2> {/* Tour name */}
        <p className="tour-price">${price}</p> {/* Tour price */}
        <p className="tour-description">
          {readMore ? info : `${info.substring(0, 200)}...`} {/* Tour description with read more functionality */}
          <button onClick={() => setReadMore(!readMore)} className="read-more-btn">
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => onRemove(id)} className="remove-tour-btn">Remove</button> {/* Remove tour button */}
      </div>
    </article>
  );
}
    
export default TourCard; // Export the TourCard component
