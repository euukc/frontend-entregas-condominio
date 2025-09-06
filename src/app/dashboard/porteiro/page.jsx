"use client";
import { useState } from "react";

export default function DashboardPorteiro() {
  const [moradorId, setMoradorId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState(null);
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mt-6 text-gray-900 drop-shadow">Cadastrar Entrega</h1>

        {/* onSubmit para submeter o formulario lá no button */}
      <form className="mt-6 space-y-3 max-w-2xl mx-auto text-gray-900"> 
        <input
          type="text"
          placeholder="ID do Morador"
          value={moradorId}
          onChange={(e) => setMoradorId(e.target.value)}
          className="flex justify-between items-center p-4 
                         bg-white/80 backdrop-blur-md rounded-xl 
                         shadow-md hover:shadow-lg transition min-w-[690px]"
          required
        />
        <input
          type="text"
          placeholder="Descrição da entrega"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="flex justify-between items-center p-4 
                         bg-white/80 backdrop-blur-md rounded-xl 
                         shadow-md hover:shadow-lg transition min-w-[690px]"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-bold rounded-md cursor-pointer"
        >
          Registrar
        </button>
      </form>

      {status && <p className="mt-3">{status}</p>}
    </div>
  );
}
