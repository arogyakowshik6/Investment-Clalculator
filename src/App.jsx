import Header from './components/Header.jsx'
import './App.css'
import {UserInput }from './components/UserInput.jsx'
import {useState} from "react"
import { Output } from './components/Output.jsx'
import { calculateInvestmentResults } from './util/investments.js'
import { generatePDF } from './util/generatereport.js'
function App() {
    const [inputCust, setInputCust] = useState ({
      initialInvestment: 40000,
      annualInvestment : 12000,
      expectedReturn: 7,
      duration :38
      
  
    })
    const userEnterValid = inputCust.duration >=1
    function handlegeneratePDF(){
      const resdata = calculateInvestmentResults(inputCust);
      generatePDF({...inputCust, result:resdata})
    }
    function callUserInput(inputIde, val){
    setInputCust((prev)=>({
      ...prev,
      [inputIde] : +val
    }))
  }
  
  return (
    <>
      <Header />
      <UserInput  inputCust = {inputCust} onChangeCustInput = {callUserInput} />
      {!userEnterValid && <p >PLease ensure the years invested is more than 1</p>}
      {userEnterValid &&<Output inputval = {inputCust}/>}
      <div>
        <button onClick={handlegeneratePDF}>Download PDF Report</button>
      </div>
    </>
  )
}

export default App
