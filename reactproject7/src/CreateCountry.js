import React from 'react'

const CreateCountry = props => {
  console.log(props)
    return (
      <form>
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
          <input type="text" name="Language Name" placeholder='Language Name:' value={props.languages[0].name} onChange={ props.handleInputChange} />
        </div>
        <div>
          <label></label>
          <input type="text" name="Language Native Name" placeholder='Language Native Name:' value={props.languages[0].nativeName} onChange={ props.handleInputChange} />
        </div>
        
        <button onClick={props.addNewCountry}>Add a Country!</button>
      </div>


      </form>
    )
}

export default CreateCountry 