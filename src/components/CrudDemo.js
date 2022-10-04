import axios from 'axios';
import React, { useState, useEffect }  from 'react';
import PersonTable from './PersonTable';

const CrudDemo = () => 
{
    const BASE_API_URL = "http://localhost:8080/api/v1/person/";

    const [persons, setPersons] = useState([])
    const [requestData, setRequestData] = useState(new Date());
    const [alert,setAlert] = useState({type: '', message: ''});

    const getAllPeopleAction = async () => 
    {
        await axios.get(BASE_API_URL)
        .then(responce => 
        {
            if(responce.status === 200)
            {
                setPersons(responce.data);
            }
            else 
            {
                setNewAlert('alert-warning', 'APE Error ' + responce.status)
            }
        })
        .catch(err => 
        {
            setNewAlert('alert-danger', 'Error' + err);
        });
    }

    const setNewAlert = (typeProp, messageProp) =>
    {
        setAlert({type: typeProp , message: messageProp});
    }

    const setNewRequestData = (typeProp, messageProp) =>
    {
        setRequestData(new Date());
    }

    const getPersonById = async (id) => 
    {
        const url = BASE_API_URL + "/" + id;
        await axios.get(url)
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
            setNewAlert('alert-danger', 'Error' + err);
        });
    }

    useEffect(() => 
    {
        getAllPeopleAction();
    },[requestData]);

    return (
        <div>
            <PersonTable BASE_API_URL={BASE_API_URL} persons={persons} alert={alert} setNewAlert={setNewAlert} setNewRequestData={setNewRequestData}></PersonTable>
        </div>
    );
};

export default CrudDemo;