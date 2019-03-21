### Schema
DROP DATABASE IF EXISTS burgers;
CREATE DATABASE burgers;

USE burgers;

CREATE TABLE eaten
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(150) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE ordered
(
	id int NOT NULL AUTO_INCREMENT,
	burger varchar(150) NOT NULL,
	PRIMARY KEY (id)
);