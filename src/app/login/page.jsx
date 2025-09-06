"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErroLogin, setMensagemErroLogin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // chamada ao backend (ajustar URL)
    const res = await fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token); // salva JWT
      // Redireciona de acordo com o role
      if (data.role === "porteiro") {
        router.push("/dashboard/porteiro");
      } else {
        router.push("/dashboard/morador");
      }
    } else {
      mensagemErroLogin("E-mail ou senha inválidos. Tente novamente!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6 py-12 text-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-8 shadow-lg"
      >
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeWidth="1.5" d="M3 7.5 12 3l9 4.5M3 7.5 12 12m0-9 9 4.5M3 7.5v9L12 21m0-9v9m9-13.5v9L12 21" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Login</h1>
          <p className="mt-1 text-sm text-gray-600">Acesse seu painel para gerenciar entregas</p>
        </div>

        {mensagemErroLogin && (
          <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {mensagemErroLogin}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
            required 
            />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl cursor-pointer bg-indigo-600 px-4 py-3 text-white font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Entrar
        </button>

        <p className="text-sm text-center mt-4">
          Não tem conta?{" "}
          <span
            onClick={() => router.push("/registrar")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Registre-se
          </span>
        </p>
      </form>
    </div>
  );
}
