import React from 'react'
import { webDesigns } from '../data/siteData'

const Design = () => {
  return (
    <>
    {webDesigns.map((index)=>(
        <>
        <h1>{index.title}</h1>
        <p>{index.description}</p>
        <img src={index.url} alt={index.title} width="300"/>
        <a href={index.social}>{index.social}</a>
        </>
    ))}
    
    </>
  )
}

export default Design