# VAO Todo

Clon minimo de Todoist con UI de VAO.world. Next.js 15+ (App Router, TS) + Supabase (Postgres+Auth+RLS) + Tailwind v4 + Vercel. Fase 1: esqueleto + auth con Google.

## Setup

1. Copia `.env.local.example` a `.env.local` y completa:
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (proyecto de Supabase).
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (para el provider de Google en Supabase Auth y el scope de Calendar).
2. En Supabase: **Authentication → Providers → Google**, habilita el provider con tus credenciales de Google OAuth.
3. En Google Cloud Console, agrega como redirect URI autorizado: `https://<tu-proyecto>.supabase.co/auth/v1/callback`.
4. Corre el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). Sin sesion, redirige a `/login`. El boton "Continuar con Google" inicia el OAuth flow; `/auth/callback` intercambia el codigo por sesion y redirige a `/`.

## Estructura

- `lib/supabase/{client,server,middleware}.ts` — helpers `@supabase/ssr`.
- `proxy.ts` — refresca sesion y protege rutas (convencion `proxy` de Next 16, reemplaza `middleware`).
- `app/login/page.tsx` — login con Google.
- `app/auth/callback/route.ts` — callback OAuth.
- `app/(app)/` — shell autenticado (sidebar + Hoy/Inbox/Proximo), sin datos aun (Fase 3).
- `components/Sidebar.tsx` — sidebar oscuro con navegacion.

Base de datos y CRUD llegan en las fases siguientes del prompt maestro.
