import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const PersonDetails = () => 
{
    const [person, setPerson] = useState({});

    let history = useHistory();
    const id = useParams().id;

    useEffect(() =>
    {
        const url = "http://localhost:8080/api/v1/person/"+id;
        axios.get(url).then((response) => 
        {
          if (response.status === 200) 
          {
            setPerson(response.data);
          }
        })
    },[id]);

    return (
        <div className="row">
            <div className="col-8">
                <div className="card">
                    <div className="card-header text-white bg-info">
                        <h5 className="card-title">Person Information</h5>
                    </div>
                    <div className="card-body">
                        <h4 className="card-subtitle mb-2">{person.title}</h4>
                        <p className="card-text">
                            Id: {person.id}
                        </p>
                        <p className="card-text">
                            Name: {person.firstName} {person.lastName}
                        </p>
                        <p className="card-text">
                            Email: {person.email}
                        </p>
                    </div>
                    <div className="card-footer bg-dark">
                        <button type="button" className="btn btn-outline-danger" onClick={() => history.goBack()}>Back</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PersonDetails;