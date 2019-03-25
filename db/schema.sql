### Schema
DROP DATABASE IF EXISTS orders_db;
CREATE DATABASE orders_db;

USE orders_db;

CREATE TABLE orders
(
	id int NOT NULL AUTO_INCREMENT,
	dish varchar(150) NOT NULL,
    delivered boolean NOT NULL,
	PRIMARY KEY (id)
);
