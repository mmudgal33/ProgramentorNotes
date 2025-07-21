import React from "react";
// import { listings } from "../data";


const listings = [
    {
      "id": 1,
      "description": "heater",
      "image": "./images/heater.jpg"
    },
    {
      "id": 2,
      "description": "2019 Toyota Tacoma grill",
      "image": "./images/toyota-grill.jpg"
    },
    {
      "id": 4,
      "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
      "image": "./images/dvd-cases.jpg"
    },
    {
      "id": 5,
      "description": "wood",
      "image": "./images/wood.jpg"
    },
    {
      "id": 6,
      "description": "Beautiful couch",
      "image": "./images/couch.jpg"
    },
    {
      "id": 7,
      "description": "Treadmill Parts For Free",
      "image": "./images/treadmill.jpg"
    }
  ]








export function ListingCard() {
  const listingComponents= listings.map((listing) => (
  <div key={listing.id}>
    <h2>{listing.description}</h2>
    <img src={listing.image} alt={listing.description}/>
   </div>  
  ))

  return (
  <div>
    <h1>Free Stuff Page</h1>
    {listingComponents}
  </div>
  )
}


