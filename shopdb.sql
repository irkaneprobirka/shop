--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-09-23 18:12:16

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
-- TOC entry 226 (class 1259 OID 16463)
-- Name: basket_devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.basket_devices (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "deviceId" integer
);


ALTER TABLE public.basket_devices OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16462)
-- Name: basket_devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.basket_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.basket_devices_id_seq OWNER TO postgres;

--
-- TOC entry 4889 (class 0 OID 0)
-- Dependencies: 225
-- Name: basket_devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.basket_devices_id_seq OWNED BY public.basket_devices.id;


--
-- TOC entry 218 (class 1259 OID 16411)
-- Name: baskets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);


ALTER TABLE public.baskets OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16410)
-- Name: baskets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.baskets_id_seq OWNER TO postgres;

--
-- TOC entry 4890 (class 0 OID 0)
-- Dependencies: 217
-- Name: baskets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;


--
-- TOC entry 222 (class 1259 OID 16432)
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16431)
-- Name: brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.brands_id_seq OWNER TO postgres;

--
-- TOC entry 4891 (class 0 OID 0)
-- Dependencies: 221
-- Name: brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;


--
-- TOC entry 230 (class 1259 OID 16497)
-- Name: device_infos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.device_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deviceId" integer
);


ALTER TABLE public.device_infos OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16496)
-- Name: device_infos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.device_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.device_infos_id_seq OWNER TO postgres;

--
-- TOC entry 4892 (class 0 OID 0)
-- Dependencies: 229
-- Name: device_infos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.device_infos_id_seq OWNED BY public.device_infos.id;


--
-- TOC entry 224 (class 1259 OID 16441)
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    rating integer DEFAULT 0,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer NOT NULL,
    description text
);


ALTER TABLE public.devices OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16440)
-- Name: devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.devices_id_seq OWNER TO postgres;

--
-- TOC entry 4893 (class 0 OID 0)
-- Dependencies: 223
-- Name: devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.devices_id_seq OWNED BY public.devices.id;


--
-- TOC entry 228 (class 1259 OID 16480)
-- Name: ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "deviceId" integer
);


ALTER TABLE public.ratings OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16479)
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ratings_id_seq OWNER TO postgres;

--
-- TOC entry 4894 (class 0 OID 0)
-- Dependencies: 227
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- TOC entry 232 (class 1259 OID 16511)
-- Name: type_brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);


ALTER TABLE public.type_brands OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16510)
-- Name: type_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.type_brands_id_seq OWNER TO postgres;

--
-- TOC entry 4895 (class 0 OID 0)
-- Dependencies: 231
-- Name: type_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;


--
-- TOC entry 220 (class 1259 OID 16423)
-- Name: types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.types OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16422)
-- Name: types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.types_id_seq OWNER TO postgres;

--
-- TOC entry 4896 (class 0 OID 0)
-- Dependencies: 219
-- Name: types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;


--
-- TOC entry 216 (class 1259 OID 16399)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    name character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16398)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 4897 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4681 (class 2604 OID 16466)
-- Name: basket_devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices ALTER COLUMN id SET DEFAULT nextval('public.basket_devices_id_seq'::regclass);


--
-- TOC entry 4676 (class 2604 OID 16414)
-- Name: baskets id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);


--
-- TOC entry 4678 (class 2604 OID 16435)
-- Name: brands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);


--
-- TOC entry 4683 (class 2604 OID 16500)
-- Name: device_infos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos ALTER COLUMN id SET DEFAULT nextval('public.device_infos_id_seq'::regclass);


--
-- TOC entry 4679 (class 2604 OID 16444)
-- Name: devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices ALTER COLUMN id SET DEFAULT nextval('public.devices_id_seq'::regclass);


--
-- TOC entry 4682 (class 2604 OID 16483)
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- TOC entry 4684 (class 2604 OID 16514)
-- Name: type_brands id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);


