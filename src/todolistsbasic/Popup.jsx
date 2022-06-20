import React from 'react'
import { NavLink } from 'react-router-dom';

const Popup=(props)=>{


    return(
        <>
           <div className='popup'>
              <p>Are you sure? Do you want to delete all listesd items</p>
              <NavLink to='/' onClick={props.fun}>Yes, Continue</NavLink>
              <NavLink to='/'>No, back</NavLink>
           </div>
        </>
    )
}
export default Popup;