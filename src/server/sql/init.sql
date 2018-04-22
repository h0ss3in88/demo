-- create user demo createdb createuser password 'demo';
-- Database: demo

-- DROP DATABASE demo;

CREATE DATABASE demo
  WITH OWNER = hussein
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_US.UTF-8'
       LC_CTYPE = 'en_US.UTF-8'
       CONNECTION LIMIT = -1
       TEMPLATE template0;

create table user(
  user_id serial not null PRIMARY KEY,
  email VARCHAR(MAX) not null UNIQUE,
  salt varchar(250) not null ,
  hashed_password varchar(250) not null,
  profile jsonb default '{}'::jsonb,
  created_at TIMESTAMP not null DEFAULT now(),
  modified_at TIMESTAMP not null DEFAULT now()  
)
create table channel(
  channel_id serial not null PRIMARY KEY,
  channel_name varchar(250) not NULL ,
  owner INT not null ,
  members jsonb default '[]'::jsonb,
  created_at TIMESTAMP not null DEFAULT now(),
  modified_at TIMESTAMP not null DEFAULT now()  
);
create table room(
  room_id serial not null PRIMARY KEY,
  room_name varchar(250) not null ,
  members jsonb default '[]'::jsonb , 
  created_at TIMESTAMP not null DEFAULT now(),
  modified_at TIMESTAMP not null DEFAULT now()  
);