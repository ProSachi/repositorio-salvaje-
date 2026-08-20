import { useState } from 'react';

const Jonatan = () => {
  const [contador, setContador] = useState(0);
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador - 1)} style={{ marginLeft: '10px' }}>
        Decrementar
      </button>
    </div>
  );
};

export default Jonatan;