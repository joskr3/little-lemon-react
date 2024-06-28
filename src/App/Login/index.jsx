import React from "react";
import CustomNavBar from "../../components/CustomNavbar";
import { useForm } from 'react-hook-form';
import styles from "../styles";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log( data );
  console.log( errors );

  const { estilosTitulo, formulario, contenedor, label, input, submit, hipervinculo } = styles

  return (
    <>
      <CustomNavBar />
      <h1 className={estilosTitulo} >
        Welcome to <span className="text-yellow-400">
          Little Lemmon
        </span>
      </h1>
      <form onSubmit={handleSubmit( onSubmit )} className={formulario} >
        <div className={contenedor}>
          <label className={label} >Username</label>
          <input type="text" placeholder="Kitten1234" className={input} {...register( "Username", { required: true, max: 32, min: 5 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Password</label>
          <input type="password" className={input} {...register( "Password", { required: true, max: 32, min: 8, maxLength: 48 } )} />
        </div>
        <input type="submit" value="Login" className={submit} />
      </form>
      <a href="/registro" className={hipervinculo}>
        Not an account yet? Create one
      </a>
    </>
  )
}



export default Login
