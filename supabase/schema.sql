-- IMRAN SERVICE CRM schema
create table if not exists clients (id uuid primary key default gen_random_uuid(), name text not null, phone text, created_at timestamp default now());
create table if not exists appointments (id uuid primary key default gen_random_uuid(), client_id uuid references clients(id), service text, date date, time text, status text default 'pending', created_at timestamp default now());
create table if not exists services (id uuid primary key default gen_random_uuid(), name text, price numeric, created_at timestamp default now());
create table if not exists sms_logs (id uuid primary key default gen_random_uuid(), phone text, message text, status text, created_at timestamp default now());
