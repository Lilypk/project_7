import React from "react";
import "./App.css";
import Country from "./Country";
import CreateCountry from "./CreateCountry";
import UpdateCountry from "./UpdateCountry";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newCountry: {
        name: "",
        capital: "",
        region: "",
        languages: [
          {
            name: "",
            nativeName: "",
          },
        ],

      },

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewCountry = this.addNewCountry.bind(this);
    // this.updateCountry = this.updateCountry.bind(this);
    // this.deleteCountry = this.deleteCountry.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;
    
    console.log(name)
    this.setState({
      newCountry: { [event.target.name]: value }

      // updateCountry: { [name]: value },
      // deleteCountry: { [name]: value },
    });
    
  }
  //created an event listener on addNewCountry button
  addNewCountry(e) {
    e.preventDefault();
    let url = "https://project-6-use-hero.herokuapp.com/countries";
    let formData = new FormData();
    formData.append("name", this.state.newCountry.name);
    formData.append("capital", this.state.newCountry.capital);
    formData.append("region", this.state.newCountry.region);
    // formData.append(
    //   "languages[0].name",
    //   this.state.newCountry.languages[0].name
    // );
    // formData.append(
    //   "languages[0].nativeName",
    //   this.state.newCountry.languages[0].nativeName
    // );
    console.log(this.state.newCountry.name)
    console.dir(formData)
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }
  // updateCountry(e) {
  //   e.preventDefault();
  //   let url = "https://project-6-use-hero.herokuapp.com/countries/:id";
  //   let updateFormData = new UpdateFormData();
  //   updateFormData.append("name", this.state.updateCountry.name);
  //   updateFormData.append("capital", this.state.updateCountry.capital);
  //   updateFormData.append("region", this.state.updateCountry.region);
  //   updateFormData.append(
  //     "languages[0].name",
  //     this.state.updateCountry.languages[0].name
  //   );
  //   updateFormData.append(
  //     "languages[0].nativeName",
  //     this.state.updateCountry.languages[0].nativeName
  //   );
  //   fetch(url, { method: "PUT", body: updateFormData })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }
  // deleteCountry(e) {
  //   e.preventDefault()
  //   let url = 'https://project-6-use-hero.herokuapp.com/countries/:id'
  //   let deleteFormData = new DeleteFormData()
  //   fetch(url, { method: 'DELETE', body: deleteFormData })
  //   .then((res)=>res.json())
  //   .then((res)=>{
  //     console.log(res)
  //   })
  // }

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
             <CreateCountry
              handleInputChange={this.handleInputChange}
              addNewCountry={this.addNewCountry}
              
            />
            {/* <UpdateCountry
              handleInputChange={this.handleInputChange}
              updateCountry={this.updateCountry}
            /> */} 
          </main>
        </div>
      </div>
    );
  }
}
export default App;
