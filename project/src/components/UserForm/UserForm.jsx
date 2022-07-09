import React, { useState } from "react";
import { Form, ButtonToolbar, Button } from "rsuite";

const UserForm = () => {
  const [user, setUser] = useState({
    address: null,
    email: null,
    phone: null,
    name: null,
  });

  const onUserChange = (name, value) => setUser({ ...user, [name]: value });
console.log(user)
  return (
    <Form>
      <Form.Group controlId="address">
        <Form.ControlLabel>Address:</Form.ControlLabel>
        <Form.Control name="address" value={user.address} onChange={(e) => onUserChange('address', e)}/>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.ControlLabel>Email:</Form.ControlLabel>
        <Form.Control name="email" type="email" value={user.email} onChange={(e) => onUserChange('email', e)}/>
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.ControlLabel>Phone:</Form.ControlLabel>
        <Form.Control name="phone" type="tel" value={user.phone} onChange={(e) => onUserChange('phone', e)} />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.ControlLabel>Name:</Form.ControlLabel>
        <Form.Control name="name" value={user.name} onChange={(e) => onUserChange('name', e)}/>
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Submit</Button>
          <Button appearance="default">Cancel</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
};

export default UserForm;
