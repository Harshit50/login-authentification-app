import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [userdetails, setUserdetails] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const registerHandle = async (e)=> {
        e.preventDefault();
        const {name, email, password, confirmPassword} = userdetails;
        if(password !== confirmPassword) {
            alert('passwords do not match');
            setUserdetails({...userdetails, password: "", confirmPassword: ""});
        }
        else {
            if(name && email && password && (password === confirmPassword)) {
                axios.post('http://localhost:3000/register', userdetails)
                .then(res => {
                    alert(res.data.status);  
                    navigate('/login');
                })
            }
        }
    }
  return (
    <section className="bg-gradient-to-r from-sky-300 to-indigo-700">
        <div className="flex flex-col items-center justify-center px-6 py-8 h-screen">
            <div className="w-full rounded-lg shadow border max-w-md bg-white border-gray-700">
                <div className="p-6 space-y-6">
                    <h1 className="font-bold text-3xl text-black">
                        Sign Up
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="name" className="block mb-2 text-m 	font-style: italic font-medium text-black">Your name</label>
                            <input type="text" name="name" id="name" value={userdetails.name} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="NAME" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-m font-style: italic font-medium text-black">Your email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"  required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-m 	font-style: italic font-medium text-black">Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler} placeholder="your password" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-m 	font-style: italic font-medium text-black">Confirm password</label>
                            <input type="password" name="confirmPassword" id="confirm-password" value={userdetails.confirmPassword} onChange={changeHandler} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <button type="submit" onClick={registerHandle} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center hover:bg-primary-700 focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light dark:text-black">
                            Already have an account? <a href="/login" className="font-medium hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUpPage