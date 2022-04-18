import axios from "axios";
import React, { useState } from "react";

const Formulario = props => {
    const [company, setCompany] = useState({cname:"",ccity:0,cstatus:"",cplan_type:""});
    const handleChangeCompany = e =>{
        const {name,value} = e.target;
        setCompany(prevState =>({
            ...prevState,
            [name]: value,
            
        }))
    }
    const [driver, setDriver] = useState({dcompany:0,dcity:0,dfirst:"",dlast:"",demail:"",dphone:"",dstatus:""});
    const handleChangeDriver = e =>{
        const {name,value} = e.target;
        setDriver(prevState =>({
            ...prevState,
            [name]: value,
            
        }))
    }
    const [vehicle, setVehicle] = useState({vdriver:0,vplate:"",vmodel:"",vtype:"",vcapacity:""});
    const handleChangeVehicle = e =>{
        const {name,value} = e.target;
        setVehicle(prevState =>({
            ...prevState,
            [name]: value,
            
        }))
    }

    const createNew = (props,values) =>{
        if (props.varkey==="Company") {
            try{
                axios.post(`http://localhost:8080/${props.varkey}`,{
                    
                        "name":values.cname,
                        "city":parseInt(values.ccity),
                        "status":values.cstatus,
                        "plan_type":values.cplan_type
                    
                })
                window.location.href = "http://localhost:3000/companyList"
            }catch(error){
                console.log(error)
            }
        }else if(props.varkey === "Driver"){
            try{
                axios.post(`http://localhost:8080/${props.varkey}`,{
                    
                        "company_id": values.dcompany,
                        "city": parseInt(values.dcity),
                        "first_name": values.dfirst,
                        "last_name": values.dlast,
                        "email": values.demail,
                        "phone": values.dphone,
                        "avatar_url": null,
                        "status": values.dstatus
                    
                })
                window.location.href = "http://localhost:3000/driverList"
            }catch(error){
                console.log(error)
            }
        }else if(props.varkey === "Vehicle"){
            try{
                axios.post(`http://localhost:8080/${props.varkey}`,{
                    
                        "driver_id": values.vdriver,
                        "plate": values.vplate,
                        "model": values.vmodel,
                        "type": values.vtype,
                        "capacity": values.vcapacity
                    
                })
                window.location.href = "http://localhost:3000/vehicleList"
            }catch(error){
                console.log(error)
            }
        } 
    }
    return (
        <>
            <h1 className="text-center">{props.varkey} Form</h1>
            <hr />
            <br />
            {
                props.varkey === "Company" &&
                <div>
                <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" placeholder="Place the name" value={company.cname} onChange={handleChangeCompany} name="cname"/>
                </div><div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="number" className="form-control" placeholder="Place the city" value={company.ccity} onChange={handleChangeCompany} name="ccity" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input type="text" className="form-control" placeholder="Place the Status" value={company.cstatus} onChange={handleChangeCompany} name="cstatus" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">Plan Type</label>
                    <input type="text" className="form-control" placeholder="Place the type of plan" value={company.cplan_type} onChange={handleChangeCompany} name="cplan_type" required/>
                </div>
                {console.log(company)}
                <br />
                
                </form>
                <button type="submit" className="btn btn-primary" onClick={()=>createNew(props,company)}>Create</button>
                </div>
            }
            {
                props.varkey === "Driver" &&
                <form>
                <div className="form-group">
                    <label htmlFor="name">Company Id</label>
                    <input type="number" className="form-control" placeholder="Place the company Id" value={driver.dcompany} onChange={handleChangeDriver} name="dcompany"/>
                </div><div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="number" className="form-control" placeholder="Place the city" value={driver.dcity} onChange={handleChangeDriver} name="dcity"/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">First Name</label>
                    <input type="text" className="form-control" placeholder="Place the First Name" value={driver.dfirst} onChange={handleChangeDriver} name="dfirst"/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Last Name</label>
                    <input type="text" className="form-control" placeholder="Place the Last Name" value={driver.dlast} onChange={handleChangeDriver} name="dlast"/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">E-mail</label>
                    <input type="text" className="form-control" placeholder="Place the type of Email" value={driver.demail} onChange={handleChangeDriver} name="demail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">Phone</label>
                    <input type="text" className="form-control" placeholder="Place the type of Phone" value={driver.dphone} onChange={handleChangeDriver} name="dphone"/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">Status</label>
                    <input type="text" className="form-control" placeholder="Place the type of Status" value={driver.dstatus} onChange={handleChangeDriver} name="dstatus"/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={()=>createNew(props,driver)}>Create</button>
                </form>
            }
            {
                props.varkey === "Vehicle" &&
                <form>
                <div className="form-group">
                    <label htmlFor="name">Driver Id</label>
                    <input type="number" className="form-control" placeholder="Place the Driver Id" value={vehicle.vdriver} onChange={handleChangeVehicle} name="vdriver"/>
                </div><div className="form-group">
                    <label htmlFor="city">Plate</label>
                    <input type="text" className="form-control" placeholder="Place the Plate" value={vehicle.vplate} onChange={handleChangeVehicle} name="vplate"/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Model</label>
                    <input type="text" className="form-control" placeholder="Place the Model" value={vehicle.vmodel} onChange={handleChangeVehicle} name="vmodel"/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">Type</label>
                    <input type="text" className="form-control" placeholder="Place the type" value={vehicle.vtype} onChange={handleChangeVehicle} name="vtype"/>
                </div>
                <div className="form-group">
                    <label htmlFor="plan">Capacity</label>
                    <input type="text" className="form-control" placeholder="Place the Capacity" value={vehicle.vcapacity} onChange={handleChangeVehicle} name="vcapacity"/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={()=>createNew(props,vehicle)}>Create</button>
                </form>
            }


        </>

    )
}
export default Formulario