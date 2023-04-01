import React from 'react'

 const AppControlsDelete =({deleteAllMealsHandler}) => {
    return (
        <div className="app__controls__delete">
        <button className="btn__delete_all" onClick={() => deleteAllMealsHandler()}> Delete All</button>

        </div>
    )
}

export default AppControlsDelete;
