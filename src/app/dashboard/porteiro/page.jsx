"use client";

import { useState } from "react";

export default function DashboardPorteiro() {
  const [moradorId, setMoradorId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState(null);

  const [entregas, setEntregas] = useState([
    { _id: "1", moradorId: "123", descricao: "Pacote 1" },
    { _id: "2", moradorId: "456", descricao: "Pacote 2" },
    { _id: "3", moradorId: "789", descricao: "Pacote 3" },
  ]);

  const entregaRegistrada = (e) => {
    e.preventDefault();

    const novaEntrega = {
      _id: Date.now().toString(),
      moradorId,
      descricao,
    };

    setEntregas((prev) => [...prev, novaEntrega]);
    setMoradorId("");
    setDescricao("");
    setStatus("Entrega registrada com sucesso!");
    setTimeout(() => setStatus(null), 3000);
  };

  
  return (
    <div className="min-h-screen b py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Cadastrar Entrega
      </h1>

      <form onSubmit={entregaRegistrada} className="space-y-4 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow p-5">
          <input
            type="text"
            placeholder="ID do Morador"
            value={moradorId}
            onChange={(e) => setMoradorId(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow p-5">
          <input
            type="text"
            placeholder="Descrição da entrega"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition text-gray-900 placeholder-gray-400"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 font-medium rounded-xl shadow-md cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
          >
            Registrar
          </button>
        </div>
      </form>

      {status && (
        <p
          className="mt-6 text-center text-sm text-gray-700 bg-emerald-500/70 backdrop-blur-md p-3 rounded-xl shadow max-w-md mx-auto"
          aria-live="polite"
        >
          {status}
        </p>
      )}


      <div className="mt-10 max-w-2xl mx-auto space-y-3">
        {entregas.map((e) => (
          <div
            key={e._id}
            className="flex justify-between items-center p-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition"
          >
            <span className="font-medium text-gray-900">
              Morador {e.moradorId} — {e.descricao}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700">
              {/* atualizar conforme DB */}
              Pendente
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
