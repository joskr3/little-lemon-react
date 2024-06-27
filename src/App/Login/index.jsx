import React from "react";
import CustomNavBar from "../../components/CustomNavbar";
import { useForm } from 'react-hook-form';


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log( data );
  console.log( errors );

  return (
    <>
      <CustomNavBar />
      <h1 className="flex flex-col gap-1 text-green-700 italic m-auto text-pretty  mb-10 text-3xl md:text-8xl justify-center text-center" >
        Welcome to <span className="text-yellow-400">
          Little Lemmon
        </span>
      </h1>
      <form onSubmit={handleSubmit( onSubmit )} className="flex flex-col gap-6 mb-3">
        <div className="flex flex-col  md:flex-row gap-4 text-white bg-green-700">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Kitten1234" {...register( "Username", { required: true, max: 32, min: 5 } )} />
        </div>
        <div className="flex gap-4 text-white bg-green-700 flex-col  md:flex-row">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="asdf1234rg@@@@%#" {...register( "Password", { required: true, max: 32, min: 8, maxLength: 48 } )} />
        </div>
        <input type="submit" value="Login" className="text-green-700 bg-yellow-500 rounded-full py-1 px-4 min-w-fit mb-3" />
      </form>

      <a href="/registro" className="no-underline text-yellow-500 m-auto">
        Not an account yet? Create one
      </a>

    </>
  )
}

export default Login
