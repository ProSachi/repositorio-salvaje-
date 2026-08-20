import React from 'react';
import aguadas from '../../assets/giphy.gif';
import styles from './JuanZapata.module.css';

const JuanZapata = () => {
    return (
        <div className={styles.wrapperGlobal}>
            {/* Etiquetas animadas "Juancho" flotando en los bordes/esquinas */}
            <span className={`${styles.tagJuancho} ${styles.pos1}`}>¡Juancho!</span>
            <span className={`${styles.tagJuancho} ${styles.pos2}`}>¡Juancho!</span>
            <span className={`${styles.tagJuancho} ${styles.pos3}`}>¡Juancho!</span>
            <span className={`${styles.tagJuancho} ${styles.pos4}`}>¡Juancho!</span>

            <div className={styles.tarjetaCentral}>
                <header className={styles.encabezado}>
                    <h1 className={styles.titulo}>
                        Hola, soy <span className={styles.resaltado}>Juan Zapata</span>
                    </h1>
                    <p className={styles.subtitulo}>El Pu.. de Aguadas</p>
                </header>

                <div className={styles.contenedorGif}>
                    <img
                        src={aguadas}
                        alt="El putas de aguadas"
                        className={styles.gifImagen}
                    />
                </div>
            </div>
        </div>
    );
};

export default JuanZapata;