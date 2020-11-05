import { render } from "@testing-library/react";
import React from "react";
import "./Country.css";
import Popover from "react-bootstrap/popover";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import 'bootstrap/dist/css/bootstrap.min.css'; 
class Country extends React.Component {
  constructor() {
    super();
   
  }

  render() {
      console.log(this.props)
    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Popover right</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );
    return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
    );
  }
}
export default Country;
