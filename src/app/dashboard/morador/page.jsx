"use client";

import { useState } from "react";

export default function DashboardMorador() {
  const [confirmadas, setConfirmadas] = useState([]);

  const entregas = [
    { _id: "1", descricao: "Pacote 1" },
    { _id: "2", descricao: "Pacote 2" },
    { _id: "3", descricao: "Pacote 3" }
  ];

  const entregaConfirmada = (_id) => {
    setConfirmadas((prev) => [...prev, _id]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mt-6 text-gray-900 drop-shadow">
        Minhas Entregas
      </h1>

      {entregas.length === 0 ? (
        <p className="text-center mt-6 text-gray-700 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow">
          Nenhuma entrega pendente
        </p>
      ) : (
        <ul className="mt-6 space-y-3 max-w-2xl mx-auto">
          {entregas.map((e) => (
            <li
              key={e._id}
              className="flex justify-between items-center p-4 
                         bg-white/80 backdrop-blur-md rounded-xl 
                         shadow-md hover:shadow-lg transition"
            >
              <span className="font-medium text-gray-900">{e.descricao}</span>
              <button
                onClick={() => entregaConfirmada(e._id)}
                className={`px-4 py-2 font-medium rounded-lg shadow cursor-pointer transition
    ${confirmadas.includes(e._id)
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
              >
                {confirmadas.includes(e._id) ? "Confirmada" : "Confirmar"}
              </button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
