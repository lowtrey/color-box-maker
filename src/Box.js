import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div style={{margin: '10px', backgroundColor: this.props.color, width: Number(this.props.width), height: Number(this.props.height)}}>
            </div>
        )
    }
}

export default Box;