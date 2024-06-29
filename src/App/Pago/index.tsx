import CSNav from "@/components/custom/CustomNavbar";
import Titulo from "@/components/custom/Titulo";

function Pago() {
  const { pago, contenedor } = pagoStyles
  const metodosPago = ["Payment 1", "Payment 2", "Payment 3", "Payment 4"]
  return (
    <div>
      <CSNav />
      <Titulo texto1=" Payment method" />
      <div className={contenedor}>
        {
          metodosPago.map(metodoPago => <p className={pago}>
            {metodoPago}
          </p>)
        }
      </div>
    </div>
  )
}

const pagoStyles = {
  pago: "bg-green-700 p-3 text-yellow-400 w-20 h-20 border border-yellow-400",
  contenedor: "w-60  flex flex-wrap m-auto justify-center p-2 wrap gap-6"
}
export default Pago
