import React from 'react';

export default function Jose() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="group relative w-80 overflow-hidden rounded-3xl bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
        
        {/* Contenedor de la Imagen */}
        <div className="h-72 w-full overflow-hidden rounded-2xl bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Atardecer hermoso"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Contenido y Botón */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div>
            <h3 className="text-sm font-medium text-slate-800">QUE VISTA MAS LINDA</h3>
            <p className="text-xs text-slate-400">TESPERO QUE TE GUSTE</p>
          </div>
          
          <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:bg-slate-800 active:scale-95">
            Explorar
          </button>
        </div>

      </div>
    </div>
  );
}
