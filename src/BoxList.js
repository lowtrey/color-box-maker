import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boxes: []};
        this.addBox = this.addBox.bind(this);
    }
    addBox(newBox) {
        this.setState({boxes: [...this.state.boxes, newBox]});
    }
    render() {
        const boxes = this.state.boxes.map((box) => (
            <Box 
                width={box.width} 
                height={box.height} 
                color={box.color} 
            />
        ));
        return(
            <div>
                <h1>Color Box Maker</h1>
                <h5>Enter details below:</h5>
                <NewBoxForm addBox={this.addBox} />
                {boxes}
            </div>
        )
    }
}

export default BoxList;