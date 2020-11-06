import { render } from "@testing-library/react";
import React from "react";
import "./Country.css";
import Popover from "react-bootstrap/popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
class Country extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    console.log(this.props);
    const popover = (
      <Popover id="popover-basic" className='popover'>
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          {this.props.country.name}
          {this.props.country.capital}
          {this.props.country.region}
          {this.props.country.languages[0].name}
          {this.props.country.languages[0].nativeName}
        </Popover.Content>
      </Popover>
    );
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success" className='buttons'>{this.props.country.name}</Button>
      </OverlayTrigger>
    );
  }
}
export default Country;
