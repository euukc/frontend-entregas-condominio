import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-2 text-red-600">Ops! Página não encontrada.</p>
      <Link href={"/"}        
        className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition"
      >
        Voltar para início
      </Link>
    </div>
  );
}
