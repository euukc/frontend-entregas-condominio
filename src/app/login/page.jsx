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
      mensagemErroLogin("Credenciais inválidas");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Entrar
        </button>

        <p className="text-sm text-center mt-4">
          Não tem conta?{" "}
          <span
            onClick={() => router.push("/registrar")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Registre-se
          </span>
        </p>
      </form>
    </div>
  );
}
