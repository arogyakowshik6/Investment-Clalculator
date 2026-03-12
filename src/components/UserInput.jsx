import React from 'react'
import '../App.css'

const UserInput = () => {
  return(
    <section id = "user-input">
      <div className = "input-group" >
        <p>
          <label>Beginning Investments</label>
          <input Type = "number"></input>
        </p>
        <p>
          <label>Annual Investment </label>
          <input Type = "number"></input>
        </p>
        <p>
          <label>Return expected</label>
          <input Type = "number"></input>
        </p>
        <p>
          <label>Yearly Investment</label>
          <input Type = "number"></input>
        </p>
      </div>
        
    </section>
  ) 
}

export default UserInput