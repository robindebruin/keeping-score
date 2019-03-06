import React, { Component } from 'react'
import DeleteScoreEntry from '../DeleteScoreEntry/DeleteScoreEntry';
import Axios from 'axios';
import ChangeEntryName from '../ChangeEntryName/ChangeEntryName';

export default class ScoreList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateNamePh: ''
        }
    }

    onNameChange = e => {        
        console.log(e.target.value);        
        this.setState({
            updateNamePh: e.target.value
        })
    }

    makeNameEditable = e => {
        this.props.onNameEdit(e)
    }

    sendEdit = (id, content) => {
        this.props.onNameEdit(id, content)
    }

    // updateDB = (idToUpdate, updateToApply) => {
    //     let objIdToUpdate = null;
    //     this.state.data.forEach(dat => {
    //         if (dat.id == idToUpdate) {
    //             objIdToUpdate = dat._id;
    //         }
    //     });
    //     Axios.post("api/updateData", {
    //         id: objIdToUpdate,
    //         update: { message: updateToApply }
    //     });
    // };

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
                        <td>{scoreEntry.id}</td>
                        <td><DeleteScoreEntry id={scoreEntry.id}></DeleteScoreEntry></td>

                        <td><button className="button" onClick={() => this.makeNameEditable(scoreEntry.id)}>edit</button></td>
                        <td><button className="button" onClick={() => this.sendEdit(scoreEntry.id, this.state.updateNamePh)}>send</button></td>

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
