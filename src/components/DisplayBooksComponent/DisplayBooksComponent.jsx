import React from 'react'
import BookData from '../../data/BookData'

const DisplayBooksComponent = () => {

  return (
    <div className='box-container'>
        {BookData.map((data,index)=>(
           <div className='card-container'>
           <p key={index}>{data.title}</p>
           <p key={index}>{data.author}</p>
           <p key={index}>{data.subject}</p>
           <p key={index}>{data.publish_date}</p>
           </div>
           ))}
    </div>
  )
}

export default DisplayBooksComponent