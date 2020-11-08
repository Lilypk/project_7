import React from "react";
import "./App.css";
import Country from "./Country";

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
          <header>Countries</header>
          <main>
            {!this.state.countryList
              ? ""
              : this.state.countryList.map((country) => {
                  return <Country country={country} />;
                })}
            <form onSubmit={this.state.newCountry}>
              <label>
                <input type='text' name="Name:" value={this.state.name} placeholder='Name:'></input>
                <input placeholder="Capital:"></input>
                <input placeholder="Region:"></input>
                <input placeholder="Language Name:"></input>
                <input placeholder="Language Native Name:"></input>
                <input type="submit" value="Submit" />
              </label>
              <div>
                <button className="buttons creatbutton">Add a country!</button>
              </div>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
export default App;
