import React, {useEffect, useState} from 'react';
import axios from 'axios';

const StudentDB = () => {
  const [datafound, setDatafound] = useState(false);
  const [data, setData] = useState([]);
  const getting = async () => {
    try {
      let res = await axios.get('http://localhost:3000/students')
      console.log(res.data)
      setData(res.data);
      setDatafound(true);
    } catch (error) {
      console.log("Error", error );
    }
  }
  useEffect(() => {
    getting();
  },[])
  
  const deleteStudent = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/student/${_id}`);
      alert(res.data.status)
    } catch (error) {
      console.log('error while deleting student', error);
    }
    getting();
  }

  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
      <div className="px-6 mx-auto h-screen pt-6">
          <nav className='flex justify-between'>
              <a href='/' className='text-xl font-bold font-style: italic md:text-2xl text-black border-2 p-2 rounded'>Home</a>
              <a href='/login' className=' text-white bg-gray-900 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Logout</a>
          </nav>
          <div className='flex justify-between mt-10'>
            <div>
              <a href='/teachers' className=' text-white bg-gray-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg mr-4'>Teachers</a>
              <a href='/students' className=' text-white bg-gray-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg ml-4'>Students</a>
            </div>
            <a href='/add_student' className=' text-white bg-gray-900 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg'>Add</a>
          </div>
          {
            datafound ?
              data.length !== 0 ?
              <table class="mt-5 text-white w-full text-center table-fixed">
                <thead className='border-b-2 text-lg'>
                  <tr>
                    <th>Name</th>
                    <th>Father's Name</th>
                    <th>Roll no.</th>
                    <th>Class</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((el, ind) => {
                      const {_id, type, name, fname, roll, classs, phnum, addresss} = el;
                      if(type === 'student') {
                        return (
                            <tr key={ind} className='my-2'>
                              <td>{name}</td>
                              <td>{fname}</td>
                              <td>{roll}</td>
                              <td>{classs}</td>
                              <td>{phnum}</td>
                              <td>{addresss}</td>
                              <td>
                                <a href={`student/edit/${_id}`} className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-md mr-2'>Edit</a>
                                <button onClick={() => deleteStudent(_id)} className=' text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-md ml-2'>Delete</button>
                              </td>
                            </tr>
                          )
                      }
                    })
                  }
                </tbody>
              </table>
              :
              <h1 className='text-2xl font-bold text-white text-center mt-20'>No Student Added</h1>
            :
            <h1 className='text-2xl font-bold text-white text-center mt-20'>Loading...</h1>
          }
      </div>
    </section>
  )
}

export default StudentDB