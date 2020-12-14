import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = (props) => {
    return (
        <Modal show={props.onShow} onHide={props.onHide}>
            <Modal.Body>
                {props.Body}
            </Modal.Body>
            <Modal.Footer>
                {props.Footer}
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;