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

    const res = await fetch("http://localhost:3000/register", {
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
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-md w-96 text-black"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Registrar</h1>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        >
          <option value="morador">Morador</option>
          <option value="porteiro">Porteiro</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 cursor-pointer"
        >
          Registrar
        </button>

        <p className="text-sm text-center mt-4">
          Já tem conta?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Faça login
          </span>
        </p>
      </form>
    </div>
  );
}
