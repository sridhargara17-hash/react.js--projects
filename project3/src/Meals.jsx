import axios from 'axios'
import { useState,useEffect } from 'react'
import "./style.css"
const Meals = () => {
const [data,setData] = useState([])
useEffect(()=>{
axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").
then((res)=>{
    // console.log(res.data.meals);
    const Data =res.data.meals
  setData(Data)
})
},[]);
  return (
    <div className='main'>
{data.map((meal) => (
        <div className="second"  key={meal.idMeal}>
          <img  src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  )
}

export default Meals