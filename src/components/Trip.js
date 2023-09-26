import React from 'react'
import TripData from './TripData'
import "./TripStyles.css"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique
        destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Card 1"
          text="This Card is Card 1"
        />
        <TripData
          image={Trip2}
          heading="Card 2"
          text="This Card is Card 3"
        />
      <TripData
        image={Trip3}
        heading="Card 2"
        text="This Card is Card 3"
      />
      </div >
    </div>
  )
}

export default Trip