import React , {useState}from 'react'

import '../App.css'


export const UserInput = () => {
  const [inputCust, setInputCust] = useState ({
    BegInvestments: 40000,
    AnnInvestments : 12000,
    returnInv : 7,
    yearInv :38

  })
  function callUserInput(inputIde, val){
    setInputCust((prev)=>({
      ...prev,
      [inputIde] : val
    }))
  }
  return(
    <section id = "user-input">
      <div className = "input-group" >
        <p>
          <label>Beginning Investments</label>

          <input Type = "number" value ={inputCust.BegInvestments}required onChange = {()=> callUserInput('BegInvestemnt'.e.target.value)}/>
        </p>
        <p>
          <label>Annual Investment </label>
          <input Type = "number" value = {inputCust.AnnInvestments}required onChnage = {()=> callUserInput ('AnnInvestments'.e.target.value)}/>
        </p>
        <p>
          <label>Return expected</label>
          <input Type = "number" value = {inputCust.returnInv}required onChange = {()=> callUserInput ('returnInv'.e.target.value)}/>
        </p>
        <p>
          <label>Yearly Investment</label>
          <input Type = "number"value = {inputCust.yearInv} required onChange = {()=> callUserInput ('yearInv'.e.target.value)}/>
        </p>
      </div>
        
    </section>
  ) 
}

export default UserInput