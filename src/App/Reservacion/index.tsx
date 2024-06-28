import { DatePickerDemo } from '@/components/custom/Calendario'
import styles from '../styles';
import CSNav from '@/components/custom/CustomNavbar';
import { useForm } from 'react-hook-form';

const Reservacion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const { estilosTitulo,formulario } = styles
  return (
    <div>
      <CSNav />
      <h1 className={estilosTitulo} >
        Book a Table
      </h1>
      <div className=' border border-green-700 w-80 h-60 flex flex-wrap m-auto justify-center p-2 wrap gap-6'>
        <p className={myStyles.circle}>
          T1
        </p>
        <p className={myStyles.circle}>
          T2
        </p>
        <p className={myStyles.circle}>
          T3
        </p>
        <p className={myStyles.circle}>
          T4
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={formulario} >
        <div className='flex gap-2 m-auto my-4 max-w-80 justify-between' >
          <label className="  flex justify-center text-green-700" >Select a Date</label>
          <DatePickerDemo />
        </div>


        <div className='flex gap-2 m-auto my-4 max-w-96 justify-between' >
          <label className="  flex justify-center text-green-700" >Select a Dinner</label>
          <input type="text" placeholder="Kitten1234" className="border border-green-700 text-green-700" {...register("Username", { required: true, max: 32, min: 5 })} />
        </div>


        <input type="submit" value="Checkout" className="bg-green-700 text-yellow-400 p-2  m-auto max-w-80"  />
      </form>

      
    </div>
  )
}


const myStyles = {
  circle: 'flex justify-center items-center  border border-yellow-400 rounded-full w-24 h-24 self-stretch text-center align-middle text-green-700',

}

export default Reservacion
