import React, { Component } from 'react'
import ScoreList from '../ScoreList/ScoreList';
import AddScoreEntry from '../AddScoreEntry/AddScoreEntry';
import  DatabaseCommunication  from '../../services/DBCommunication/DBCommunication';

export default class Scores extends Component {

    constructor() {
        super()
        this.state = {
            dbcollection: [],
        }
    }

    componentDidMount() {
        this.getDataFromDb();
    }

    getDataFromDb = () => {
        DatabaseCommunication.getAll().then(res => {            
            this.setState({ dbcollection: res })
        });
    };

    handleAddedEntry = data => {
        let currentIds = this.state.dbcollection.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }
        DatabaseCommunication.putDataToDB(idToBeAdded, data).then(() => this.getDataFromDb())        
    };

    handleNameEdit = (id, contentForDB = null) => {        
        var dbcollection = [...this.state.dbcollection];
        dbcollection.find(el => el._id === id).editable = true;
        this.setState({
            dbcollection: dbcollection
        })
        if (contentForDB) {
            this.updateDB(id, contentForDB)
        }
    };

    updateDB = (idToUpdate, updateToApply) => {
        DatabaseCommunication.updateDB(idToUpdate, updateToApply).then(() => this.getDataFromDb());              
    };

    render() {
        return (
            <div>
                <ScoreList scores={this.state.dbcollection} onNameEdit={this.handleNameEdit}></ScoreList>
                <AddScoreEntry addEntry={this.handleAddedEntry}></AddScoreEntry>
            </div>
        )
    }
}
