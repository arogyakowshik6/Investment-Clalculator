import Header from './components/Header.jsx'
import './App.css'
import {UserInput }from './components/UserInput.jsx'
import {useState} from "react"
function App() {
    const [inputCust, setInputCust] = useState ({
      BegInvestments: 40000,
      AnnInvestments : 12000,
      returnInv : 7,
      yearInv :38
initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
  
    })
    function callUserInput(inputIde, val){
    setInputCust((prev)=>({
      ...prev,
      [inputIde] : val
    }))
  }
  
  return (
    <>
      <Header />
      <UserInput  inputCust = {inputCust} onChangeCustInput = {callUserInput} />
      {/* additional components goes here */}
    </>
  )
}

export default App
