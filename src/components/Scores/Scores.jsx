import React, { Component } from 'react'
import ScoreList from '../ScoreList/ScoreList';
import AddScoreEntry from '../AddScoreEntry/AddScoreEntry';

export default class Scores extends Component {

    constructor() {
        super()
        this.state = {
            highScoreList: [{ name: 'Robin', score: 22 }, { name: 'Piet', score: 1 }, { name: 'Gert', score: 100000 }, { name: 'Sjaak', score: 999 }]
        }
    }

    handleChange = e => {
        this.setState(prevState => ({
            highScoreList: [...prevState.highScoreList, e]
        }))
    }
    render() {
        return (
            <div>
                <ScoreList scores={this.state.highScoreList}></ScoreList>
                <AddScoreEntry addEntry={this.handleChange}></AddScoreEntry>
            </div>
        )
    }
}
