import React , {useState}from 'react'

import '../App.css'


export const UserInput = ({inputCust,onChangeCustInput}) => {
 
  
  return(
    <section id = "user-input">
      <div className = "input-group" >
        <p>
          <label>Beginning Investments</label>

          <input type = "number" value ={inputCust.initialInvestment}required onChange = {(e)=> onChangeCustInput('initialInvestment',e.target.value)}/>
        </p>
        <p>
          <label>Annual Investment </label>
          <input type = "number" value = {inputCust.annualInvestment}required onChange = {(e)=> onChangeCustInput('annualInvestment',e.target.value)}/>
        </p>
        <p>
          <label>Return expected</label>
          <input type = "number" value = {inputCust.expectedReturn}required onChange = {(e)=> onChangeCustInput ('expectedReturn',e.target.value)}/>
        </p>
        <p>
          <label>Yearly Investment</label>
          <input type = "number"value = {inputCust.duration} required onChange = {(e)=> onChangeCustInput ('duration',e.target.value)}/>
        </p>
      </div>

        
    </section>
  ) 

}
export default UserInput