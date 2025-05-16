import React from "react";

const MapEmbed = ({ latitude, longitude }) => {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <iframe
      width="100%"
      height="400"
      frameBorder="0"
      style={{ border: 0 }}
      src={mapUrl}
      allowFullScreen
      aria-hidden="false"
      tabIndex={0}
    />
  );
};

export default MapEmbed;
