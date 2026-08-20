import { useState } from 'react';
import './Gojo.css';

const Gojo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const alternarInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="gojo-container">
      {}
      <button className="gojo-btn" onClick={alternarInfo}>
        {showInfo ? 'Ocultar info' : 'Ver info de Satoru Gojo'}
      </button>

      {}
      {showInfo && (
        <div className="gojo-info">
          Es el chamán más fuerte del mundo. Poseedor de los <strong>Seis Ojos</strong> y la técnica del <strong>Infinito</strong>, lo que le permite manipular el espacio a su antojo y ser intocable.
        </div>
      )}
    </div>
  );
};

export default Gojo;