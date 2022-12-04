import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddTeacher = () => {
    const navigate = useNavigate();
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    classs: "",
    phnum: "",
    addresss: "",
  })

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setNewTeacher({
      ...newTeacher,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/add_teacher', newTeacher)
    .then(res => {
        alert(res.data.status)
        navigate('/teachers');
    })
}

  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold font-style: italic md:text-2xl text-gray-800 border-2 p-2 rounded'>Home</a>
                <a href='/login' className=' text-white bg-blue-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Logout</a>
            </nav>
            <div className="flex flex-col items-center justify-center mx-auto pt-6">
                <h1 className="text-3xl font-bold pb-6 text-white">
                     New Teacher
                </h1>
                <div className="w-full rounded-lg shadow border max-w-md bg-white border-gray-700">
                    <div className="p-6 space-y-6">
                        <form className="space-y-6" action="post">
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="name" className="block mb-2 text-m font-style: italic font-medium text-gray-800">Teacher's Name</label>
                                    <input type="text" name="name" value={newTeacher.naam} onChange={changeHandler} id="name" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="subject" className="block mb-2 text-m font-style: italic font-medium text-gray-800">Subject</label>
                                    <input type="text" name="subject" value={newTeacher.subject} onChange={changeHandler} id="subject" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="classs" className="block mb-2 text-m font-style: italic font-medium text-gray-800">Class</label>
                                    <input type="number" name="classs" value={newTeacher.class} onChange={changeHandler} id="classs" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="ph" className="block mb-2 text-m font-style: italic font-medium text-gray-800">Phone number</label>
                                    <input type="number" name="ph" value={newTeacher.phone} onChange={changeHandler} id="ph" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                                </div>
                            </div>
                            <div>
                                <label for="addresss" className="block mb-2 text-m font-style: italic font-medium text-gray-800">Address</label>
                                <input type="text" name="addresss" value={newTeacher.add} onChange={changeHandler} id="addresss" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div className='flex justify-between'>
                                <button type="submit" onClick={handleSubmit} className="mr-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Add</button>
                                <a href='/teachers' className="ml-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Go back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AddTeacher