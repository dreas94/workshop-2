import React from 'react';
import axios from 'axios';
import AlertMessage from './AlertMessage';

const PersonTableHeader = () => 
{
    return(
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const PersonTableAction = (props) => 
{
    const deletePersonById = async(BASE_API_URL, id, setNewRequestData, setNewAlert) => 
    {
        const url = BASE_API_URL + id;
        await axios.delete(url)
        .then((response) => 
        {
            if(response.status===204)
            {
                setNewRequestData();
            }
        })
        .catch(err => 
        {
            setNewAlert('alert-danger', 'Error' + err)
        });
    }

    return (
        <div>
            <button type="button" className="btn btn-primary">Details</button>
            <button type="button" onClick={() => deletePersonById(props.BASE_API_URL, props.pers.id, props.setNewRequestData, props.setNewAlert)} className="btn btn-danger">Delete</button>
            <button type="button" className="btn btn-warning">Edit</button>
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
        <div className='container'>
            <table className='table table-striped'>
                <PersonTableHeader />
                <PersonTableRow BASE_API_URL={props.BASE_API_URL} persons = {props.persons} setNewRequestData={props.setNewRequestData} setNewAlert={props.setNewAlert}/>
            </table>
            <AlertMessage alert={props.alert} />
        </div>
    );
};

export default PersonTable;