--
-- TOC entry 4677 (class 2604 OID 16426)
-- Name: types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);


--
-- TOC entry 4674 (class 2604 OID 16402)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4877 (class 0 OID 16463)
-- Dependencies: 226
-- Data for Name: basket_devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.basket_devices (id, "createdAt", "updatedAt", "basketId", "deviceId") FROM stdin;
5	2024-09-21 23:24:18.635+03	2024-09-21 23:24:18.635+03	1	1
1	2024-09-21 23:18:18.773+03	2024-09-21 23:18:18.773+03	1	5
2	2024-09-21 23:19:13.536+03	2024-09-21 23:19:13.536+03	2	5
3	2024-09-21 23:20:32.15+03	2024-09-21 23:20:32.15+03	1	17
4	2024-09-21 23:22:19.888+03	2024-09-21 23:22:19.888+03	4	1
6	2024-09-23 16:05:18.862+03	2024-09-23 16:05:18.862+03	\N	\N
7	2024-09-23 16:08:17.069+03	2024-09-23 16:08:17.069+03	1	17
\.


--
-- TOC entry 4869 (class 0 OID 16411)
-- Dependencies: 218
-- Data for Name: baskets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
1	2024-08-30 18:28:03.778+03	2024-08-30 18:28:03.778+03	1
2	2024-08-30 19:50:35.866+03	2024-08-30 19:50:35.866+03	2
3	2024-08-30 21:18:51.035+03	2024-08-30 21:18:51.035+03	3
4	2024-09-09 13:22:06.62+03	2024-09-09 13:22:06.62+03	4
5	2024-09-09 13:37:31.131+03	2024-09-09 13:37:31.131+03	5
6	2024-09-09 15:06:52.525+03	2024-09-09 15:06:52.525+03	6
7	2024-09-10 14:50:10.515+03	2024-09-10 14:50:10.515+03	7
8	2024-09-10 15:08:55.569+03	2024-09-10 15:08:55.569+03	8
9	2024-09-10 15:51:27.413+03	2024-09-10 15:51:27.413+03	9
10	2024-09-11 16:48:51.387+03	2024-09-11 16:48:51.387+03	10
\.


--
-- TOC entry 4873 (class 0 OID 16432)
-- Dependencies: 222
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (id, name, "createdAt", "updatedAt") FROM stdin;
1	Cosrx	2024-07-09 01:39:39.93+03	2024-07-09 01:39:39.93+03
2	Isntree	2024-07-09 01:39:49.591+03	2024-07-09 01:39:49.591+03
3	Innisfree	2024-07-09 01:40:30.609+03	2024-07-09 01:40:30.609+03
4	Round Lab	2024-07-09 23:47:09.053+03	2024-07-09 23:47:09.053+03
5	Mixsoon	2024-09-12 21:33:12.834+03	2024-09-12 21:33:12.834+03
6	Anua	2024-09-17 17:47:17.065+03	2024-09-17 17:47:17.065+03
\.


--
-- TOC entry 4881 (class 0 OID 16497)
-- Dependencies: 230
-- Data for Name: device_infos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.device_infos (id, title, description, "createdAt", "updatedAt", "deviceId") FROM stdin;
\.


