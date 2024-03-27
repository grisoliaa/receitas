import { useState, useEffect } from "react"
import "./App.css"
import imgcard1 from "./assets/img-card1.svg"
import axios from "axios"

const App = () => {

    const [inputSearch,setInputSearch] = useState("")

    const [meals,setMeals] = useState([])

    const handleSubmit = (event) => {
      event.preventDefault()

      console.log(inputSearch)

      getMeals(inputSearch)

    }

      useEffect(() => {

        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((response) => setMeals(response.data.meals))

      },[])

      const getMeals = (searchMeal) => {

        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchMeal).then((response) => setMeals(response.data.meals))

      }


  return (

    <>
    
      <div className="container-all">

        <form onSubmit={(event) => handleSubmit(event)}>

            <div className="container-input">

                <input onChange={(event) => setInputSearch(event.target.value)}/>
                

            </div>

            <button>Search</button>

        </form>

          <div className="cards">

                {meals.map((meal) => (

                    <div key={meal.idMeal}>

                      <img src={meal.strMealThumb} className="imgcard"/>
                      <h3> {meal.strMeal} </h3>
                      <p> {meal.strArea} </p>

                    </div>

                ))}

          </div>

      </div>
    
    </>

  )

}

export default App
