import React from 'react';

// Define the expected props for the Store component
type StoreProps = {
  name: string; // The name of the store
  mapSrc: string; // The source URL for the embedded map
};

// Store component that displays the store name and an embedded map
const Store: React.FC<StoreProps> = ({ name, mapSrc }) => {
  return (
    <div className="store">
      <h3>{name}</h3>
      {/* Container for the embedded Google Map */}
      <div className="map-container">
        <iframe
          title={name} // Set the title of the iframe to the store's name
          width="400"
          height="250"
          loading="lazy"
          src={mapSrc} // Source URL for the embedded map
          style={{ border: 0 }} // Remove iframe border
          allowFullScreen // Allow full-screen mode
          referrerPolicy="no-referrer-when-downgrade" // Specify the referrer policy
        ></iframe>
      </div>
    </div>
  );
};

export default Store;

