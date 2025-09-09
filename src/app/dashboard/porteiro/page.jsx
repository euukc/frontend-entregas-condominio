"use client";

import { useEffect, useState } from "react";

export default function DashboardPorteiro() {
  const [moradorId, setMoradorId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState(null);

  const [moradores, setMoradores] = useState([]);
  const [entregas, setEntregas] = useState([]);  


  const verMoradores = async () => {

    try {
      const res = await fetch("http://localhost:4000/api/users/residents");

      if (res.ok) {
        const data = await res.json();
        setMoradores(data);
      }
    } catch (error) {
      console.error("Erro ao buscar moradores:", error);
    };
  }

  const verEntregas = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/deliveries");
      if (res.ok) {
        const data = await res.json();
        setEntregas(data);
      }
    } catch (error) {
      console.error("Erro ao buscar entregas:", error);
    }
  };

  const registrarEntrega = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/deliveries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resident: moradorId, descricao }),
      });

      if (res.ok) {
        await verEntregas();
        setMoradorId("");
        setDescricao("");
        setStatus("Entrega registrada com sucesso!");
      } else {
        setStatus("Erro ao registrar entrega.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setStatus("Erro ao conectar com servidor.");
    }

    setTimeout(() => setStatus(null), 3000);
  };

  useEffect(() => {
    verMoradores();
    verEntregas();
  }, []);


  return (
    <div className="min-h-screen b py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight drop-shadow-sm">
        Cadastrar Entrega
      </h1>

      <form onSubmit={registrarEntrega} className="space-y-4 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow p-5">
          <select onChange={(e) => setMoradorId(e.target.value)} className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition text-gray-900 placeholder-gray-400" required>
            <option value="" disabled>
              Selecione o morador
            </option>
            {moradores.map((m) => (
              <option key={m._id} value={m._id}>
                {m.nome}
              </option>
            ))}
          </select>

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
          <div key={e._id} className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-md shadow p-4 flex flex-col space-y-1">
            <span className="font-medium text-gray-900">
              Morador {e.resident?.nome} — {e.descricao}
            </span>
            <span className="text-xs text-gray-600">
              {e.status}
            </span>
          </div>
        ))}
      </div>
    </div>

  );
}

