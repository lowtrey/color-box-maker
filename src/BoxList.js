import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
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