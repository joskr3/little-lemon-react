import { DatePickerDemo } from '@/components/custom/Calendario'
import styles from '../styles';
import CSNav from '@/components/custom/CustomNavbar';
import { useForm } from 'react-hook-form';
import Titulo from '@/components/custom/Titulo';

const Reservacion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const { formulario } = styles
  const { contenedor, circle } = myStyles

  const miData = ["T1", "T2", "T3", "T4"]

  const MiCampo = () => {
    return (
      <div className='flex gap-2 m-auto my-4 max-w-80 justify-between' >
        <label className="  flex justify-center text-green-700" >Select a Date</label>
        <DatePickerDemo />
      </div>
    )
  }

  const MiCampo2 = () => {
    return (
      <div className='flex gap-2 m-auto my-4 max-w-96 justify-between' >
        <label className="  flex justify-center text-green-700" >Select a Dinner</label>
        <input type="text" placeholder="Kitten1234" className="border border-green-700 text-green-700" {...register("Username", { required: true, max: 32, min: 5 })} />
      </div>
    )
  }

  return (
    <div>
      <CSNav />
      <Titulo texto1='Book a Table' />
      <div className={contenedor}>
        {miData.map((data, index) => <p key={index} className={circle}>
          {data}
        </p>)}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={formulario} >
        <MiCampo />
        <MiCampo2/>
        <input type="submit" value="Checkout" className="bg-green-700 text-yellow-400 p-2  m-auto max-w-80" />
      </form>
    </div>
  )
}

const myStyles = {
  circle: 'flex justify-center items-center  border border-yellow-400 rounded-full w-24 h-24 self-stretch text-center align-middle text-green-700',
  contenedor: 'border border-green-700 w-80 h-60 flex flex-wrap m-auto justify-center p-2 wrap gap-6'

}

export default Reservacion
