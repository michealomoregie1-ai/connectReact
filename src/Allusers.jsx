import React, { useEffect, useState } from "react";
import EditComp from './EditComp';



function Allusers() {
    let [holdUser, setHoldUsers] = useState([]);

    useEffect(()=>{
        let fetchUser = async()=>{
            try {
                let response = await fetch(' http://localhost:5173/')
                let data = await response.json()
                setHoldUsers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[])

    let handleDelete = async(myid)=>{
        try {
            let response = await fetch(` `,{
                method:"DELETE"
            })
            if (response.ok) {
                // Remove the deleted user from the state
                setHoldUsers(prevUsers => prevUsers.filter(user => user._id !== myid))
            } else {
                console.error('Delete failed:', await response.text())
            }
        } catch (error) {
            console.error('Delete error:', error)
        }
    }

    return (
        <div className=" flex justify-center">
            <table className=" bg-gray-600 text-center text-white border-2 border-solid w-full">
                <thead className=" border-2 border-solid">
                    <tr className=" bg-gray-300">
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        holdUser.length > 0 ? holdUser.map((obi, index)=>(
                            <tr key={index}>
                                <td>{obi.firstName}</td>
                                <td>{obi.lastName}</td>
                                <td>{obi.email}</td>
                                <td>{obi.role}</td>
                                <td>🖊</td>
                                <td><button onClick={() => handleDelete(obi._id)} className=" cursor-pointer">🗑</button></td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={"6"}>loading...</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <EditComp/>
        </div>
    )
}

export default Allusers