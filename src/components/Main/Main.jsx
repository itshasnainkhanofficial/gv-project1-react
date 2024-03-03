import React from 'react'
import Cards from '../Cards/Cards'

const Main = () => {
  return (
    <div>
      <h1>Main Heading</h1>
      <div style={{backgroundColor: "red", display: "flex"}}>
      <Cards data="Data 1"/>
      <Cards data="Data 2"/>
      <Cards data="Data 3"/>
      <Cards data="Data 4"/>
      </div>
    </div>
  )
}

export default Main