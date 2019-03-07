import React, { Component } from 'react'
import Axios from 'axios';
import DatabaseCommunication from '../DBCommunication/DBCommunication';

export default class DeleteScoreEntry extends Component {   

    handleClick = () => {
        this.deleteFromDB(this.props.id);
    }

    deleteFromDB = objIdToDelete => {
        DatabaseCommunication.deleteDoc(objIdToDelete).then(() => {
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
