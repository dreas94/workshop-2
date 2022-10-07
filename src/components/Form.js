import React from 'react';
import { useForm } from 'react-hook-form';

export default function App()
{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const submitForm = () =>
    {
        // Get the first form with the name
        // Hopefully there is only one, but there are more, select the correct index
        var frm = document.getElementsByName('contact-form')[0];
        frm.submit(); // Submit
        frm.reset();  // Reset
        return false; // Prevent page refresh
    }
  
    return (
        <div className="container-fluid">
            <form className="border mt-3 p-3" onSubmit={handleSubmit(onSubmit)} > 
                <div className="row">
                    <div className="col-6">
                        <input className="form-control" type="text" placeholder="Enter First Name" {...register("firstName", {required: { value: true, message: "First Name Requiered"}, maxLength: 80})} />
                        {errors.firstName && <span className="text-danger"> {errors.firstName.message} </span>}  
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text" placeholder="Enter Last Name" {...register("lastName", {required: { value: true, message: "Last Name Requiered"}, maxLength: 100})} />
                        {errors.lastName && <span className="text-danger"> {errors.lastName.message} </span>}
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <input className="form-control" type="email" placeholder="Enter Email" {...register("email", {required: { value: true, message: "Email Requiered"}, pattern: /^\S+@\S+$/i})} />
                        {errors.email && <span className="text-danger"> {errors.email.message} </span>}
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <input className="form-control"type="text" placeholder="Enter Title" {...register("title", {required: { value: true, message: "Title Requiered"}, maxLength: 80})} />
                        {errors.title && <span className="text-danger"> {errors.title.message} </span>}
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-success me-2">Add</button>
                        <button type="submit" className="btn btn-danger me-2">Reset</button>
                    </div>
                </div>
          </form>
      </div>
    );
}