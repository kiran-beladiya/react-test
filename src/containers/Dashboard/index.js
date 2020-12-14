import React, { Component } from 'react';
import Button from '../../components/Button';
import ModalA from '../../App/routes/ModalA';
import ModalB from '../../App/routes/ModalB';
import { withRouter } from "react-router";
import '../../styles/base.scss';
class Dashboard extends Component {
    state = {
        showModalA: false,
        showModalB: false
    };

    handleCloseModalB = () => {
        this.props.history.push("/");
        this.setState({ showModalB: false });
    };

    handleCloseModalA = () => {
        this.props.history.push("/");
        this.setState({ showModalA: false });
    };

    handleShowModalA = () => {
        this.props.history.push("modal-a");
        this.setState({ showModalA: true });
    };

    handleShowModalB = () => {
        this.props.history.push("modal-b");
        this.setState({ showModalB: true });
    };

    render() {
        const { showModalA, showModalB } = this.state;
        return (
            <div className='buttonDiv'>

                <Button btnTitle={'Button A'} btnClass={'buttonA'} clicked={this.handleShowModalA.bind(this)} />
                <Button btnTitle={'Button B'} btnClass={'buttonB'} clicked={this.handleShowModalB.bind(this)} />

                <ModalA showModalA={showModalA} handleCloseModalA={this.handleCloseModalA.bind(this)} />
                <ModalB showModalB={showModalB} handleCloseModalB={this.handleCloseModalB.bind(this)} />

            </div>
        );
    };
};

export default withRouter(Dashboard);