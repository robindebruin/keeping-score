import React, { Component } from 'react'

export default class AddScoreEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            score: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        this.props.addEntry(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Score:
                        <input type="number" name="score" value={this.state.score} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">submit</button>
                </form>
            </div>
        )
    }
}
