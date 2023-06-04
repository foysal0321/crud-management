import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Item = () => {
    const data = useLoaderData()
    const [displayuser, setdisplayuser] = useState(data)

    const deletebtn=(u)=>{
        const agree = window.confirm(`Are you sure delete ${u.name}`)
        if(agree){
            fetch(`https://crud-managements.vercel.app/users/${u._id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    const remain = displayuser.filter(usr => usr._id !== u._id)
                    setdisplayuser(remain)                 
                }
                //console.log(data)
            })
        }
    }

    return (
        <div className='py-4'>
            <h2 className='text-4xl font-semibold py-6 text-center'>CRUD Operation Management</h2> <hr />           
            <Link to='/users/add'> <button  className='btn btn-sm btn-primary text-white mx-4 mt-8'>Add Item</button></Link>
            <div className="overflow-x-auto py-8 ">
            <table className="table table-zebra border-2">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>status</th>
                    <th>Action</th>
                </tr>
                </thead>
                    <tbody>
                        {
                        displayuser.map((u,i) => <tr key={i}>
                        <th>{i+1}</th>
                        <td>{u.title}</td>
                        <td>{u.description}</td>
                        <td>{u.status}</td>
                        <td>
                          <Link to={`/update/${u._id}`}>  <button  className='btn btn-xs btn-success text-white'>Update</button></Link>
                            <button onClick={()=> deletebtn(u)} className='btn btn-xs btn-error text-white mx-0 md:mx-2 mt-2 md:mt-0'>Delete</button>
                        </td>
                    </tr>  )
                        }                        
                   </tbody>
                  </table>
                </div>    
        </div>
    );
};

export default Item;