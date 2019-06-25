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
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }
    render() {
        const boxes = this.state.boxes.map((box) => (
            <Box 
                key={box.id}
                id={box.id}
                width={box.width} 
                height={box.height} 
                color={box.color}
                removeBox={() => this.remove(box.id)}
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