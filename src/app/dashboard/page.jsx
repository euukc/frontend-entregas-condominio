"use client";

export default function Dashboard() {
  // const router = useRouter();

  // useEffect(() => {
  //   const user = getUser(); // { id, role: "morador" | "porteiro" }
  //   if (!user) {
  //     router.push("/login");
  //     return;
  //   }

  //   if (user.role === "morador") {
  //     router.push("/dashboard/morador");
  //   } else if (user.role === "porteiro") {
  //     router.push("/dashboard/porteiro");
  //   }
  // }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6 py-12 text-gray-900">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-8 shadow-lg text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
            <path strokeWidth="1.5" d="M3 7.5 12 3l9 4.5M3 7.5 12 12m0-9 9 4.5M3 7.5v9L12 21m0-9v9m9-13.5v9L12 21" />
          </svg>
        </div>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight">Redirecionando para seu painel...</p>
        <p className="mt-2 text-sm text-gray-600">Aguarde um instante enquanto validamos seu acesso</p>

        <div className="mt-6 flex items-center justify-center">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></span>
        </div>
      </div>
    </div>
  );
}
