create database paises;

create table personas(
    per_id SERIAL,
    per_nombre VARCHAR (50),
    per_telefono VARCHAR (50),
    per_correo VARCHAR (50),
    PRIMARY KEY (per_id)
)



SELECT * FROM personas;