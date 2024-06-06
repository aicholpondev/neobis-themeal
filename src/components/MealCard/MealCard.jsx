import{API,API_SEARCH} from "../../API/api"
import { useEffect ,useState} from "react";
import axios from "axios"

export default function MealCard () {
    const [searchMeal, setSearchMeal] = useState([]);
    const [getMeal, setGetMeal] = useState([]);
    const [inpValue, setInpValue] = useState("");

    useEffect (() =>{
        axios.get(API).then((data) => setGetMeal(data.data.meals[0]));
    },[]);
    function handleSearchOn(e) {
        setInpValue(e.target.value);
        btnSearch(e);
    }
      
      const btnSearch = async(e) =>{
        e.preventDefault();
        try{
            let response = await axios
            .get(API_SEARCH +inpValue)
            .then((data) =>{
                setSearchMeal(data.data.meals);
          console.log(searchMeal);

            })
        }catch(error){
            console.error("Error fetching meal:", error);

        }
      }

      return (
        <section>

          <div className="card">
            <div className="card_text">
            <h2>Meal of the day</h2>
            <h3> {getMeal.strMeal}</h3>
             <p>{getMeal.strCategory} | {getMeal.strArea} </p>
            </div>
            <div >
              <img className ="card_image"src={getMeal.strMealThumb} alt="img" />
            </div>
          </div>
          <center>
          <form className="search_input">
          <h4>Find your Meal</h4>
             <input type="text"
             placeholder="Find your meal"
             value={inpValue}
             onChange={(e) => btnSearch(e)} />
             <button>SEARCH</button>

          </form>
          </center>
        </section>
      )
    }

