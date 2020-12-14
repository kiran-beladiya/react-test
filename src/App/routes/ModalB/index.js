import React, { Component } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import SearchBox from '../../../components/SearchBox';
import CheckBox from '../../../components/CheckBox';
import '../../../styles/base.scss';

class ModalB extends Component {
    render() {
        const { showModalB, handleCloseModalB } = this.props;
        return (
            <Modal onShow={showModalB} onHide={handleCloseModalB}
                Body={
                    <>
                        <SearchBox />
                        <div className={'d-flex justify-content-between'}>
                            <Button variant="secondary" btnClass={'buttonA'} btnTitle={'All Contacts'} clicked={handleCloseModalB} />
                            <Button variant="primary" btnClass={'buttonB'} btnTitle={'US Contacts'} clicked={handleCloseModalB} />
                            <Button variant="primary" btnClass={'buttonC'} btnTitle={'Close'} clicked={handleCloseModalB} />
                        </div>
                    </>
                }
                Footer={<CheckBox />}
            />
        );
    };
};

export default ModalB;