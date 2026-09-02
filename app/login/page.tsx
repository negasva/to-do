"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const signInWithGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        scopes: "https://www.googleapis.com/auth/calendar.events",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper-2)]">
      <div className="flex flex-col items-center gap-6 rounded-[var(--r)] bg-[var(--paper)] p-10 shadow-sm">
        <h1 className="text-2xl font-extrabold text-[var(--text)]">VAO Todo</h1>
        <button
          onClick={signInWithGoogle}
          className="flex items-center gap-3 rounded-[var(--r)] bg-[var(--ink)] px-6 py-3 font-semibold text-[var(--cyan)] transition hover:bg-[var(--ink-2)]"
        >
          Continuar con Google
        </button>
      </div>
    </div>
  );
}
