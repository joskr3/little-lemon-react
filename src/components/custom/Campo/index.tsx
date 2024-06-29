import styles from '@/App/styles';
import { useForm } from 'react-hook-form';

interface Props {
  nombreCampo: string,
  placeholder?: string,
  tipo?: string
  opcionesRequeridas?: {
    required: boolean, max?: number, min?: number, maxLength?: number
  }
}

const Campo = ({ nombreCampo="", placeholder = "", tipo = "text", opcionesRequeridas = {
  required: false,
  max: 0,
  min: 0,
  maxLength: 0
} }: Props) => {
  const { register, formState: { errors } } = useForm();

  console.log(errors);

  const { contenedor, label, input } = styles

  return (
    <div className={contenedor}>
      <label className={label} >{nombreCampo}</label>
      <input type={tipo} placeholder={placeholder} className={input} {...register(nombreCampo, opcionesRequeridas)} />
    </div>
  )
}

export default Campo
