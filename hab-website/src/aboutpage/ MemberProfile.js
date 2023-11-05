import React from 'react';

const MemberProfile = ({ name, description, imageUrl, linkedInUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} style={{ width: '100px', height: '100px' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
};

export default MemberProfile;