import './App.css';
import { useState } from 'react'
import axios from 'axios'


function App() {
  const APIURL = 'https://api.nationalize.io/'
  const [firstNationality, setFirstNationality] = useState('')
  const [secondNationality, setSecondNationality] = useState('')
  const [thirdNationality, setThirdNationality] = useState('')
  const [fourthNationality, setFourthNationality] = useState('')
  const [fifthNationality, setFifthNationality] = useState('')

  const [inputValue, setInputValue] = useState('The person')

  function handleInputValue(e) {
    setInputValue(e.target.value)
  }

  function submitForm(e) {
    e.preventDefault()
    axios.get(APIURL, { params: { name: inputValue } })
      .then((res) => {
        setFirstNationality(res.data.country[0].country_id)
        setSecondNationality(res.data.country[1].country_id)
        setThirdNationality(res.data.country[2].country_id)
        setFourthNationality(res.data.country[3].country_id)
        setFifthNationality(res.data.country[4].country_id)
      })
      .catch((error) => console.error('Error!', error))
  }


  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input onChange={handleInputValue} value={inputValue} type='text' placeholder='Please enter a name...'></input>
        <button type='submit'>Check!</button>
      </form>
      <h2>
        {inputValue} might come from
        <ul>
          <li> {firstNationality}</li>
          <li> {secondNationality}</li>
          <li> {thirdNationality}</li>
          <li> {fourthNationality}</li>
          <li> {fifthNationality}</li>
        </ul>
      </h2>
    </div>
  );
}

export default App;
