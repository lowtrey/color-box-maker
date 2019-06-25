import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div>
                <div style={{
                    backgroundColor: this.props.color,
                    width: Number(this.props.width),
                    height: Number(this.props.height)
                    }}>
                </div>
                <button onClick={this.props.removeBox}>Remove</button>
            </div>
        )
    }
}

export default Box;