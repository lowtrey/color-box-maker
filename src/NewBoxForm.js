import React from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: '', height: '', color: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id: uuid()};
        this.props.addBox(newBox);
        this.setState({width: '', height: '', color: ''});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="width">Width: </label>
                <input
                    type='number'
                    id='width'
                    name='width'
                    placeholder='Width'
                    value={this.state.width}
                    onChange={this.handleChange}
                >
                </input><br />
                <label htmlFor="height">Height: </label>
                <input
                    type='number'
                    id='height'
                    name='height'
                    placeholder='Height'
                    value={this.state.height}
                    onChange={this.handleChange}
                >
                </input><br />
                <label htmlFor="color">Color: </label>
                <input
                    type='text'
                    id='color'
                    name='color'
                    placeholder='Color'
                    value={this.state.color}
                    onChange={this.handleChange}
                >
                </input><br /><br />
                <button>Make Box!</button>
            </form>
        )
    }
}

export default NewBoxForm;