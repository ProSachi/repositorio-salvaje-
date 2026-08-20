import { useState } from "react";

function ModoOscuro(){
    const [oscuro, setOscuro] = useState(false);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: oscuro ? '#1e293b' : '#ffffff',
            transition: 'background 0.3s ease'
        }}>
            <button
            onClick={()=> setOscuro(!oscuro)}
            style={{
                fontSize: '22px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: oscuro ? '#1e293b' : '#f1f5f9',
                color: oscuro ? '#ffffff' : '#000000',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
            }}
            >
                <span>Toggle</span>
                <span
                style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: oscuro ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                >
                    {oscuro ? '🌙' : '☀️'}
                </span>
            </button>
        </div>
    )

}

export default ModoOscuro;