--
-- TOC entry 4875 (class 0 OID 16441)
-- Dependencies: 224
-- Data for Name: devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.devices (id, name, price, rating, img, "createdAt", "updatedAt", "typeId", "brandId", description) FROM stdin;
17	1025 Dokdo Toner	2700	0	9dd04152-932c-4546-8b6a-c3b1fde7370e.jpg	2024-07-09 23:50:02.376+03	2024-07-09 23:50:02.376+03	9	4	1025 Dokdo Toner — это мягкий увлажняющий тонер, созданный для глубокого очищения и восстановления баланса кожи. Содержит минеральную воду с острова Уллындо, которая насыщает кожу необходимыми микроэлементами и помогает успокоить раздражение. Тонер эффективно удаляет остатки загрязнений и макияжа, подготавливая кожу к дальнейшему уходу, а также поддерживает оптимальный уровень увлажненности благодаря содержанию низкомолекулярной гиалуроновой кислоты. Идеально подходит для всех типов кожи, включая чувствительную, оставляя ощущение свежести, мягкости и гладкости без ощущения стянутости.
18	Hyaluronic Acid Aqua Gel Cream	1600	0	00198ba8-0d4e-453c-9a48-b3c97d9e826d.jpg	2024-07-09 23:53:10.301+03	2024-07-09 23:53:10.301+03	1	2	Isntree Hyaluronic Acid Aqua Gel Cream — это легкий увлажняющий крем с гелевой текстурой, обогащенный гиалуроновой кислотой. Благодаря 5 различным видам гиалуроновой кислоты, крем интенсивно увлажняет кожу, помогая удерживать влагу в глубоких слоях, придавая коже свежесть и упругость. Идеально подходит для всех типов кожи, включая жирную и комбинированную, не оставляет липкости и быстро впитывается, создавая невидимый барьер против сухости. Этот крем способствует восстановлению гидробаланса кожи, делая её мягкой, гладкой и сияющей, защищая от обезвоживания.
19	ANUA Heartleaf 77 Toner Pad	2200	0	f8d65018-4fb8-45d3-a842-69321fb06956.jpg	2024-09-18 00:35:04.443+03	2024-09-18 00:35:04.443+03	13	6	ANUA Heartleaf 77 Toner Pad — это пропитанные тонером диски, содержащие 77% экстракта хотунии сердцевидной (Heartleaf), известного своими мощными успокаивающими и противовоспалительными свойствами. Эти тонер-пэды мягко очищают кожу, удаляя излишки себума и загрязнения, одновременно увлажняя и балансируя её. Идеально подходят для чувствительной и проблемной кожи, помогая снизить раздражение, покраснение и успокоить воспаления. Удобны в использовании, обеспечивают свежесть и комфорт, делая кожу мягкой, гладкой и подготовленной к дальнейшему уходу.
1	Крем с муцином улитки	1200	0	8fdcac9b-ed4d-435b-9ba9-a6b3e63b7163.jpg	2024-07-09 02:18:40.893+03	2024-07-09 02:18:40.893+03	1	1	COSRX Advanced Snail 92 All in One Cream — это увлажняющий крем на основе 92% фильтрата секреции улитки, который интенсивно питает, восстанавливает и защищает кожу. Крем помогает разглаживать морщины, уменьшать шрамы и покраснения, способствуя обновлению клеток и улучшению эластичности кожи. Благодаря своей легкой, но насыщенной текстуре, средство глубоко увлажняет, не оставляя липкости, делая кожу гладкой, упругой и сияющей. Подходит для всех типов кожи, особенно для сухой и раздраженной, поддерживая естественный барьер и защищая от внешних стрессов.
5	Hyaluronic Acid Natural Sun Cream Suncream Spf50 Pa++++ 	1500	0	802f5db8-9312-4892-8c9c-4e15937b3c4e.jpg	2024-07-09 23:28:15.776+03	2024-07-09 23:28:15.776+03	8	2	Hyaluronic Acid Natural Sun Cream SPF 50+ PA++++ — это увлажняющий солнцезащитный крем с мощной защитой от UVA и UVB лучей, обеспечивающий надежную защиту от солнца благодаря высокому SPF 50+ PA++++. Обогащенный гиалуроновой кислотой, крем не только предотвращает повреждения от солнца, но и глубоко увлажняет кожу, удерживая влагу на протяжении всего дня. Легкая, нелипкая текстура быстро впитывается, не оставляя белого налета, что делает его идеальным для всех типов кожи, включая чувствительную. Подходит для ежедневного использования, защищает кожу и одновременно поддерживает её здоровое сияние и увлажненность.
\.


