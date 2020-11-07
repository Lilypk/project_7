import React from "react";
import "./App.css";
import Country from "./Country";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:9002/countries/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countryList: data });
        console.log(this.state.countryList);
      });
  }
  render() {
    return (
      <div className="container">
        <div 
        style={{
          backgroundImage: `url('https://www.magical-planet.com/wp-content/uploads/2017/12/amsterdam-canals-house-boats-holland-netherlands-bike-boat-tour-flsergeygalyonkin.jpg')`, 
          backgroundRepeat: 'no-repeat', height: '100%', width: '676px'
        }}>

        </div>
        <div className="body">
          <header>Countries</header>
          <main>
            {!this.state.countryList
              ? ""
              : this.state.countryList.map((country) => {
                  return <Country country={country} />;
                })}
            <form>
              <label>
              <button className="buttons creatbutton">Add a country!</button>
              <input placeholder='Name:'></input>
              <input placeholder='Capital:'></input>
              <input placeholder='Region:'></input>
              <input placeholder='Language Name:'></input>
              <input placeholder='Native Name:'></input>
            
            
            </label>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
export default App;
