import React from "react";
import Star from "../Images/Star.png";
import EmptyStar from "../Images/EmptyStar.png";
import '../styles/ratings.css';

export default function Rating() {
   const stars = [1, 2, 3, 4, 5];

   return(
       <div className="container">
           {stars.map((star, rating) =>
               rating >= star ? (
                   <img src={Star} alt="Etoile pleine" className="star" key={star.toString()}/>
               ) : (
                   <img src={EmptyStar} alt="Etoile vide" className="star" key={star.toString()}/>  
               )
           
           )}
       </div>
   )
}