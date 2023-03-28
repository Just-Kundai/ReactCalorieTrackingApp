import React, { useState, useEffect } from "react";
import './App.css';
import AppBar from './components/AppBar/AppBar'
import AppControlsCounter from './components/AppControls/AppControlsCounter'
import AppControlsDelete from './components/AppControls/AppControlsDelete'
import AppControlsInputs from './components/AppControls/AppControlsInputs'
import AppMealsList from './components/AppMealsList/AppMealsList'

const App = () => {
  const[meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);

const addMealsHandler = () => {
  //whats supposed to happen when adding a meals
  const oldMeals = [...meals];
  const meal = {
    mealName,
    calories,
    id:Math.floor(Math.random() * 1000),
  }

  const newMeals = oldMeals.concat(meal);

  setMeals(newMeals);

  //the if condition limits how easily I can add meals

  if(calories <= 0 || mealName === ""){
    alert("must not be empty")
  }
    else{
      setMeals(newMeals)
    }

    setMealName("");
    setCalories(0);

};





  return (
    <div className="App">
      <AppBar/>
      <AppControlsCounter/>
      <AppControlsDelete/>
      <AppControlsInputs addMealsHandler= { addMealsHandler } mealName={mealName} calories={calories} setMealName={setMealName} setCalories={setCalories}/>

    </div>
  );
}

export default App;
