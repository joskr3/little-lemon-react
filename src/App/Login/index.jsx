import React from "react";
import CustomNavBar from "../../components/CustomNavbar";
import { useForm } from 'react-hook-form';

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

const styles = {
  estilosTitulo: "flex flex-col gap-1 text-green-700 italic m-auto text-pretty  mb-10 text-3xl md:text-8xl justify-center text-center",
  formulario: "flex flex-col gap-3 mb-3",
  contenedor: "flex flex-col  md:flex-row gap-4 text-white bg-green-700 p-3 max-w-fit rounded-md m-auto",
  label: "text-sm  flex flex-col justify-center ",
  input: "rounded-md p-1  text-green-700",
  submit: "text-green-700 bg-yellow-300 rounded-full py-1 my-12 px-4 w-fit mb-3 m-auto text-sm",
  hipervinculo: "flex no-underline text-yellow-500 m-auto justify-center"
}

export default Login
