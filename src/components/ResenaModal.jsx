import React from 'react';
import styles from './ResenaModal.module.css';

const ResenaModal = () => {

const reseñas = [
  {
    id: 1,
    user: "María Gómez",
    title: "¡Excelente servicio y calidad!",
    comment: "El producto superó mis expectativas. El envío fue rápido y la atención al cliente de primera."
  },
  {
    id: 2,
    user: "Carlos Ruiz",
    title: "Muy bueno, aunque tardó un poco",
    comment: "La calidad del material es muy buena y tal como se ve en la foto. Lo único malo fue la mensajería."
  },
  {
    id: 3,
    user: "Ana Torres",
    title: "No cumplió lo prometido",
    comment: "El tamaño es más pequeño de lo que indicaban las especificaciones. No volvería a comprar."
  }
]

  return (
    <>
    <h1>a</h1>
      {reseñas.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.header}>
              <div className={styles.userInfo}>
                <span className={styles.username}>{item.user}</span>
              </div>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.comment}>{item.comment}</p>
          </div>
        ))}
    
    </>
  )
}

export default ResenaModal