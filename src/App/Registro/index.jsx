import React from "react";
import CustomNavBar from "../../components/CustomNavbar";
import styles from "../styles";
import { useForm } from 'react-hook-form';

function Registro() {

  const { estilosTitulo, formulario, contenedor, label, input, submit } = styles
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log( data );
  console.log( errors );

  return (

    <>
      <CustomNavBar />
      <h1 className={estilosTitulo} >
        Sign up
      </h1>
      <form onSubmit={handleSubmit( onSubmit )} className={formulario} >
        <div className={contenedor}>
          <label className={label} >First name</label>
          <input type="text" placeholder="pedro pedro pedro" className={input} {...register( "firstname", { required: true, max: 32, min: 24 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Last name</label>
          <input type="text" className={input} {...register( "lastname", { required: true, max: 32, min: 24, maxLength: 48 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Create a username</label>
          <input type="text" placeholder="Kitten1234" className={input} {...register( "username", { required: true, max: 32, min: 5 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Phone number</label>
          <input type="telf" placeholder="+519999999999" className={input} {...register( "phone", { required: true, max: 12, min: 12 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Email</label>
          <input type="email" placeholder="mail@mail.coom" className={input} {...register( "email", { required: true, max: 32, min: 5 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Password</label>
          <input type="password" className={input} {...register( "password", { required: true, max: 32, min: 8, maxLength: 48 } )} />
        </div>
        <div className={contenedor}>
          <label className={label} >Confirm Password</label>
          <input type="password" className={input} {...register( "repassword", { required: true, max: 32, min: 8, maxLength: 48 } )} />
        </div>
        <input type="submit" value="Submit" className={submit} />
      </form>
    </>

  )
}

export default Registro
