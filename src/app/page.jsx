"use client";

import Link from "next/link";
import { useMemo } from "react";

export default function Home() {  
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900">
      
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b border-gray-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                <path strokeWidth="1.5" d="M3 7.5 12 3l9 4.5M3 7.5 12 12m0-9 9 4.5M3 7.5v9L12 21m0-9v9m9-13.5v9L12 21"/>
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">Residencial Senac</span>
          </div>
         
          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 rounded-xl border border-gray-300 hover:border-gray-400 hover:bg-white/70 transition shadow-sm">Login</Link>
            <Link href="/registrar" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition">Registrar</Link>
          </div>
        </div>
      </header>

      
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl"/>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-100 blur-3xl"/>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"/> Novo
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Gestão simples de <span className="text-indigo-600">entregas</span> do residencial
                </h1>
               
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/register" className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg transition">Começar agora</Link>
                  <Link href="/login" className="px-5 py-3 rounded-xl border border-gray-300 hover:border-gray-400 hover:bg-white/70 font-medium shadow-sm transition">Já tenho conta</Link>
                </div>
               
              </div>

              
              <div className="md:justify-self-end w-full">
                <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-xl p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500"/>
                      <span className="text-xs font-medium text-gray-600">Porteiro online</span>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Em tempo real</span>
                  </div>

                  <div className="mt-4 divide-y divide-gray-100/80">
                    {[
                      { id: "1", desc: "Pacote #A23 - Morador 302", status: "Pendente" },
                      { id: "2", desc: "Encomenda - Bloco B 512", status: "Notificado" },
                      { id: "3", desc: "Correspondência - 104", status: "Retirado" },
                    ].map((item) => (
                      <div key={item.id} className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-100">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                              <path strokeWidth="1.5" d="M3.75 6.75h16.5v10.5H3.75z"/>
                              <path strokeWidth="1.5" d="m3.75 6.75 8.25 6 8.25-6"/>
                            </svg>
                          </span>
                          <div>
                            <p className="text-sm font-medium">{item.desc}</p>
                            <p className="text-xs text-gray-500">Recebido há 5 min</p>
                          </div>
                        </div>
                        <span className={
                          "text-xs px-2.5 py-1 rounded-full border " +
                          (item.status === "Retirado"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : item.status === "Notificado"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-gray-50 text-gray-700 border-gray-200")
                        }>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <button className="col-span-2 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium shadow transition">Registrar entrega</button>
                    <button className="px-3 py-2 rounded-xl border border-gray-300 hover:border-gray-400 bg-white/70 text-sm font-medium shadow-sm transition">Ver todas</button>
                  </div>
                </div>               
              </div>
            </div>
          </div>
        </section>

        
        <section id="features" className="py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Check-in de entregas",
                  desc: "Registre pacotes em segundos e notifique o morador automaticamente.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                      <path strokeWidth="1.5" d="M4.5 6.75h15v10.5h-15z"/>
                      <path strokeWidth="1.5" d="m4.5 6.75 7.5 5.25 7.5-5.25"/>
                    </svg>
                  ),
                },
                {
                  title: "Confirmação na retirada",
                  desc: "Morador assina/valida no balcão ou via app e tudo fica registrado.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                      <path strokeWidth="1.5" d="m4 12 5 5 11-11"/>
                    </svg>
                  ),
                },
                {
                  title: "Relatórios simples",
                  desc: "Acompanhe volumes por dia/bloco e reduza extravios sem dor de cabeça.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                      <path strokeWidth="1.5" d="M4 20h16M6 17V7m6 10V4m6 13V10"/>
                    </svg>
                  ),
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section id="como-funciona" className="py-14 sm:py-20 bg-white/60 border-y border-gray-200/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: 1, title: "Crie sua conta", desc: "Registre o condomínio e os blocos em minutos." },
                { step: 2, title: "Registre entregas", desc: "Porteiro lança os pacotes e o morador recebe notificação." },
                { step: 3, title: "Confirme retirada", desc: "Valide a retirada e mantenha o histórico sempre acessível." },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold">
                    {s.step}
                  </div>
                  <h4 className="mt-3 font-semibold">{s.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/registrar" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg transition">
                Começar
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                  <path strokeWidth="1.5" d="M5 12h14m-6-6 6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm text-gray-600">© {year} Residencial Senac. Todos os direitos reservados.</p>            
          </div>
        </div>
      </footer>
    </div>
  );
}
