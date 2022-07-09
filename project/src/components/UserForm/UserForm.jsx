import React from "react";
import { Form } from "rsuite";

const UserForm = ({
  user,
  onUpdateName,
  onUpdateEmail,
  onUpdatePhone,
  onUpdateAddress,
}) => (
  <Form fluid>
    <Form.Group controlId="address">
      <Form.ControlLabel>Address:</Form.ControlLabel>
      <Form.Control
        name="address"
        value={user.address}
        onChange={(e) => onUpdateAddress(e)}
      />
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email:</Form.ControlLabel>
      <Form.Control
        name="email"
        type="email"
        value={user.email}
        onChange={(e) => onUpdateEmail(e)}
      />
    </Form.Group>
    <Form.Group controlId="phone">
      <Form.ControlLabel>Phone:</Form.ControlLabel>
      <Form.Control
        name="phone"
        type="tel"
        value={user.phone}
        onChange={(e) => onUpdatePhone(e)}
      />
    </Form.Group>
    <Form.Group controlId="name">
      <Form.ControlLabel>Name:</Form.ControlLabel>
      <Form.Control
        name="name"
        value={user.name}
        onChange={(e) => onUpdateName(e)}
      />
    </Form.Group>
  </Form>
);

export default UserForm;
