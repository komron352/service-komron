-- IMRAN SERVICE CRM - Production Schema
enable extension if not exists "uuid-ossp";

create table if not exists clients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text not null,
  car_model text,
  note text,
  created_at timestamp with time zone default now()
);

create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  client_id uuid references clients(id) on delete cascade,
  service text not null,
  date timestamp with time zone not null,
  status text default 'pending' check (status in ('pending','done','canceled')),
  price integer default 0,
  created_at timestamp with time zone default now()
);

create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  price integer not null,
  duration text,
  created_at timestamp with time zone default now()
);

create table if not exists sms_logs (
  id uuid primary key default uuid_generate_v4(),
  phone text not null,
  message text not null,
  status text default 'sent',
  created_at timestamp with time zone default now()
);

-- RLS
alter table clients enable row level security;
alter table appointments enable row level security;
alter table services enable row level security;
alter table sms_logs enable row level security;

create policy "Allow all for authenticated" on clients for all using (auth.role() = 'authenticated');
create policy "Allow all for authenticated" on appointments for all using (auth.role() = 'authenticated');
create policy "Allow all for authenticated" on services for all using (auth.role() = 'authenticated');
create policy "Allow all for authenticated" on sms_logs for all using (auth.role() = 'authenticated');

-- Seed
insert into services (name, price, duration) values
('Ташхиси компютерӣ', 150, '30 дақ'),
('Ивази равған', 120, '45 дақ'),
('Таъмири муҳаррик', 800, '4 соат')
on conflict do nothing;
