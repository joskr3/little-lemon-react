import CSNav from "@/components/custom/CustomNavbar";
import React from "react";
import styles from "../styles";

function Pago() {
  return (
    <div>
      <CSNav />
      <h1 className={styles.estilosTitulo} >
        Payment method
      </h1>

      <div className=' w-60  flex flex-wrap m-auto justify-center p-2 wrap gap-6'>
        <p className="bg-green-700 p-3 text-yellow-400 w-20 h-20">
          Payment 1
        </p>
        <p className="bg-yellow-400 p-3 text-green-700 w-20 h-20">
          Payment 2
        </p>
        <p className="bg-yellow-400 p-3 text-green-700 w-20 h-20">
          Payment 4
        </p>
        <p className="bg-green-700 p-3 text-yellow-400 w-20 h-20">
          Payment 3
        </p>

      </div>

    </div>
  )
}

export default Pago