--
-- TOC entry 4879 (class 0 OID 16480)
-- Dependencies: 228
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ratings (id, rate, "createdAt", "updatedAt", "userId", "deviceId") FROM stdin;
\.


--
-- TOC entry 4883 (class 0 OID 16511)
-- Dependencies: 232
-- Data for Name: type_brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.type_brands (id, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
\.


--
-- TOC entry 4871 (class 0 OID 16423)
-- Dependencies: 220
-- Data for Name: types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.types (id, name, "createdAt", "updatedAt") FROM stdin;
1	Крем	2024-07-08 23:31:56.114+03	2024-07-08 23:31:56.114+03
7	Сыворотка	2024-07-09 00:05:54.131+03	2024-07-09 00:05:54.131+03
8	SPF	2024-07-09 23:25:46.406+03	2024-07-09 23:25:46.406+03
9	Тонер	2024-07-09 23:45:00.165+03	2024-07-09 23:45:00.165+03
10	Тоник	2024-07-09 23:46:55.091+03	2024-07-09 23:46:55.091+03
11	Эмульсия	2024-08-30 21:19:13.333+03	2024-08-30 21:19:13.333+03
12	Маска для лица	2024-09-12 00:38:13.192+03	2024-09-12 00:38:13.192+03
13	Тонер-пэды	2024-09-17 17:41:07.174+03	2024-09-17 17:41:07.174+03
\.


--
-- TOC entry 4867 (class 0 OID 16399)
-- Dependencies: 216
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, name, password, role, "createdAt", "updatedAt") FROM stdin;
1	user@gmail.com	irina	$2b$05$/HnyYOH9b.PA5/fWmggXJ.tA64Gr./wwJ4Bc5yzimILJ/Jn0BENT6	USER	2024-08-30 18:28:03.596+03	2024-08-30 18:28:03.596+03
2	user1@gmail.com	Anna	$2b$05$MTe07yMJ4BsP5XyYxoqZyuLdZMCGOg5JOq/gusxgDMCU7b2HOpPXu	USER	2024-08-30 19:50:35.854+03	2024-08-30 19:50:35.854+03
4	vasya@gmail.com	vasya	$2b$05$BAqxikl8muqTHHmgUsPUCeY70xTwPePXVCXjCaVhIxxEBy6k13fHS	USER	2024-09-09 13:22:06.469+03	2024-09-09 13:22:06.469+03
5	qwe@gmail.com	qwe	$2b$05$BzQWZqdUm0PAMzCYiVJFUOe2JqOEjK7X3iGX4vnBWFkXvWBUAl.oK	USER	2024-09-09 13:37:31.128+03	2024-09-09 13:37:31.128+03
6	asd@gmail.com	asd	$2b$05$I1D7v6o1NkxbQ8g3Ht3hK.jnCvyWo7lJ0/M7OLOzEj2U5fEpH3VUe	USER	2024-09-09 15:06:52.522+03	2024-09-09 15:06:52.522+03
7	123@gmail.com	123	$2b$05$4uhIEdByMWiXppGRzDctd.r7lMi6gBKoyujpJIr8M2vpCrn/qBYky	USER	2024-09-10 14:50:10.396+03	2024-09-10 14:50:10.396+03
8	321@gmail.com	321	$2b$05$V9bziemWzTklK27YXsOq0ePZZgljYRs4.cpGccMf3b9iuBwggt41W	USER	2024-09-10 15:08:55.51+03	2024-09-10 15:08:55.51+03
3	admin@gmail.com	admin	$2b$05$nvfYWjd3Z5SZ08bzXi7RNuPts1mqXBaEvvYfGmBnDGQJeR63GuTE2	ADMIN	2024-08-30 21:18:51.025+03	2024-08-30 21:18:51.025+03
9	qqq@gmail.com	qqq	$2b$05$8sciCF5rlpBAo3vodPmw6uSrhaicKI9yRTqUguEgBvGN84ylqL1fW	USER	2024-09-10 15:51:27.405+03	2024-09-10 15:51:27.405+03
10	q@gmail.com	q	$2b$05$8E3mayFKDpv0KKhHoBEMTu17gTYnSb/iAf.qH3jM2nMxCmtJwdvN6	USER	2024-09-11 16:48:51.292+03	2024-09-11 16:48:51.292+03
\.


