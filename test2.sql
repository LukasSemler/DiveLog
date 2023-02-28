--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.5 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dive; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dive (
    "d_ID" integer NOT NULL,
    title character varying(100) NOT NULL,
    date date NOT NULL,
    location character varying(75) NOT NULL,
    divesite text NOT NULL,
    "airIn" numeric NOT NULL,
    "airOut" numeric NOT NULL,
    depth numeric NOT NULL,
    weight numeric NOT NULL,
    "airType" text NOT NULL,
    suit text NOT NULL,
    nr integer NOT NULL,
    fk_user integer,
    "diveTime" integer NOT NULL,
    coords text
);


ALTER TABLE public.dive OWNER TO postgres;

--
-- Name: dive_d_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."dive_d_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."dive_d_ID_seq" OWNER TO postgres;

--
-- Name: dive_d_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."dive_d_ID_seq" OWNED BY public.dive."d_ID";


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    u_id integer NOT NULL,
    vorname character varying(50) NOT NULL,
    nachname character varying(75) NOT NULL,
    email text NOT NULL,
    passwort text NOT NULL,
    strasse text NOT NULL,
    hnr character varying(20) NOT NULL,
    plz character varying(50) NOT NULL,
    stadt character varying(50) NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_u_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_u_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_u_id_seq OWNER TO postgres;

--
-- Name: user_u_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_u_id_seq OWNED BY public."user".u_id;


--
-- Name: dive d_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dive ALTER COLUMN "d_ID" SET DEFAULT nextval('public."dive_d_ID_seq"'::regclass);


--
-- Name: user u_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN u_id SET DEFAULT nextval('public.user_u_id_seq'::regclass);


--
-- Data for Name: dive; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.dive VALUES (1, 'Maldives 1', '2023-01-03', 'Maldives', 'Amari Havodda HR', 200, 50, 29.3, 6, 'EANX33', '3mm', 1, 3, 54, '[52.507351, -1.127758]');
INSERT INTO public.dive VALUES (2, 'Ägypten 1', '2023-01-03', 'Ägypten', 'Solymar Reef', 200, 75, 21, 6, 'Air', '5mm', 2, 3, 60, '[52.507351, -0.127758]');
INSERT INTO public.dive VALUES (4, 'Test', '2023-02-22', 'Austria', 'Schule', 200, 55, 30, 6, 'Air', '7mm', 3, 3, 55, '[51.507351, -0.127758]');
INSERT INTO public.dive VALUES (5, 'Test', '2023-02-22', 'Austria', 'Schule', 200, 55, 30, 6, 'Air', '7mm', 4, 3, 55, '[51.507351, -1.127758]');
INSERT INTO public.dive VALUES (6, 'Österreich 1', '2023-03-07', 'Österreich', 'HTL Wien West', 200, 50, 20, 6, 'EANx 30', 'Dry', 5, 3, 50, '[16.3129444,48.2116605]');


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."user" VALUES (3, 'Lukas', 'Semler', 'lukas.semler@gmail.com', 'LukasPW', 'Venusweg', '11', '1140', 'Wien');
INSERT INTO public."user" VALUES (4, 'Max', 'Mustermann', 'max.mustermann@gmail.com', 'MaxPW', 'xxx', '11', '1140', 'Wien');


--
-- Name: dive_d_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."dive_d_ID_seq"', 6, true);


--
-- Name: user_u_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_u_id_seq', 4, true);


--
-- Name: dive dive_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dive
    ADD CONSTRAINT dive_pk PRIMARY KEY ("d_ID");


--
-- Name: user user_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pk PRIMARY KEY (u_id);


--
-- Name: dive fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dive
    ADD CONSTRAINT fk_user FOREIGN KEY (fk_user) REFERENCES public."user"(u_id);


--
-- PostgreSQL database dump complete
--

