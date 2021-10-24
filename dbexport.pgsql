--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

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
-- Name: cart_item; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.cart_item (
    id integer NOT NULL,
    session_id integer,
    product_id integer,
    quantity integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.cart_item OWNER TO anhtran;

--
-- Name: cart_item_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.cart_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cart_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: discount; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.discount (
    id integer NOT NULL,
    name character varying(100),
    description text,
    discount_percent smallint,
    active boolean,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    deleted_at timestamp without time zone,
    slug character varying(100)
);


ALTER TABLE public.discount OWNER TO anhtran;

--
-- Name: discount_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.discount ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.discount_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: order_details; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.order_details (
    id integer NOT NULL,
    user_id integer,
    total integer,
    payment_id integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.order_details OWNER TO anhtran;

--
-- Name: order_details_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.order_details ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: order_item; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.order_item (
    id integer NOT NULL,
    order_id integer,
    product_id integer,
    quantity integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.order_item OWNER TO anhtran;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.order_item ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.order_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: payment_details; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.payment_details (
    id integer NOT NULL,
    order_id integer,
    amount integer,
    provider character varying,
    status character varying,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.payment_details OWNER TO anhtran;

--
-- Name: payment_details_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.payment_details ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.payment_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(255),
    description text,
    sku character varying(20),
    category_id integer,
    inventory integer,
    price integer,
    discount_id integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    deleted_at timestamp without time zone,
    photos text,
    slug character varying(200)
);


ALTER TABLE public.product OWNER TO anhtran;

--
-- Name: product_category; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.product_category (
    id integer NOT NULL,
    name character varying(100),
    description text,
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    deleted_at timestamp without time zone,
    slug character varying(130)
);


ALTER TABLE public.product_category OWNER TO anhtran;

--
-- Name: product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product_category ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.product ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: shopping_session; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.shopping_session (
    id integer NOT NULL,
    user_id integer,
    total integer,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.shopping_session OWNER TO anhtran;

--
-- Name: shopping_session_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.shopping_session ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.shopping_session_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(50),
    password text,
    name character varying(50),
    phone character varying(15),
    created_at timestamp without time zone,
    modified_at timestamp without time zone,
    role character varying(10)
);


ALTER TABLE public."user" OWNER TO anhtran;

--
-- Name: user_address; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.user_address (
    id integer NOT NULL,
    user_id integer,
    address_line1 text,
    address_line2 text,
    city character varying(30),
    postal_code character varying(10),
    country character varying(10),
    phone character varying(15)
);


ALTER TABLE public.user_address OWNER TO anhtran;

--
-- Name: user_address_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.user_address ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_address_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public."user" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: user_payment; Type: TABLE; Schema: public; Owner: anhtran
--

CREATE TABLE public.user_payment (
    id integer NOT NULL,
    user_id integer,
    payment_type character varying(30),
    provider character varying(30),
    acount_no integer,
    expiry date,
    created_at timestamp without time zone,
    modified_at timestamp without time zone
);


ALTER TABLE public.user_payment OWNER TO anhtran;

--
-- Name: user_payment_id_seq; Type: SEQUENCE; Schema: public; Owner: anhtran
--

ALTER TABLE public.user_payment ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_payment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: cart_item; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.cart_item (id, session_id, product_id, quantity, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: discount; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.discount (id, name, description, discount_percent, active, created_at, modified_at, deleted_at, slug) FROM stdin;
\.


--
-- Data for Name: order_details; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.order_details (id, user_id, total, payment_id, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.order_item (id, order_id, product_id, quantity, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: payment_details; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.payment_details (id, order_id, amount, provider, status, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product (id, name, description, sku, category_id, inventory, price, discount_id, created_at, modified_at, deleted_at, photos, slug) FROM stdin;
\.


--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.product_category (id, name, description, created_at, modified_at, deleted_at, slug) FROM stdin;
1	Bộ sưu tập mùa đông	xyz	2021-10-21 09:12:18.085	\N	\N	bo-suu-tap-mua-djong
\.


--
-- Data for Name: shopping_session; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.shopping_session (id, user_id, total, created_at, modified_at) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public."user" (id, email, password, name, phone, created_at, modified_at, role) FROM stdin;
2	tranquocanh.3009@gmail.com	$2a$06$Jb/OMfcZazQVpk8BvGrSCOf25XeiOGBA9Kp0pe0CSzYIsVRlN8ebK	anh	\N	2021-10-21 07:39:33.026	2021-10-22 07:14:47.343	admin
6	kjh	123	456	\N	\N	\N	\N
\.


--
-- Data for Name: user_address; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.user_address (id, user_id, address_line1, address_line2, city, postal_code, country, phone) FROM stdin;
2	2	duc tan	\N	long an	\N	\N	123456
\.


--
-- Data for Name: user_payment; Type: TABLE DATA; Schema: public; Owner: anhtran
--

COPY public.user_payment (id, user_id, payment_type, provider, acount_no, expiry, created_at, modified_at) FROM stdin;
\.


--
-- Name: cart_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.cart_item_id_seq', 1, false);


--
-- Name: discount_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.discount_id_seq', 1, false);


--
-- Name: order_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.order_details_id_seq', 1, false);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- Name: payment_details_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.payment_details_id_seq', 1, false);


--
-- Name: product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_category_id_seq', 2, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.product_id_seq', 1, false);


--
-- Name: shopping_session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.shopping_session_id_seq', 1, false);


--
-- Name: user_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_address_id_seq', 3, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_id_seq', 6, true);


--
-- Name: user_payment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: anhtran
--

SELECT pg_catalog.setval('public.user_payment_id_seq', 1, false);


--
-- Name: cart_item cart_item_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_pkey PRIMARY KEY (id);


--
-- Name: cart_item cart_item_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_product_id_key UNIQUE (product_id);


--
-- Name: discount discount_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.discount
    ADD CONSTRAINT discount_pkey PRIMARY KEY (id);


--
-- Name: order_details order_details_payment_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_payment_id_key UNIQUE (payment_id);


--
-- Name: order_details order_details_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (id);


--
-- Name: order_details order_details_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_user_id_key UNIQUE (user_id);


--
-- Name: order_item order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: order_item order_items_product_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_product_id_key UNIQUE (product_id);


--
-- Name: payment_details payment_details_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_pkey PRIMARY KEY (id);


--
-- Name: product_category product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pkey PRIMARY KEY (id);


--
-- Name: product product_inventory_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_inventory_id_key UNIQUE (inventory);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- Name: shopping_session shopping_session_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_pkey PRIMARY KEY (id);


--
-- Name: shopping_session shopping_session_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_user_id_key UNIQUE (user_id);


--
-- Name: user_address user_address_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_pkey PRIMARY KEY (id);


--
-- Name: user_address user_address_user_id_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_user_id_key UNIQUE (user_id);


--
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- Name: user_payment user_payment_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_payment
    ADD CONSTRAINT user_payment_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: cart_item cart_item_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: cart_item cart_item_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.shopping_session(id);


--
-- Name: order_details order_details_payment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES public.payment_details(id);


--
-- Name: order_details order_details_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: order_item order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.order_details(id);


--
-- Name: order_item order_items_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- Name: payment_details payment_details_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_id_fkey FOREIGN KEY (id) REFERENCES public.order_details(payment_id);


--
-- Name: payment_details payment_details_id_fkey1; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.payment_details
    ADD CONSTRAINT payment_details_id_fkey1 FOREIGN KEY (id) REFERENCES public.order_details(payment_id);


--
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.product_category(id);


--
-- Name: product product_discount_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_discount_id_fkey FOREIGN KEY (discount_id) REFERENCES public.discount(id);


--
-- Name: product product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_id_fkey FOREIGN KEY (id) REFERENCES public.order_item(product_id);


--
-- Name: shopping_session shopping_session_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.shopping_session
    ADD CONSTRAINT shopping_session_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: user_address user_address_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_address
    ADD CONSTRAINT user_address_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- Name: user_payment user_payment_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: anhtran
--

ALTER TABLE ONLY public.user_payment
    ADD CONSTRAINT user_payment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

