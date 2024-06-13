import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { API_DETAILS } from "../../API/api";
import{useParams} from 'react-router-dom'

export default function MealDetails () {
  const [getMeal, setGetMeal] = useState([]);
  const {id} = useParams()
  useEffect(() =>{
    axios.get(API_DETAILS +id).then((data) => setGetMeal(data.data.meals[0]));

  },[]);

  

  function getInfoMeals(getMeal) {
    let res = [];
   getMeal.forEach( i => {
    let ingredient = getMeal["strIngredient" + i];
    let measure = getMeal["strMeasure" + i];
             if (ingredient != "") {
        res.push({ ingredient, measure });
      }
       
   });

  }

  return (
  <div className="meal-detail-general">
    <div className="meal-detail-info">
      <div className="detail-text">
        <h3>{getMeal.strMeal}</h3>
        <h2>{getMeal.strCategory} | {getMeal.strArea}</h2>
        <div className="detail-ingredients">
          {getInfoMeals(getMeal)}
        </div>
      </div>
      <div className="detail_img">
        <img src={getMeal.strMealThumb} alt="img" />
      </div>
    </div>

      <div className="detail-instruction">
        <h3>
        Instruction
        </h3>
        <p>{getMeal.strInstructions}</p>
        <a  href={getMeal.strYoutube}> WATCH YOUTUBE</a>
      </div>
  </div>
  );
};











