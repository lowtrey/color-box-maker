import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {width: '100px', height: '100px', color: 'blue'},
                {width: '100px', height: '100px', color: 'blue'}
            ]
        };
        this.renderBoxes = this.renderBoxes.bind(this);
    }
    renderBoxes() {
        return this.state.boxes.map((box) => <Box width={box.width} height={box.height} color={box.color} />);
    }
    render() {
        return(
            <div>
                <NewBoxForm />
                {this.renderBoxes()}
            </div>
        )
    }
}

export default BoxList;