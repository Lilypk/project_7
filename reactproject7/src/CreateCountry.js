import React from "react";

const CreateCountry = (props) => {
  console.log(props);
  return (
    <form>
      <div>
        <div>
          <label></label>
          <input
            type="text"
            //country name
            name="name"
            placeholder="Name:"
            
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            name="capital"
            placeholder="Capital:"
           
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            name="region"
            placeholder="Region:"
            
            onChange={props.handleInputChange}
          />
        </div>
        {/* <div>
          <label></label>
          <input
            type="text"
            name="languages.name"
            placeholder="Language Name:"
            onChange={props.handleInputChange}
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            name="Language Native Name"
            placeholder="Language Native Name:"
            onChange={props.handleInputChange}
          />
        </div> */}

        <button className="newbutton" onClick={props.addNewCountry}>
          Add a Country!
        </button>
      </div>
    </form>
  );
};

export default CreateCountry;
