"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("morador");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha, role }),
    });

    if (res.ok) {
      alert("Usuário registrado com sucesso!");
      router.push("/login");
    } else {
      alert("Erro ao registrar usuário");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6 py-12 text-gray-900">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-8 shadow-lg"
      >
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" d="M3 7.5 12 3l9 4.5M3 7.5 12 12m0-9 9 4.5M3 7.5v9L12 21m0-9v9m9-13.5v9L12 21" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Registrar</h1>
          <p className="mt-1 text-sm text-gray-600">Crie sua conta para acessar o sistema</p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
          >
            <option value="morador">Morador</option>
            <option value="porteiro">Porteiro</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-indigo-600 px-4 py-3 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition cursor-pointer"
        >
          Registrar
        </button>

        <p className="text-sm text-center mt-4">
          Já tem conta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Faça login
          </span>
        </p>
      </form>
    </div>
  );
}
