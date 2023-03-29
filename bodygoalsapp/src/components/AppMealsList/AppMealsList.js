import React from 'react'

const AppMealsList = ({meals}) => {
    return (
        <div className="app__meals__container__wrapper">
           {meals.map ((meals,index) =>(

             <div key={index} className= "app__meals__container__wrapper__inner">
                <div>(`${meals.mealName} : ${meals.calories}`)</div>
                <div>
                   <button className="btn__delete__meal">Delete</button>
                </div>
             </div>
           ))}

        </div>
    )
  }


export default AppMealsList;
