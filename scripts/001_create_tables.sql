-- Enable required extensions --------------------------------------------------
create extension if not exists "pgcrypto";

-- Table: contact_messages -----------------------------------------------------
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can send contact messages" on public.contact_messages;

create policy "Anyone can send contact messages"
  on public.contact_messages for insert
  with check (true);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- Table: product_inquiries ----------------------------------------------------
create table if not exists public.product_inquiries (
  id uuid primary key default gen_random_uuid(),
  category_id text not null,
  product_id text not null,
  product_name text not null,
  product_price text,
  customer_name text not null,
  customer_email text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.product_inquiries enable row level security;

drop policy if exists "Anyone can create product inquiries" on public.product_inquiries;

create policy "Anyone can create product inquiries"
  on public.product_inquiries for insert
  with check (true);

create index if not exists product_inquiries_created_at_idx
  on public.product_inquiries (created_at desc);

create index if not exists product_inquiries_product_idx
  on public.product_inquiries (category_id, product_id);

-- Table: training_registrations ----------------------------------------------
create table if not exists public.training_registrations (
  id uuid primary key default gen_random_uuid(),
  formation_name text not null,
  full_name text not null,
  email text not null,
  phone text not null,
  message text,
  created_at timestamp with time zone not null default now()
);

alter table public.training_registrations enable row level security;

drop policy if exists "Anyone can register for training" on public.training_registrations;

create policy "Anyone can register for training"
  on public.training_registrations for insert
  with check (true);

create index if not exists training_registrations_created_at_idx
  on public.training_registrations (created_at desc);
