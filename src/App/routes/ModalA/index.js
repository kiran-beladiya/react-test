import React, { Component } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import SearchBox from '../../../components/SearchBox';
import CheckBox from '../../../components/CheckBox';
import { contactsList } from '../../../redux/actions';
import { connect } from "react-redux";
import '../../../styles/base.scss';

const mapDispatchToProps = (dispatch) => {
    return {
        contactList: () => dispatch(contactsList())
    };
};

class ModalA extends Component {

    componentDidMount() {
        this.props.contactList();
    }

    render() {
        const { showModalA, handleCloseModalA } = this.props;
        return (
            <Modal onShow={showModalA} onHide={handleCloseModalA}
                Body={
                    <>
                        <SearchBox />
                        <div className={'d-flex justify-content-between'}>
                            <Button variant="secondary" btnClass={'buttonA'} btnTitle={'All Contacts'} clicked={handleCloseModalA} />
                            <Button variant="primary" btnClass={'buttonB'} btnTitle={'US Contacts'} clicked={handleCloseModalA} />
                            <Button variant="primary" btnClass={'buttonC'} btnTitle={'Close'} clicked={handleCloseModalA} />
                        </div>
                    </>
                }
                Footer={<CheckBox />}
            />
        );
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ModalA);