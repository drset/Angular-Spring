INSERT INTO regiones (id, nombre) VALUES (1, "America");
INSERT INTO regiones (id, nombre) VALUES (2, "Europa");
INSERT INTO regiones (id, nombre) VALUES (3, "Asia");
INSERT INTO regiones (id, nombre) VALUES (4, "Africa");
INSERT INTO regiones (id, nombre) VALUES (5, "Oceania");

/* Populate Table Clientes */
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Pepe", "Trueno", "ptrueno@gmail.com", "2019-10-10",1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Homero", "Simpson", "homero@gmail.com", "1970-07-10",2);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Bart", "Simpson", "elbarto@gmail.com", "1987-08-08",3);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Marge", "Simpson", "Marge@gmail.com", "1970-07-10",1);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Lisa", "Simpson", "Lisa@gmail.com", "1990-08-08",4);
INSERT INTO clientes (nombre, apellido, email, create_at, region_id) VALUES ("Maggie", "Simpson", "Maggie@gmail.com", "1995-07-10",5);


