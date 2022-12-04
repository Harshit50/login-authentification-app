import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [userdetails, setUserdetails] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', userdetails)
        .then(res => {
            alert(res.data.status)
            const {status} = res.data;
            if(status === 'login successful') {
                navigate('/home');
            }
            if(status === 'user not found') {
                navigate('/register');
            }
            if(status === 'incorrect password') {
                setUserdetails({...userdetails, password: ""});
            }
        })
    }
  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
        <div className="flex flex-col items-center justify-center px-6 py-8 h-screen">
            <div className="w-full rounded-lg shadow border max-w-md bg-white border-gray-700">
                <div className="p-6 space-y-6">
                    <h1 className="font-bold font text-4xl text-gray-800">
                        Login
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="email" className="block mb-2 text-l font-style: italic font-medium text-gray-800">Your email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Email Id" required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-l 	font-style: italic font-medium text-gray-800">Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="mr-2 w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-black
                                 focus:ring-primary-600 ring-offset-black" required />
                            </div>
                            <div classNameName="ml-3 text-sm">
                                <label for="terms" className="font-light text-gray-800">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleLogin} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">Login</button>
                        <p className="text-sm font-light dark:text-gray-900">
                            Doesn't have an account? <a href="/register" className="font-medium text xl hover:underline dark:text-primary-500">Sign Up here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage