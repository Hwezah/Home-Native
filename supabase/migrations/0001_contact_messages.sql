-- Contact form submissions (written by app/contact/actions.ts via the service role).
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  project_type text not null,
  message text not null
);

alter table public.contact_messages enable row level security;
-- No public policies: only the service role can read or write.
