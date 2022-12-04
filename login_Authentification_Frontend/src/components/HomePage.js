import React from 'react'

const HomePage = () => {
  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
        <div className="px-6 mx-auto h-screen pt-6">
            <nav className='flex justify-between'>
                <a href='/' className='text-xl font-bold font-style: italic md:text-2xl text-gray-800 border-2 p-2 rounded'>Home</a>
                <a href='/login' className=' text-white bg-gray-800 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md py-3 px-6 text-center'>Logout</a>
            </nav>
            <div className='h-max flex justify-center mt-40'>
                <div>
                    <h1 className='text-3xl font-bold text-white'>Login ID For :-</h1>
                    <div className='flex justify-center mt-4'>
                        <a href='/teachers' className=' text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg mr-3'>Teacher</a>
                        <a href='/students' className=' text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-3 py-1 text-center text-lg ml-3'>Student</a>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePage