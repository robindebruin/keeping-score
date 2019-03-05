import React, { Component } from 'react'

export default class AddScoreEntry extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            score: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        console.log('submit form', this.state);
        this.setState({
            fullName: '',
            score: ''            
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name: 
                        <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Score: 
                        <input type="text" name="score" value={this.state.score} onChange={this.handleChange} />
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">submit</button>
                </form>
            </div>
        )
    }
}
