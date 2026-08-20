import chocorramoImg from '../chocorramo.jpg'

const Chocorramo = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Chocorramo</h2>
      <img 
        src={chocorramoImg} 
        alt="Chocorramo" 
        style={{ width: '300px', borderRadius: '8px' }} 
      />
    </div>
  );
};

export default Chocorramo;