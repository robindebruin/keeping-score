import React, { Component } from 'react'
import DeleteScoreEntry from '../DeleteScoreEntry/DeleteScoreEntry';
import ChangeEntryName from '../ChangeEntryName/ChangeEntryName';

export default class ScoreList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateNamePh: ''
        };
    }

    onNameChange = e => {
        this.setState({
            updateNamePh: e.target.value
        })
    }

    makeNameEditable = e => {
        this.props.onNameEdit(e);
    }

    sendEdit = (id, content) => {
        this.props.onNameEdit(id, content);
    }

    render() {
        const scoreList = this.props.scores
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
            .map((scoreEntry, i) => {
                return (
                    <tr className="row" key={i}>
                        <td className="col">{i + 1}</td>
                        <td className="col">
                            {scoreEntry.editable ?
                                <input type="text" onChange={this.onNameChange} value={this.state.nameChange} placeholder="edit it" />
                                : scoreEntry.name
                            }
                        </td>
                        <td className="col">{scoreEntry.score}</td>
                        <td><DeleteScoreEntry id={scoreEntry._id}></DeleteScoreEntry></td>

                        <td><button className="button" onClick={() => this.makeNameEditable(scoreEntry._id)}>edit</button></td>
                        <td><button className="button" onClick={() => this.sendEdit(scoreEntry._id, this.state.updateNamePh)}>send</button></td>

                        
                    </tr>
                )
            })

        return (
            <table className="table">
                <tbody>
                    <tr className="row"><th className="col">#</th><th className="col">Name</th><th className="col">Score</th></tr>
                    {scoreList}
                </tbody>
            </table>
        )
    }
}
