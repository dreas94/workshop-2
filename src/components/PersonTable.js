import React from "react";
import axios from "axios";
import AlertMessage from "./AlertMessage";
import {useHistory} from "react-router-dom";

const PersonTableHeader = () => 
{
    return(
        <thead style={{borderBottom: "3px solid black"}}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const PersonTableAction = (props) => 
{
    const history = useHistory();

    const goToDetails = (id) =>
    {
        history.push("/persondetails/"+id)
    }

    const deletePersonById = async(BASE_API_URL, id, setNewRequestData, setNewAlert) => 
    {
        const url = BASE_API_URL + id;
        await axios.delete(url)
        .then((response) => 
        {
            if(response.status===204)
            {
                console.log("Delete Person")
                setNewRequestData();
            }
        })
        .catch(err => 
        {
            setNewAlert("alert-danger", "Error" + err)
        });
    }

    return (
        <div>
            <button type="button" className="btn btn-primary me-1" onClick={() => goToDetails(props.pers.id)}>Details</button>
            <button type="button" className="btn btn-danger me-1" onClick={() => deletePersonById(props.BASE_API_URL, props.pers.id, props.setNewRequestData, props.setNewAlert)}>Delete</button>
            <button type="button" className="btn btn-warning me-2">Edit</button>
        </div>
    )
}

const PersonTableRow = (props) => 
{
    return (
        <tbody>
            {
                props.persons.map(person => {
                    const row = (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.firstName} {person.lastName}</td>
                            <td>{person.email}</td>
                            <td><PersonTableAction BASE_API_URL={props.BASE_API_URL} pers={person} setNewRequestData={props.setNewRequestData} setNewAlert={props.setNewAlert}></PersonTableAction></td>
                        </tr>
                    );
                    return row;
                })
            }
        </tbody>
    );
}


const PersonTable = (props) => {
    return (
        <div className="mt-3 p-3">
            <div className="card">
                <div className="card-header text-white bg-dark">
                        <h5 className="card-title">Person Information</h5>
                </div>
                <div div className="card-body">
                    <table className="table table-striped">
                        <PersonTableHeader />
                        <PersonTableRow BASE_API_URL={props.BASE_API_URL} persons = {props.persons} setNewRequestData={props.setNewRequestData} setNewAlert={props.setNewAlert}/>
                    </table>
                    <AlertMessage alert={props.alert} />
                </div>
            </div>
        </div>
    );
};

export default PersonTable;