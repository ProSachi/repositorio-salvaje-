import binario from '../assets/abecedario-binario.png';
import "../styles/EstilosAura.css";
import '../';

const binaryText = "01000001 01100010 01100101 01101100 01100001 01110010 01100100 01101111 00100000 01101000 01101001 01101010 01110101 01100101 01110000 01110101 01110100 01100001";

const Aura = () => {
  return (
    <div>
      <h1>AURA</h1>
      <h2>Somos el team del Aura mi fafa</h2>
      
      <div className="tarjeta-contenedor"> 
        
        <h3>BINARIOS</h3>
        <div>
          <img 
            src={binario} 
            alt="Abecedario en binario" 
            className="imagen-estilizada" 
          />
          <h3>Descifra el código</h3>
          <div className="font-mono p-4 bg-gray-900 text-green-400 rounded-lg break-all">
            {binaryText}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aura;