import React, { useState, useEffect } from "react";
import './App.css';
import AppBar from './components/AppBar/AppBar'
import AppControlsCounter from './components/AppControls/AppControlsCounter'
import AppControlsDelete from './components/AppControls/AppControlsDelete'
import AppControlsInputs from './components/AppControls/AppControlsInputs'
import AppMealsList from './components/AppMealsList/AppMealsList';
import AppModal from './components/AppModal/AppModal';

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
    id: Math.floor(Math.random() * 1000),
  }

  const newMeals = oldMeals.concat(meal);

  setMeals(newMeals);

  //the if condition limits how easily I can add meals

  if(calories < 0 || mealName === ""){
    setOpenModal(true);

  }
    else{
      setMeals(newMeals)
    }

    setMealName("");
    setCalories(0);

};

//for deleting the meal
const deleteMealHandler = (id) => {
  const oldMeals = [...meals];//spread the meals we have
  const newMeals = oldMeals.filter((meals)=> meals.id !== id);

  setMeals(newMeals);
};

const deleteAllMealsHandler = () => {
  setMeals([]);

};

const total = meals
.map(({ calories }) => calories)
.reduce((acc, value) => acc + +value, 0);






  return (
    <div className="App">
      <AppBar/>
      {openModal ? <AppModal setOpenModal={setOpenModal} /> : " "}
      <AppControlsCounter total = {total}/>
      <AppControlsDelete
      meals={meals}
      deleteAllMealsHandler={deleteAllMealsHandler}

      />
      <AppControlsInputs
      addMealsHandler= { addMealsHandler } mealName={mealName}
      calories={calories}
      setMealName={setMealName} setCalories={setCalories}
      />

      <div className="app__meals__container">
      <AppMealsList

      deleteMealHandler= {deleteMealHandler}/>
      </div>

    </div>
  );
}

export default App;
