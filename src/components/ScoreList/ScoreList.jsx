import React, { Component } from 'react'
import DeleteScoreEntry from '../DeleteScoreEntry/DeleteScoreEntry';

export default class ScoreList extends Component {


    render() {
        const score = this.props.scores
            .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
            .map((scoreEntry, i) => {
                return (
                <tr className="row" key={i}>
                    <td className="col">{i + 1}</td>
                    <td className="col">{scoreEntry.name}</td>
                    <td className="col">{scoreEntry.score}</td>
                    <td>{scoreEntry.id}</td>
                    <td><DeleteScoreEntry id={scoreEntry.id}></DeleteScoreEntry></td>
                </tr>
                )
            })

        return (
            <table className="table">
                <tbody>
                    <tr className="row"><th className="col">#</th><th className="col">Name</th><th className="col">Score</th></tr>
                    {score}
                </tbody>
            </table>
        )
    }
}
