import React from 'react';

const ImageLink = ({ src, alt, href }) => {
  const handleClick = () => {
    // Open the link in a new tab
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <img
      src={src}
      alt={alt || 'image'}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Change cursor to indicate clickable
    />
  );
};

export default ImageLink;