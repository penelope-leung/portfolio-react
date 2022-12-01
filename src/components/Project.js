import React from 'react'

function Project({image, name}) {
  return (
    <div className='project'>
        <div style={{background:`url(${image})`, width: 300, height: 500}} >
            <h1> { name } </h1>
        </div>
    </div>
  );
}

export default Project