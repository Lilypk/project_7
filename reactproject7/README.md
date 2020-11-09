# Countries React 

## Description 

Countries React is a project where I built a front end application using React. Using data from a Countries API, you can view the five countries I have selected, create a new country, update a county, and delete a country. 

## Example

Below is an example from my Country.js file. It shows the form that was made to display each countries name, capital, region, and language. 
        <form>
            <label>
          <input value= {this.props.country.name} />
          <input value= {this.props.country.capital} />
          <input value= {this.props.country.region} />
          <input value= {this.props.country.languages[0].name} />
          <input value= {this.props.country.languages[0].nativeName} />
          <button>Delete</button>
            </label>
        </form>

## Features

To start this project I first made a fetch call to the API I created in my previous project. I then created my basic components to get what I needed onto the page. After everything was working, I then created more components to create CRUD functionality. 

## Technologies

For this project, I used React to build my front end to my previous back end project. 

### Installing





## Authors

https://github.com/Lilypk/project_7

https://github.com/Lilypk/project_7/issues



