import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DataAdd = () => {
    const [user,setuser] = useState({});

    const handle =(e)=>{
        e.preventDefault();
         
        fetch(`https://crud-managements.vercel.app/users`,{
         method: 'POST',
         headers:{
            'content-type' : 'application/json'
         },
         body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('Add success')
                e.target.reset()
            }
            console.log(data)
        })      
    }

    const handleBlue =(e)=>{
        const filed = e.target.name;
        const value = e.target.value;    
        const newusers = {...user}
        newusers [filed] = value
        setuser(newusers)
        
    }
    return (
        <div>
                 <div className="">
                 <h3 className='text-3xl py-5 text-center'>Add Item</h3> <hr />  
                <form  onSubmit={handle} className=" text-center mt-6">                
                <input type="text" onBlur={handleBlue} name='title' className='p-2  input input-bordered w-full max-w-xs m-2' placeholder='Title' required /> <br />
                <input type="text" onBlur={handleBlue} name='description' className='p-2 input input-bordered w-full max-w-xs m-2' placeholder='Description' required/> <br />
                <input type="text" onBlur={handleBlue} name='status' className='p-2 input input-bordered w-full max-w-xs m-2' placeholder='Status' required /> <br />
                <button className='btn btn-md btn-info text-white mt-2'>Submit</button>
                </form>
                </div> 
                <Link to='/'> <button className='btn btn-sm btn-primary text-white mt-3 mx-4'>Back Item</button></Link>
        </div>
    );
};

export default DataAdd;