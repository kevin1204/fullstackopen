
import React from "react"
import { useState } from "react"

const Statistics = props => {
  const sum = props.good + props.neutral + props.bad

  if (sum == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='all' value={props.good + props.neutral + props.bad}/>
        <StatisticLine text='average' value={(props.good - props.bad)/sum}/>
        <StatisticLine text='positive' value={(props.good)/sum*100 + ' %'}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
