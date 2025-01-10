import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  const all = good + bad + neutral
  let avg = 0
  let pos = 0
  if (all != 0){
    avg = (good - bad)/all
    pos = (good/all)*100
  }


  if (all == 0) return(<p>No feedback given</p>)
  return(
    <table>
      <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" value={`${pos}%`}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setFeedback = (feedback) => {
    if (feedback === "good"){
      return setGood(good + 1)
    }
    else if (feedback === "bad"){
      return setBad(bad + 1)
    }
    
    return setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setFeedback("good")} text="good" />
      <Button handleClick={() => setFeedback("neutral")} text="neutral" />
      <Button handleClick={() => setFeedback("bad")} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App