import React from 'react'
import { calculateInvestmentResults , formatter } from '../util/investments';
export function Output({inputval}){
    console.log(inputval)
    const resdata =calculateInvestmentResults(inputval)
    
    return <table id = "table">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment</th>
                <th>Interest</th>
                <th>Total Interest</th>
                <th>Total Amount investement</th>





            </tr>
        </thead>
        <tbody>
            {
                resdata.map(yeardata =>{
                    return <tr key = {yeardata.year}>
                        <td>{yeardata.year}</td>
                        <td>{formatter.format(yeardata.investmentValue)}</td>
                        <td>{formatter.format(yeardata.interest)}</td>
                        <td>{formatter.format(yeardata.totalInterest)}</td>
                        <td>{formatter.format(yeardata.investedCapital)}</td>
                    </tr>
                })
            }
        </tbody>

    </table>
}





