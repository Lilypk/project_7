import React from 'react'

const CreateCountry = props => {
    return (
      <form onSubmit={props.addNewCountry}>
<div>
        <div>
          <label></label>
          <input type="text" name="Name" placeholder='Name:' value={props.name} onChange={ props.handleInputChange}/>
        </div>
        <div>
          <label></label>
          <input type="text" name="Capital" placeholder='Capital:' value={props.capital} onChange={ props.handleInputChange} />
        </div>
        <div>
        <label></label>
          <input type="text" name="Region" placeholder='Region:' value={props.region} onChange={ props.handleInputChange} />
        </div>
        <div>
          <label></label>
          <input type="text" name="Language Name" placeholder='Language Name:' value={props.languageName} onChange={ props.handleInputChange} />
        </div>
        <div>
          <label></label>
          <input type="text" name="Language Native Name" placeholder='Language Native Name:' value={props.languageNativeName} onChange={ props.handleInputChange} />
        </div>
        
        <button>Add a Country!</button>
      </div>


      </form>
    )
}

export default CreateCountry 