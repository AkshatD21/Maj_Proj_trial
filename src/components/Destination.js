import React from 'react';
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css"
import DestinationData from './DestinationData';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you opportunity to explore the real you</p>

      <DestinationData 
      className="first-des"
      heading= "Second Heading"
      text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis repudiandae optio minus, quaerat, id aspernatur cupiditate ipsam dolorum a nam perferendis soluta quos! Blanditiis facere inventore itaque reprehenderit omnis?"

        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
        heading="Third Heading"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nobis repudiandae optio minus, quaerat, id aspernatur cupiditate ipsam dolorum a nam perferendis soluta quos! Blanditiis facere inventore itaque reprehenderit omnis?"

        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  )
}

export default Destination