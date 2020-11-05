import React from 'react'
import './App.css'
import Country from './Country'

class App extends React.Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    fetch('http://localhost:9002')
      .then(res=>res.json())
      .then(res=>console.log(res))

  }
  render() {
    return null
  }
}
export default App
