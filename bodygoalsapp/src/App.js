import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from './components/AppBar/AppBar'
import AppControlsCounter from './components/AppControls/AppControlsCounter'
import AppControlsDelete from './components/AppControls/AppControlsDelete'
import AppControlsInputs from './components/AppControls/AppControlsInputs'

const App = () => {
  const[meals,setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories,setCalories] = useState(0);
  const[openModal, setOpenModal] = useState(false);

const addMealsHandler = () =>{

};





  return (
    <div className="App">
      <AppBar/>
      <AppControlsCounter/>
      <AppControlsDelete/>
      <AppControlsInputs addMealsHandler= { addMealsHandler } mealName={mealName} calories={calories}/>
    </div>
  );
}

export default App;
