import React, { Component } from 'react'

export default class ScoreList extends Component {

    constructor(props) {
        super()
        console.log(' props', props);

    }

    render() {

        const score = this.props.scores.map((scoreEntry, i) => {
            return (<tr class="row" key={i}><td class="col">{i}</td> <td class="col">{scoreEntry.name}</td><td class="col">{scoreEntry.score}</td></tr>)
        })

        return (
            <table class="table"> 
                <tbody>
                    <tr class="row"><th class="col">#</th><th class="col">Name</th><th class="col">Score</th></tr>
                    {score}
                </tbody>
            </table>
        )
    }
}
