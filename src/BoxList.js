import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {width: 100, height: 100, color: 'blue'},
                {width: 100, height: 100, color: 'blue'}
            ]
        };
        this.addBox = this.addBox.bind(this);
    }
    addBox(box) {
        this.setState((prevState) => ({boxes: [...prevState.boxes, box]}));
    }
    render() {
        let boxRender = this.state.boxes.map((box) => <Box width={box.width} height={box.height} color={box.color} />);
        return(
            <div>
                <NewBoxForm addBox={this.addBox} />
                {boxRender}
            </div>
        )
    }
}

export default BoxList;