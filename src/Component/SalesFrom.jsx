import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddReport } from "../Redux/Slice";
import './SalesFrom.css'

const SalesForm = () => {
  const [formData, setFormData] = useState({id:"", month: "", sales: "" });


  const dispatch=useDispatch()

  function handleSubmit(e){

    e.preventDefault()

    dispatch(AddReport(formData));

    setFormData({
      id:"", month: "", sales: ""
    })
  

  }

  function handleChange(e){
    let{name,value}=e.target;
    setFormData((curr)=>({...curr,[name]:value}))
  }

  return (
   
    <>
    <form onSubmit={handleSubmit} className="form-container">
      <label className="" >ID</label>
      <input type="text" value={formData.id} onChange={handleChange} name="id" ></input>
      <label  className="">MONTH</label>
      <input type="text" value={formData.month} onChange={handleChange} name="month" ></input>
      <label className="" >SALES</label>
      <input type="text" value={formData.sales} onChange={handleChange} name="sales" ></input>
      <input type="submit" className="button" />
    </form>
    </>
  );
};

export default SalesForm;






