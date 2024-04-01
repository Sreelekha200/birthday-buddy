import React from 'react'

const Person = ({name, age, image}) => {
      
      return (
        <article className='person'>
            <img src={image} alt={name} className='img'/>
        <div >
            <h4>{name}</h4>
            <h6>{age} years</h6>           
    </div>
    </article>
  )
}

export default Person
