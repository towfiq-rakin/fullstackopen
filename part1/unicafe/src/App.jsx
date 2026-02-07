import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Info = (props) => <p>{props.text} {props.value}</p>

const Statistics = (props) => {
  const total = props.value1 + props.value2 + props.value3
  if(total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>Statistics</h1>
        <p>{props.text1} {props.value1}</p>
        <p>{props.text2} {props.value2}</p>
        <p>{props.text3} {props.value3}</p>
        <p>{props.text4} {total}</p>
        <p>{props.text5} {props.value5}</p>
        <p>{props.text6} {props.value6}</p>
      </div>
    )
  }
}

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
      <Statistics 
        text1='good' value1={good}
        text2='neutral' value2={neutral}
        text3='bad' value3={bad}
        text4='all' value4={good + neutral + bad}
        text5='average' value5={avarage()}
        text6='positive' value6={positive()}
      />
    </div>
  )
}

export default App