import React from 'react';
import {
    Route,
} from "react-router-dom";
const Routes = () => {
    return (
        <div>
            <Route path="/" />
            <Route path="/modal-a" />
            <Route path="/modal-b" />
        </div>
    );
};

export default Routes;