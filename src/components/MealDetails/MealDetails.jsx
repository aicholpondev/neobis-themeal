import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const DETAILS_API = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const MealDetail = () => {
  const [getMeal, setGetMeal] = useState([]);
}