import React from "react";
import CustomNavBar from "../../components/custom/CustomNavbar";
import Campo from "../../components/custom/Campo"
import Titulo from '../../components/custom/Titulo'
import { useForm } from 'react-hook-form';
import styles from "../styles";

function Login() {
  const { handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ( data ) => console.log( data );
  console.log( errors );

  const { formulario, submit, hipervinculo } = styles

  return (
    <>
      <CustomNavBar />
      <Titulo texto1="Welcome to" texto2="Little Lemmon" />
      <form onSubmit={handleSubmit( onSubmit )} className={formulario} >
        <Campo nombreCampo="username" placeholder="Kitten1234" opcionesRequeridas={{
          required: true,
          max: 32,
          min: 5
        }} />
        <Campo nombreCampo="password" tipo="password" opcionesRequeridas={{
          required: true,
          max: 32,
          min: 8,
          maxLength: 48
        }} />
        <input type="submit" value="Login" className={submit} />
      </form>
      <a href="/registro" className={hipervinculo}>
        Not an account yet? Create one
      </a>
    </>
  )
}

export default Login
