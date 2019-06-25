import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div style={{ backgroundColor: this.props.color, width: this.props.width, height: this.props.height }}>
                <h3>Box Here</h3>
            </div>
        )
    }
}

export default Box;