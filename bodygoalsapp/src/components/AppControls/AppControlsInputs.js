import React from 'react'

const  AppControlsInputs = ({ addMealsHandler}) => {
  const onAddMealsClick = ()=>{
    addMealsHandler()
  }
    return (
        <div className= "app__controls">
        <div className= "app__controls__inputs">
         <input type="text"
         placeholder="Meal"
         value=""
         />

         <input type="number"
         placeholder="Calories"
         />

         <button onClick={onAddMealsClick}> Add Meal </button>




        </div>
        </div>
    )
}

export default AppControlsInputs
