

// import "./App.css";
import { Routes,Route } from "react-router-dom";
import MealCard from "./components/MealCard/MealCard";
import MealDetail from "./components/MealDetails/MealDetails";
import HeaderNav from "./components/HeaderNav/HeaderNav";

function App() {
  return (
    <div className="App">  
     <HeaderNav/>
     <Routes>
      <Route path="/" element={<MealCard/>}/>
       <Route path="/Detail/:id" element={<MealDetail/>}/>
     </Routes>
    </div>
  );
}

export default App;


