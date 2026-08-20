import styles from "./Tarjetas.module.css"

const Tarjetas = () => {
    const tarjeta = [
        {
            id: 1,
            nombre: "Nike",
            talla: "38",
            precio: "$10,000"
        },
        {
            id: 2,
            nombre: "Adidas",
            talla: "40",
            precio: "$30,000"
        },
        {
            id: 3,
            nombre: "Nike",
            talla: "45",
            precio: "$20,000"
        }
    ]
    return (
        <div className={styles.contenedorTarjetas}>
            <div className={styles.contenedorTarjetas}>
                {tarjeta.map((dato) => (
                    <div className={styles.tarjeta} key={dato.id}>
                        <div className={styles.tarjetaImagen}>
                            img
                        </div>

                        <div className={styles.tarjetaInfo}>
                            <h1>Zapato: {dato.nombre}</h1>
                            <p>Talla: {dato.talla}</p>
                            <span>Precio: {dato.precio}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tarjetas