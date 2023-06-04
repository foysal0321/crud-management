import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const DataUpdate = () => {
    const data = useLoaderData()
    const [user,setuser] = useState(data);

    const handleUp =(e)=>{
        e.preventDefault();

        fetch(`https://crud-managements.vercel.app/users/${data._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert('Item update success')
                //console.log(data)
            }
            })      
       // console.log(user);
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
                 <h3 className='text-3xl py-5 text-center'>Update Item</h3> <hr />    
                <form onSubmit={handleUp} className="  text-center mt-6">          
                    <input type="text" onChange={handleBlue} defaultValue={data.title} name='title' className='p-2  input input-bordered w-full max-w-xs m-2' placeholder='Title' required /> <br />
                    <input type="text" onChange={handleBlue} defaultValue={data.description} name='description' className='p-2 input input-bordered w-full max-w-xs m-2' placeholder='Description' required/> <br />
                    <input type="text" onChange={handleBlue} defaultValue={data.status} name='status' className='p-2 input input-bordered w-full max-w-xs m-2' placeholder='Status' required /> <br />
                    <button className='btn btn-sm btn-info text-white mt-3'>Submit</button>
                </form>
                </div>
                 <Link to='/'> <button className='btn btn-sm btn-primary text-white mt-3 mx-4'>Back Item</button></Link>
        </div>
    );
};

export default DataUpdate;