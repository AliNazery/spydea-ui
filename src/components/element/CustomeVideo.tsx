import React from 'react';

export default function CustomeVideo ({ src, poster, width = '100%', height = 'auto', className = '' }){
  return (
    <>
    <h3 className='text-[1.8608669999999998rem] font-semibold font-primary mt-2 mb-1.5'>Custom video</h3>
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video
        className="w-full h-auto rounded-lg"
        width={width}
        height={height}
        controls
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

