import Axios from 'axios';


const DatabaseCommunication = {

    getAll() {
        return fetch("api/getData")
            .then(data => data.json())
            .then(res => {
                res.data.forEach(element => {
                    element.editable = false;
                });
                return res.data
            })
            .catch(err => console.error(err));
    },

    putDataToDB(idToBeAdded, data) {
        return Axios.post("api/putData", {
            id: idToBeAdded,
            score: data.score,
            name: data.name
        })
        .catch(err => console.error(err));
    },

    updateDB(objIdToUpdate, updateToApply) {
        return Axios.post("api/updateData", {
            _id: objIdToUpdate,
            update: {
                name: updateToApply
            }
        })
        .catch(err => console.error(err));
    },

    deleteDoc(_id){
       return Axios.delete("api/deleteData", {
            data: {
                _id: _id
            }
        })
        .catch(err => console.error(err));
    }
 


}

export default DatabaseCommunication