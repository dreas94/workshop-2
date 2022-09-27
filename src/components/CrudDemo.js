import axios from 'axios';
import React, { useState, useEffect }  from 'react';

const CrudDemo = () => 
{
    const API_URL = "http://localhost:8080/api/v1/person";

    const [persons, setPersons] = useState([])

    const getAllPeopleAction = async () => 
    {
        await axios.get(API_URL).then(responce => 
        {
            if(responce.status === 200)
            {
                setPersons(responce.data);
            } 
        });
    }

    useEffect(() => 
    {
        getAllPeopleAction();
    },[])

    const TableHeader = () => 
    {
        return (
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    const TableAction = (props) => {
        return (
            <div>
                <button type="button" className="btn btn-primary">Details</button>
                <button type="button" className="btn btn-danger">Delete</button>
                <button type="button" className="btn btn-warning">Edit</button>
            </div>
        )
    }

    const TableRow = () => 
    {
        return (
            <tbody>
                {
                    persons.map(person => {
                        const row = (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstName} {person.lastName}</td>
                                <td><TableAction pers={person}></TableAction></td>
                            </tr>
                        );
                        return row;
                    })
                }
            </tbody>
        );
    }

    return (
        <div className='container'>
            <table className='table table-striped'>
                <TableHeader />
                <TableRow />
            </table>
        </div>
    );
};

export default CrudDemo;