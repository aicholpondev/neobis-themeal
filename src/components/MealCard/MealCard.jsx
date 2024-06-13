import{API,API_SEARCH} from "../../API/api"
import { useEffect ,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

export default function MealCard () {
    const [searchMeal, setSearchMeal] = useState([]);
    const [getMeal, setGetMeal] = useState([]);
    const [inpValue, setInpValue] = useState("");

    useEffect (() =>{
        axios.get(API).then((data) => setGetMeal(data.data.meals[0]));
    },[]);
    function mealSearchOn(e) {
        setInpValue(e.target.value);
        // btnSearch(e);
    };
      
      const btnSearch = async(e) =>{
        e.preventDefault();
        try{
            let data = await axios
            .get(API_SEARCH +inpValue)
            .then((data) =>{
                setSearchMeal(data.data.meals);
          console.log(searchMeal);
            });
        }catch(error){
            console.error("Error", error);

        }
      };
     
       
      return (
        <section>

          <div className="card">
            <div className="card_text">
            <h2>Meal of the day</h2>
          <NavLink className="card_text-title" to={`/Detail/${getMeal.idMeal}`}>
            
          <h3> {getMeal.strMeal}</h3>
          </NavLink>
            <p>{getMeal.strCategory} | {getMeal.strArea} </p>

            </div>
            <div >
              <img className ="card_image"src={getMeal.strMealThumb} alt="img" />
            </div>
          </div>
          <center>
          <form className="search_input" onSubmit={btnSearch}>
          <h4>Find your Meal</h4>
             <input type="text"
             placeholder="Find your meal"
             value={inpValue}
             onChange={(e) => mealSearchOn(e)} />
             <button type="submit">SEARCH</button>
             

          </form>
          </center>
          {searchMeal.map((item) =>{
            return(
              <div className="search-meals" key={item.idMeal}>
                <div className="search-meals-text">
                  <NavLink to={`/Detail/${item.idMeal}`}>
                  <p>{item.strMeal}</p>
                  </NavLink>
                  <p>
                    {item.strCategory} | {item.strArea}
                  </p>
                </div>
                <div className="meal-details-img">
                  <img src={item.strMealThumb} alt="img" />
                </div>

            </div>
            )
          }
        ) }
</section>
      )
    }




