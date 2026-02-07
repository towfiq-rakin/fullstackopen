import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Info = (props) => <p>{props.text} {props.value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    console.log('new good value', newValue)
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    console.log('new neutral value', newValue)
    setNeutral(newValue)
  }

  const setTobad = (newValue) => {
    console.log('new bad value', newValue)
    setBad(newValue)
  }

  const avarage = () => {
    const score = good - bad
    const total = good + neutral + bad
    return score/total
  }

  const positive = () => {
    const total = good + neutral + bad 
    if (total === 0) return '0 %'
    const percentage = (good / total)*100
    return percentage + ' %'
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button onClick={()=>setToGood(good + 1)} text='good' />
        <Button onClick={()=>setToNeutral(neutral + 1)} text='neutral' />
        <Button onClick={()=>setTobad(bad + 1)} text='bad' />
      </div>
      <h1>Statistics</h1>
      <Info text='good' value={good} ></Info>
      <Info text='neutral' value={neutral} ></Info>
      <Info text='bad' value={bad} ></Info>
      <Info text='all' value={good+neutral+bad}/>
      <Info text='average' value={avarage()} />
      <Info text='positive' value={positive()} />
    </div>
  )
}

export default App