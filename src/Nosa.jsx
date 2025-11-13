import React, { useState } from 'react'

function Nosa() {
  let [formData,setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  let handleChange = (vado)=>{
    // console.log(`${vado.target.name}:${vado.target.value}`)
    setFormData({...formData, [vado.target.name]:vado.target.value})
  }

  let handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      let response = await fetch("http://localhost:4050/users/signup",{
        method:"POST",
        headers:{
          'content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      })

      let data = await response.json()
      console.log(data)
    } catch (error) {

    }
  }
  return (
    <div className=' h-screen grid place-items-center bg-black text-white gap-6 content-center'>
      <h1 className=' text-4xl font-bold'>Register Form</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-3.5">

         <label className=" flex flex-col gap-2 font-semibold">
         firstName
      <input type="text" name='firstName' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange} />
      </label>
      <label className=" flex flex-col gap-2 font-semibold">
        lastName
        <input type="text" name='lastName' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange} />
      </label>
      <label className=" flex flex-col gap-2 font-semibold">
        email
        <input type="email" name='email' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange} />
      </label>
      <label className=" flex flex-col gap-2 font-semibold">
        password
        <input type="password" name='password' className=' p-2 border-lime-300 border-solid rounded-md border text-white' onChange={handleChange} />
      </label>
      <button className=' bg-lime-600 font-semibold text-black text-2xl p-2 rounded-sm cursor-pointer'>sign up</button>

      </form>
     
    </div>
  )
}

export default Nosa