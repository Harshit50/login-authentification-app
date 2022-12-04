import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTeacher = () => {
    const navigate = useNavigate();
    const [dt, setDT] = useState({});
    const {id} = useParams();
    const loadDetails = async () => {
        try {
            const user = await axios.get(`http://localhost:3000/teacher/edit/${id}`);
            setDT(user.data);
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        loadDetails();
    },[])

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setDT({
            ...dt,
            [name]: value,
        })
    }

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:3000/teacher/edit/${id}`, dt)
            alert(res.data.status)
        } catch (error) {
            console.log('error while editing teacher', error);
        }
        navigate('/teachers');
    }

  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold font-style: italic md:text-2xl text-gray-900 border-2 p-2 rounded'>Home</a>
                <a href='/login' className=' text-white bg-gray-900 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Logout</a>
            </nav>
            <div className="flex flex-col items-center justify-center mx-auto pt-6">
                <h1 className="text-3xl font-bold pb-6 text-gray-900">
                     Teacher Edit
                </h1>
                <div className="w-full rounded-lg shadow border max-w-md bg-white border-gray-700">
                    <div className="p-6 space-y-6">
                        <form className="space-y-6" action="post">
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="name" className="block mb-2 text-sm font-medium font-style: italic text-black">Teacher's Name</label>
                                    <input type="text" value={dt.name} onChange={(e) => changeHandler(e)} name="name" id="name" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="subject" className="block mb-2 text-sm font-medium font-style: italic text-black">Subject</label>
                                    <input type="text" value={dt.subject} onChange={(e) => changeHandler(e)} name="subject" id="subject" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-full mr-4'>
                                    <label for="classs" className="block mb-2 text-sm font-medium font-style: italic text-black">Class</label>
                                    <input type="number" value={dt.classs} onChange={(e) => changeHandler(e)} name="classs" id="classs" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                </div>
                                <div className='w-full ml-4'>
                                    <label for="ph" className="block mb-2 text-sm font-medium font-style: italic text-black">Phone number</label>
                                    <input type="number" value={dt.ph} onChange={(e) => changeHandler(e)} name="ph" id="ph" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                                </div>
                            </div>
                            <div>
                                <label for="addresss" className="block mb-2 text-sm font-medium font-style: italic text-black">Address</label>
                                <input type="text" value={dt.addresss} onChange={(e) => changeHandler(e)} name="addresss" id="addresss" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                            </div>
                            <div className='flex justify-between'>
                                <button type="submit" onClick={handleSave} className="mr-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Save</button>
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

export default EditTeacher