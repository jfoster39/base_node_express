DROP DATABASE IF EXISTS rest_client_test;
CREATE DATABASE rest_client_test;

\c rest_client_test;

CREATE TABLE tb_entity (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    enabled BOOLEAN,
    first_name VARCHAR,
    last_name VARCHAR,
    email_address VARCHAR
);

CREATE TABLE tb_location (
    ID SERIAL PRIMARY KEY,
    number INTEGER,
    name VARCHAR,
    short_name VARCHAR,
    abbreviation VARCHAR,
    address_line_one VARCHAR,
    city VARCHAR
);

CREATE TABLE tb_role (
    ID SERIAL PRIMARY KEY,
    label JSON,
    description JSON,
    abbreviation JSON
);

CREATE TABLE tb_entity_location (
    ID SERIAL PRIMARY KEY,
    entity INTEGER REFERENCES tb_entity(ID),
    location INTEGER REFERENCES tb_location(ID),
    role INTEGER REFERENCES tb_role(ID),
    is_contact Boolean
);

CREATE TABLE tb_entity_role (
    ID SERIAL PRIMARY KEY,
    entity INTEGER REFERENCES tb_entity(ID),
    role INTEGER REFERENCES tb_role(ID)
);

INSERT INTO tb_entity VALUES (
    default,
    'ty@me.com',
    't',
    'Ty',
    'Foster',
    'ty@me.com'
);

INSERT INTO tb_entity VALUES (
    default,
    'hackerman@hacktheplanet.biz',
    't',
    'Hacker',
    'Man',
    'hackerman@hacktheplanet.biz'
);

INSERT INTO tb_location VALUES (
    default,
    1,
    'Cumberland Store',
    'Cumberland',
    'CLand',
    '2420 hwy 42, cobb county',
    'Atlanta'
);

INSERT INTO tb_role VALUES (
    default,
    '{ "fallback" : "Admin" }',
    '{ "fallback" : "Administrator role for application" }',
    '{ "fallback" : "Admin" }'
);

INSERT INTO tb_entity_location VALUES (
    default,
    1,
    1,
    1,
    't'
);

INSERT INTO tb_entity_role VALUES (
    default,
    1,
    1
);