--
-- TOC entry 4898 (class 0 OID 0)
-- Dependencies: 225
-- Name: basket_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.basket_devices_id_seq', 7, true);


--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 217
-- Name: baskets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.baskets_id_seq', 10, true);


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 221
-- Name: brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brands_id_seq', 6, true);


--
-- TOC entry 4901 (class 0 OID 0)
-- Dependencies: 229
-- Name: device_infos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.device_infos_id_seq', 1, false);


--
-- TOC entry 4902 (class 0 OID 0)
-- Dependencies: 223
-- Name: devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.devices_id_seq', 19, true);


--
-- TOC entry 4903 (class 0 OID 0)
-- Dependencies: 227
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ratings_id_seq', 1, false);


--
-- TOC entry 4904 (class 0 OID 0)
-- Dependencies: 231
-- Name: type_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);


--
-- TOC entry 4905 (class 0 OID 0)
-- Dependencies: 219
-- Name: types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.types_id_seq', 13, true);


--
-- TOC entry 4906 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- TOC entry 4704 (class 2606 OID 16468)
-- Name: basket_devices basket_devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT basket_devices_pkey PRIMARY KEY (id);


--
-- TOC entry 4690 (class 2606 OID 16416)
-- Name: baskets baskets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);


--
-- TOC entry 4696 (class 2606 OID 16439)
-- Name: brands brands_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);


--
-- TOC entry 4698 (class 2606 OID 16437)
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);


--
-- TOC entry 4708 (class 2606 OID 16504)
-- Name: device_infos device_infos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT device_infos_pkey PRIMARY KEY (id);


--
-- TOC entry 4700 (class 2606 OID 16451)
-- Name: devices devices_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_name_key UNIQUE (name);


--
-- TOC entry 4702 (class 2606 OID 16449)
-- Name: devices devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (id);


--
-- TOC entry 4706 (class 2606 OID 16485)
-- Name: ratings ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 16516)
-- Name: type_brands type_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);


--
-- TOC entry 4712 (class 2606 OID 16518)
-- Name: type_brands type_brands_typeId_brandId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_brandId_key" UNIQUE ("typeId", "brandId");


--
-- TOC entry 4692 (class 2606 OID 16430)
-- Name: types types_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);


--
-- TOC entry 4694 (class 2606 OID 16428)
-- Name: types types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);


--
-- TOC entry 4686 (class 2606 OID 16409)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4688 (class 2606 OID 16407)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4716 (class 2606 OID 16469)
-- Name: basket_devices basket_devices_basketId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4717 (class 2606 OID 16474)
-- Name: basket_devices basket_devices_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.basket_devices
    ADD CONSTRAINT "basket_devices_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4713 (class 2606 OID 16417)
-- Name: baskets baskets_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4720 (class 2606 OID 16505)
-- Name: device_infos device_infos_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.device_infos
    ADD CONSTRAINT "device_infos_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4714 (class 2606 OID 16457)
-- Name: devices devices_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4715 (class 2606 OID 16452)
-- Name: devices devices_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT "devices_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4718 (class 2606 OID 16491)
-- Name: ratings ratings_deviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES public.devices(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4719 (class 2606 OID 16486)
-- Name: ratings ratings_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4721 (class 2606 OID 16524)
-- Name: type_brands type_brands_brandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4722 (class 2606 OID 16519)
-- Name: type_brands type_brands_typeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2024-09-23 18:12:17

--
-- PostgreSQL database dump complete
--

