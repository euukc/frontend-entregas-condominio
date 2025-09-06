"use client";

import { useState } from "react";

export default function DashboardMorador() {
  const [confirmadas, setConfirmadas] = useState([]);

  const entregas = [
    { _id: "1", descricao: "Pacote 1" },
    { _id: "2", descricao: "Pacote 2" },
    { _id: "3", descricao: "Pacote 3" },
  ];

  const entregaConfirmada = (_id) => {
    setConfirmadas((prev) => [...prev, _id]);
  };

  return (
    <div className="min-h-screen  text-gray-900">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
             
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" d="M3 7.5 12 3l9 4.5M3 7.5 12 12m0-9 9 4.5M3 7.5v9L12 21m0-9v9m9-13.5v9L12 21" />
              </svg>
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Minhas Entregas
            </h1>
          </div>

          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Atualizado em tempo real
          </span>
        </div>

        
        <p className="mt-2 text-sm text-black">
          Acompanhe suas encomendas e confirme a retirada na portaria.
        </p>

      
        <div className="mt-8">
          {entregas.length === 0 ? (
            <div className="max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm text-center">
              <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                  <path strokeWidth="1.5" d="M4.5 6.75h15v10.5h-15z" />
                  <path strokeWidth="1.5" d="m4.5 6.75 7.5 5.25 7.5-5.25" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold">Nenhuma entrega pendente</h2>
              <p className="mt-1 text-sm text-gray-600">
                Você será notificado quando algo chegar para você.
              </p>
            </div>
          ) : (
            <ul className="space-y-3 max-w-3xl mx-auto">
              {entregas.map((e) => {
                const isOk = confirmadas.includes(e._id);
                return (
                  <li
                    key={e._id}
                    className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition"
                  >
                   
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
                       
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                          <path strokeWidth="1.5" d="M3.75 6.75h16.5v10.5H3.75z" />
                          <path strokeWidth="1.5" d="m3.75 6.75 8.25 6 8.25-6" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">{e.descricao}</p>
                        
                        <p className="text-xs text-gray-500">Recebido há 5 min</p>
                      </div>
                    </div>

                   
                    <div className="flex items-center gap-3">
                      
                      <button
                        onClick={() => entregaConfirmada(e._id)}
                        className={`px-4 py-2 font-medium rounded-xl shadow  cursor-pointer transition
                          ${isOk
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                      >
                        {isOk ? "Confirmada" : "Confirmar"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
