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
        <div className="body">
          <header>Countries</header>
          <main>
            {!this.state.countryList
              ? ""
              : this.state.countryList.map((country) => {
                  return <Country country={country} />;
                })}
          </main>
        </div>
      </div>
    );
  }
}
export default App;
