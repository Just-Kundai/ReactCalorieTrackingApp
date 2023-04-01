import React from 'react'

const AppModal = ({setOpenModal})=>{
    return (
        <div className="app__modal">
        <h3> Calories must be bigger than 0 and meal name cannot be blank </h3>
        <button className="btn__close__modal" onClick={()=> setOpenModal(false)}> Close </button>

        </div>
    )
}

export default AppModal;
