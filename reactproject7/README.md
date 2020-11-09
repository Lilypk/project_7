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

To set up this project you will first need to fork my repo by clicking on Fork in the top right corner and choosing where to fork to. Then you will click Clone or Download and copy the url. Next open your terminal and change to the directory you wish to work on the project. Here you will run the command 'git clone' followed by pasting the url you just copied. Hit enter. You can now change to the project directory then change to the reactproject7 directory. Run the command npm start and this will bring you to the project in your chrome. 

## Authors

https://github.com/Lilypk/project_7

https://github.com/Lilypk/project_7/issues



