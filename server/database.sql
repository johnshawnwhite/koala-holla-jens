CREATE TABLE koalas (
    id SERIAL PRIMARY KEY,
    name character varying(50) NOT NULL,
    gender character varying(6),
    age integer NOT NULL,
    "readyToTransfer" boolean,
    notes character varying(250)
);
