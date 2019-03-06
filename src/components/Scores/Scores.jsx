import React, { Component } from 'react'
import ScoreList from '../ScoreList/ScoreList';
import AddScoreEntry from '../AddScoreEntry/AddScoreEntry';
import Axios from 'axios';

export default class Scores extends Component {

    constructor() {
        super()
        this.state = {
            dbcollection: [],
            id: 0,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null
        }
    }

    componentDidMount = () => {
        this.getDataFromDb();
    }

    handleChange = e => {        
        this.putDataToDB(e);
    }

    getDataFromDb = () => {
        fetch("api/getData")
            .then(data => data.json())
            .then(res => {
                res.data.forEach(element => {
                    element.editable = false;
                });
                this.setState({ dbcollection: res.data })
            })
            .catch(err => console.log('err', err))
    };

    putDataToDB = data => {
        let currentIds = this.state.dbcollection.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        Axios.post("api/putData", {
            id: idToBeAdded,
            score: data.score,
            name: data.name
        }).then(() => {
            this.getDataFromDb();
        })        
    };

    handleNameEdit = (id, contentForDB) => {        
        var x = [...this.state.dbcollection]
        x.find(el => el.id === id).editable = true
        this.setState({
            dbcollection: x
        })

        if (contentForDB) {
            this.updateDB(id, contentForDB)
        }
    }


    updateDB = (idToUpdate, updateToApply) => {
        let objIdToUpdate = null;
        this.state.dbcollection.forEach(dat => {
            if (dat.id == idToUpdate) {
                objIdToUpdate = dat._id;
            }
        });

        Axios.post("api/updateData", {
            _id: objIdToUpdate,
            update: { name: updateToApply }
        }).then(() => {
            this.getDataFromDb();
        })      
    };


    render() {
        return (
            <div>
                <ScoreList scores={this.state.dbcollection} onNameEdit={this.handleNameEdit}></ScoreList>
                <AddScoreEntry addEntry={this.handleChange}></AddScoreEntry>
            </div>
        )
    }
}
