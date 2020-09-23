import React from 'react';

function CustomSlide({ url, index, className }) {
  return (
    <img
      className={className}
      src={url}
      alt={`carousel-${index}`}
    />
  )
}

export default CustomSlide