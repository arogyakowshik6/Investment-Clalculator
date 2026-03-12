import React , {useState}from 'react'

import '../App.css'


export const UserInput = ({inputCust,OnChangeCustInput}) => {
 
  
  return(
    <section id = "user-input">
      <div className = "input-group" >
        <p>
          <label>Beginning Investments</label>

          <input Type = "number" value ={inputCust.BegInvestments}required onChange = {(e)=> OnChangeCustInput('BegInvestemnt'.e.target.value)}/>
        </p>
        <p>
          <label>Annual Investment </label>
          <input Type = "number" value = {inputCust.AnnInvestments}required onChnage = {(e)=> OnChangeCustInput('AnnInvestments'.e.target.value)}/>
        </p>
        <p>
          <label>Return expected</label>
          <input Type = "number" value = {inputCust.returnInv}required onChange = {(e)=> OnChangeCustInput ('returnInv'.e.target.value)}/>
        </p>
        <p>
          <label>Yearly Investment</label>
          <input Type = "number"value = {inputCust.yearInv} required onChange = {(e)=> OnChangeCustInput ('yearInv'.e.target.value)}/>
        </p>
      </div>

      <button >Reset values</button>
        
    </section>
  ) 

}
export default UserInput