import React from 'react';
import Button from '../../components/Button';
import { Form, FormControl } from 'react-bootstrap';
import Modal from '../../components/Modal';
import { withRouter } from "react-router";
import { contactsList } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import '../../styles/base.scss';
// import axios from '../../utils/Api';
// import { token } from '../../constants';

const Dashboard = (props) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(contactsList);
        // axios.defaults.headers.common['Authorization'] = token;
        // axios.get('contacts.json')
        //     .then(response => {
        //         debugger
        //         // dispatch({
        //         //     type: actionTypes.FETCH_USERS,
        //         //     payload: response.data.data
        //         // });
        //     })
        //     .catch(error => {
        //         debugger
        //         // dispatch({
        //         //     type: actionTypes.FETCH_USERS_FAILED,
        //         //     payload: error
        //         // });
        //     })
    }, [dispatch]);

    const [showModalA, setShowModalA] = React.useState(false);
    const [showModalB, setShowModalB] = React.useState(false);

    const handleCloseModalB = () => {
        props.history.push("/")
        setShowModalB(false)
    };

    const handleCloseModalA = () => {
        props.history.push("/")
        setShowModalA(false)
    };

    const handleShowModalA = () => {
        props.history.push("modal-a")
        setShowModalA(true)
    };

    const handleShowModalB = () => {
        props.history.push("modal-b")
        setShowModalB(true)
    };

    return (
        <div className='buttonDiv'>
            <Button btnTitle={'Button A'} btnClass={'buttonA'} clicked={handleShowModalA} />
            <Button btnTitle={'Button B'} btnClass={'buttonB'} clicked={handleShowModalB} />

            <Modal onShow={showModalA} onHide={handleCloseModalA}
                Body={
                    <>
                        <div className={'mb-3'}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </div>
                        <div className={'d-flex justify-content-between'}>
                            <Button variant="secondary" btnClass={'buttonA'} btnTitle={'All Contacts'} clicked={handleCloseModalA} />
                            <Button variant="primary" btnClass={'buttonB'} btnTitle={'US Contacts'} clicked={handleCloseModalA} />
                            <Button variant="primary" btnClass={'buttonC'} btnTitle={'Close'} clicked={handleCloseModalA} />
                        </div>
                    </>
                }
                Footer={
                    <>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Only even" />
                        </Form.Group>
                    </>
                }
            />

            <Modal onShow={showModalB} onHide={handleCloseModalB}
                Body={
                    <>
                        <div className={'mb-3'}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </div>
                        <div className={'d-flex justify-content-between'}>
                            <Button variant="secondary" btnClass={'buttonA'} btnTitle={'All Contacts'} clicked={handleCloseModalB} />
                            <Button variant="primary" btnClass={'buttonB'} btnTitle={'US Contacts'} clicked={handleCloseModalB} />
                            <Button variant="primary" btnClass={'buttonC'} btnTitle={'Close'} clicked={handleCloseModalB} />
                        </div>
                    </>
                }
                Footer={
                    <>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Only even" />
                        </Form.Group>
                    </>
                }
            />

        </div>
    );
};

export default withRouter(Dashboard);