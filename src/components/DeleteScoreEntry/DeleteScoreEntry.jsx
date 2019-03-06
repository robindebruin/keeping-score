import React, { Component } from 'react'
import Axios from 'axios';

export default class DeleteScoreEntry extends Component {   

    handleClick = () => {
        this.deleteFromDB(this.props.id);
    }

    deleteFromDB = objIdToDelete => {
        Axios.delete("api/deleteData", {
            data: {
                id: objIdToDelete
            }
        }).then(() => {
            // get db
        })
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.handleClick}>delete</button>
            </div>
        )
    }
}
