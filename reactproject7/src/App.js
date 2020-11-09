import React from "react";
import "./App.css";
import Country from "./Country";
import CreateCountry from './CreateCountry'
import UpdateCountry from './UpdateCountry'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newCountry: {
        name: "",
        capital: "",
        region: "",
        languageName: "",
        languageNativaName: "",
      },
    };
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.addNewCountry = this.addNewCountry.bind(this)
    
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
        <div className="body">
          <img
            className="image"
            src="https://www.magical-planet.com/wp-content/uploads/2017/12/amsterdam-canals-house-boats-holland-netherlands-bike-boat-tour-flsergeygalyonkin.jpg"
          />
          <header></header>
          <main>
            {!this.state.countryList
              ? ""
              : this.state.countryList.map((country) => {
                  return <Country country={country} />;
                })}
                <CreateCountry />
                <UpdateCountry />
           
          </main>
        </div>
      </div>
    );
  }
}
export default App;
