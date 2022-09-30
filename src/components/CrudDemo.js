import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import AlertMessage from './AlertMessage';

const CrudDemo = () => 
{
    const API_URL = "http://localhost:8080/api/v1/person";

    const [persons, setPersons] = useState([])
    const [requestData, setRequestData] = useState(new Date());
    const [alert,setAlert] = useState({type: '', message: ''});

    const getAllPeopleAction = async () => 
    {
        await axios.get(API_URL)
        .then(responce => 
        {
            if(responce.status === 200)
            {
                setPersons(responce.data);
            }
            else 
            {
                setAlert({type: 'alert-warning', message: 'APE Error ' + responce.status})
            }
        })
        .catch(err => 
        {
            setAlert({type: 'alert-danger', message: 'Error'})
        });
    }

    //const getPersonById = async (id) => 
    //{
    //    const url = API_URL + "/" + id;
    //    await axios.get(url)
    //    .then(responce => 
    //    {
    //        if(responce.status === 200)
    //        {
    //            setPersons(responce.data);
    //        }
    //        else 
    //        {
    //            setAlert({type: 'alert-warning', message: 'APE Error ' + responce.status})
    //        }
    //    })
    //    .catch(err => 
    //    {
    //        setAlert({type: 'alert-danger', message: 'Error'})
    //    });
    //}

    const deletePersonById = async(id) => 
    {
        const url = API_URL + "/" + id;
        await axios.delete(url)
        .then(() => 
        {
            setRequestData(new Date());
        })
        .catch(err => 
        {
            setAlert({type: 'alert-danger', message: 'Error'})
        });
    }

    useEffect(() => 
    {
        getAllPeopleAction();
    },[requestData]);

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

    const TableAction = (props) => 
    {
        return (
            <div>
                <button type="button" className="btn btn-primary">Details</button>
                <button type="button" onClick={() => deletePersonById(props.pers.id)} className="btn btn-danger">Delete</button>
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
            <AlertMessage alert={alert} />
        </div>
    );
};

export default CrudDemo;