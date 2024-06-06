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
    function handleSearchOnChange(e) {
        setInpValue(e.target.value);
        handleSearch(e);
    }
      
      const handleSearch = async(e) =>{
        e.preventDefault();
        try{
            let response = await axios
            .get(API_SEARCH +{inpValue})
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
            <h2>Meal of the day</h2>


          </div>
        </section>
      )
    }

