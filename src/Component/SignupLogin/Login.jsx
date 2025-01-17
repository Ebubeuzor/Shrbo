import React, { useEffect, useRef, useState } from "react";
import google from "../../assets/google.png"
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axoisClient";

const SignUp=()=>{
  
    
  const {token,setToken,setUser} = useStateContext();
  const [loginUrl, setLoginUrl] = useState(null);
  const [error, setError] = useState({__html: ""});

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/auth', {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong!');
    })
    .then((data) => setLoginUrl( data.url ))
    .catch((error) => console.error(error));
  }, []);

  const handleSubmmit=(ev)=>{
    ev.preventDefault();
    let data={
      'email' : emailRef.current.value,
      'password' : passwordRef.current.value
    };

    axiosClient.post('/login',data)
    .then((data) => {
      setUser(data.data.user);
      setToken(data.data.token);
      setTimeout(() => {
        navigate('/');
      }, 100);
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        if (error.response.data.errors) {
          const finalError = Object.values(error.response.data.errors).reduce((accum, next) => [
            ...accum, ...next
          ], []);
          setError({ __html: finalError.join("<br/>") });
        } else {
          const finalError = Object.values(error.response.data.message).reduce((accum, next) => [
            ...accum, ...next
          ], []);
          setError({ __html: finalError.join("") });
        }
      }
    });
  }

    return(
    
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl md:text-3xl font-bold leading-9  text-gray-900">
            Login to Your Account
          </h2>
          <h3 className="text-center mt-1  tracking-tight text-gray-400" >Kindly log in to gain access to your account</h3>
        </div>

        {
          <>
              
            <div>
              <button
                type="submit"
                className="flex w-full gap-1 justify-center rounded-md border-0 ring-2 ring-inset ring-gray-300   px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-50"
              >
                <img width={"24px"} height={"24px"} src={google} />
                <a href={loginUrl}>Sign in with Google</a>
              </button>
            </div>
                                            
            <div
              className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p
                className="mx-4 mb-0 text-gray-500 text-sm text-center font-semibold ">
                OR
              </p>
            </div>
          </>
        }

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSubmmit} method="POST">

            {
              error.__html && (
                  <div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}>

                  </div>
              )
            }

            <div>
              <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  ref={emailRef}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                  Password
                </label>
             
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="text-sm  text-right">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 "
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member <span className=" text-slate-900 font-semibold ">Shrbo</span>?{' '}
            <a href="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an account
            </a>
          </p>
        </div>
      </div>
    
    )



}


export default SignUp;