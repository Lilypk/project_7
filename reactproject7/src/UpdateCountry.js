import React from 'react'

const UpdateCountry = props => {
    return (
        <form>
      <div>
        <label></label>
        <input type="text" name="Name" value={props.name} onChange={ props.handleInputChange}/>
      </div>
      <div>
        <label></label>
        <input type="text" name="Capital" value={props.capital} onChange={ props.handleInputChange} />
      </div>
      <div>
        <label></label>
        <input type="text" name="Region" value={props.region} onChange={ props.handleInputChange} />
      </div>
      <div>
        <label></label>
        <input type="text" name="Language Name" value={props.languageName} onChange={ props.handleInputChange} />
      </div>
      <div>
        <label></label>
        <input type="text" name="Language Native Name" value={props.languageNativeName} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateCountry } > Update </button>
      
    </form>
    )
}

export default UpdateCountry