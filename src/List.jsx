import React from 'react'
import Person from './Person'

const List = ({people}) => {
  return (
    <div>
      {people.map((item) => {
        return (<Person key={item.id} {...item}/>)
      })}
    </div>
  )
}

export default List
