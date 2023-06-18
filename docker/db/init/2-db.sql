--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: trading; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA trading;


ALTER SCHEMA trading OWNER TO postgres;

--
-- Name: jwt_token; Type: TYPE; Schema: trading; Owner: postgres
--

CREATE TYPE trading.jwt_token AS (
	role character varying,
	user_id integer,
	customer_id integer,
	expiration integer
);


ALTER TYPE trading.jwt_token OWNER TO postgres;

--
-- Name: SCHEMA trading; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA trading TO administrator;


--
-- PostgreSQL database dump complete
--

