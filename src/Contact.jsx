import React, { useState } from 'react'

function Contact() {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }

    const formSubmit = (e) => {
               e.preventDefault();
               alert(`Name:${data.fullname},Phone:${data.phone},Mail:${data.email},Message:${data.msg}`);
    }
    return (
        <>
           <div className = 'my-5'>
               <h1 className = 'text-center'>Contact Us</h1>
           </div>
           <div className = 'container contact_div'>
                   <div className = 'row'>
                         <div className = 'col-md-6 col-10 mx-auto'>
                         <form onSubmit = {formSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="name" class="form-control" id="exampleInputname" aria-describedby="nameHelp" name = "fullname" value = {data.fullname} onChange = {InputEvent} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputphone" aria-describedby="phoneHelp" name = "phone" value = {data.phone} onChange = {InputEvent} />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "email" value = {data.email} onChange = {InputEvent} />
  </div>
  <div class="mb-3">
    <label for="exampleInputmessage" class="form-label">Message</label>
    <input type="message" class="form-control" id="exampleInputPassword1" name = "msg" value = {data.msg} onChange = {InputEvent} />
  </div>
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
                         </div>
                   </div>
           </div>
        </>
    )
}

export default Contact
