import React from 'react';
import { Form } from 'react-bootstrap';

const CheckBox = () => {
    return (
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Only even" />
        </Form.Group>
    );
};

export default CheckBox;