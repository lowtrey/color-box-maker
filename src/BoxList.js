import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
    render() {
        return(
            <div>
                <NewBoxForm />
                <Box />
            </div>
        )
    }
}

export default BoxList;