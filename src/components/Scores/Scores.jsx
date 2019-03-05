import React, { Component } from 'react'
import ScoreList from '../ScoreList/ScoreList';
import AddScoreEntry from '../AddScoreEntry/AddScoreEntry';
import Axios from 'axios';

export default class Scores extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            id: 0,
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null
        }
    }

    handleChange = e => {
        this.setState(prevState => ({
            highScoreList: [...prevState.highScoreList, e]
        }))
        this.putDataToDB(e);
    }
    
    componentDidMount = () => {
        this.getDataFromDb();
        
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 10000);
            this.setState({ intervalIsSet: interval });            
        }        
    }

    componentWillUnmount = () => {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getDataFromDb = () => {
        fetch("api/getData")
            .then(data => data.json())
            .then(res => { this.setState({ data: res.data }) })
            .catch(err => console.log('err', err))
    };

    putDataToDB = data => {
        let currentIds = this.state.data.map(data => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
          ++idToBeAdded;
        }
    
        Axios.post("api/putData", {
          id: idToBeAdded,
          score: data.score,
          name: data.name
        });
      };


    // deleteFromDB = idTodelete => {
    //     let objIdToDelete = null;
    //     this.state.data.forEach(dat => {
    //         if (dat.id == idTodelete) {
    //             objIdToDelete = dat._id;
    //         }
    //     });

    //     Axios.delete("api/deleteData", {
    //         data: {
    //             id: objIdToDelete
    //         }
    //     });
    // };

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
        return (
            <div>
                <ScoreList scores={this.state.data}></ScoreList>
                <AddScoreEntry addEntry={this.handleChange}></AddScoreEntry>
            </div>
        )
    }
}
