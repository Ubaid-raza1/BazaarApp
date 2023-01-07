import React from 'react'
import "./sliders.css"

const SlidersItems = ({children}) => {
  return (
    <div className="carousel-item" style={{ width: "100%" }}>
      {children}
    </div>
  )
}

export default SlidersItems
