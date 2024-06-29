import React from "react";
import CustomNavBar from "../../components/custom/CustomNavbar";
import styles from "../styles";
import { useForm } from 'react-hook-form';
import Campo from "../../components/custom/Campo";
import dataRegistro from "../../api/dataRegistro"
import Titulo from "../../components/custom/Titulo";

function Registro() {
  const { formulario, submit } = styles
  const { handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log( data );
  console.log( errors );

  return (
    <>
      <CustomNavBar />
      <Titulo texto1="Sign up"/>
      <form onSubmit={handleSubmit( onSubmit )} className={formulario} >
        {
          dataRegistro.map( ( { nombreCampo, placeholder,opcionesRequeridas,tipo } ) => <Campo nombreCampo={nombreCampo} placeholder={placeholder} opcionesRequeridas={opcionesRequeridas} tipo={tipo}  /> )
        }
        <input type="submit" value="Submit" className={submit} />
      </form>
    </>

  )
}

export default Registro
