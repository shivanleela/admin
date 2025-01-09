import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddReport } from "../Redux/Slice";
import './SalesFrom.css'
import { useNavigate } from "react-router-dom";

const SalesForm = () => {
  const [formData, setFormData] = useState({id:"", name: "", sales: "",amount:"" ,month:""});
const navigate=useNavigate()

  const dispatch=useDispatch()

  function handleSubmit(e){

    e.preventDefault()

    dispatch(AddReport(formData));

    setFormData({
      id:"", month: "", sales: ""
    })

    navigate("/dashboard")

  

  }

  function handleChange(e){
    let{name,value}=e.target;
    setFormData((curr)=>({...curr,[name]:value}))
  }

  return (
   
    <>
    <form onSubmit={handleSubmit} className="form-container" style={{marginTop:"70px"}}>
      <label className="" >Id</label>
      <input type="text" value={formData.id} onChange={handleChange} name="id" ></input>
      <label className="" >Name</label>
      <input type="text" value={formData.name} onChange={handleChange} name="name" ></input>
      <label className="" >Amount</label>
      <input type="text" value={formData.amount} onChange={handleChange} name="amount" ></input>
      <label  className="">Month</label>
      <input type="month" value={formData.month} onChange={handleChange} name="month" ></input>
      <label className="" >Sales</label>
      <input type="text" value={formData.sales} onChange={handleChange} name="sales" ></input>
      <input type="submit" className="button" />
    </form>
    </>
  );
};

export default SalesForm;





