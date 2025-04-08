import React from 'react'
import Card from './Card'

const List = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-center xl:justify-start'>
        {[...Array(10)].map((_, i) => <Card key={i} />)}
    </div>
  )
}

export default List