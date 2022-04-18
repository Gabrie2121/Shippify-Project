import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/list.css'
const Lista = props => {
    const [search, setSearch] = useState("")
    const [vetor, setVetor] = useState([]);

    useEffect(() => {
        handleSearch(props, search)
    }, [search]);

    
    useEffect(() => {
        document.title = props.varkey
        getAll(props)
    }, []);

    useEffect(() => {
        document.title = props.varkey
        getAll(props)
    }, [props]);

    const handleSearch = async (props, value) => {
        try {
            await axios.get(`http://localhost:8080/${props.varkey}/name/${value}`)
                .then(res => {
                    setVetor(res.data)
                })
        } catch (error) {
            console.log(error)
        }
    };

    const getAll = async (props)=>{
        try {
            await axios.get(`http://localhost:8080/${props.varkey}`)
            .then(res=>{
                //console.log(res)
                setVetor(res.data)
                
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteRow = async(props,id)=>{
        try {
            await axios.delete(`http://localhost:8080/${props.varkey}/${id}`).then(
                alert(`${id} deleted`),
                getAll(props)
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1 className="text-center">{props.varkey}</h1>
            <hr />
            <br />
            {
                props.varkey === "Company" &&
                <label>Search By {props.varkey} name</label>
            }
            {
                props.varkey === "Driver" &&
                <label>Search By {props.varkey} name</label>
            }
            {
                props.varkey === "Vehicle" &&
                <label>Search By {props.varkey} plate</label>
            }
            <input type="text"
                className="form-control"
                placeholder="Search"
                onChange={async e => {
                    await setSearch(e.target.value)
                }}
                

            />
            <br />
            <div className="col-lg-12 ilnbutton">
                <Link to={`${props.varkey.toLowerCase()}Form`}> <button type="button" className="btn btn-primary btn-warning">Create new</button></Link>
            </div>
                    {
                        props.varkey === "Company" &&
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Plan_type</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {vetor.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <th scope="row">{i.name}</th>
                                        <td>{i.city}</td>
                                        <td>{i.plan_type}</td>
                                        <td>{i.status}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={e=>deleteRow(props,i.id)}>Delete</button></td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }
                    {
                        props.varkey === "Driver" &&
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">company_id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {vetor.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <th scope="row">{`${i.first_name} ${i.last_name}`}</th>
                                        <td>{i.city}</td>
                                        <td>{i.company_id}</td>
                                        <td>{i.email}</td>
                                        <td>{i.phone}</td>
                                        <td>{i.status}</td>
                                        <td><status type="button" className="btn btn-danger" onClick={e=>deleteRow(props,i.id)}>Delete</status></td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }{
                        props.varkey === "Vehicle" &&
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Driver_id</th>
                                <th scope="col">Plate</th>
                                <th scope="col">Model</th>
                                <th scope="col">Type</th>
                                <th scope="col">Capacity</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {vetor.map(i => {
                                return (
                                    <tr key={i.id}>
                                        <th scope="row">{i.driver_id}</th>
                                        <td>{i.plate}</td>
                                        <td>{i.model}</td>
                                        <td>{i.type}</td>
                                        <td>{i.capacity}</td>
                                        <td><button type="button" className="btn btn-danger" onClick={e=>deleteRow(props,i.id)}>Delete</button></td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    }



        </>

    )
}
export default Lista