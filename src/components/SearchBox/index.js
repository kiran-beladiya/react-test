import React from 'react';
import { FormControl } from 'react-bootstrap';

const SearchBox = () => {
    return (
        <div className={'mb-3'}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </div>
    );
};

export default SearchBox;