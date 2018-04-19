-- create user demo createdb createuser password 'demo';
-- Database: demo

-- DROP DATABASE demo;

CREATE DATABASE demo
  WITH OWNER = hussein
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'en_US.UTF-8'
       LC_CTYPE = 'en_US.UTF-8'
       CONNECTION LIMIT = -1;


