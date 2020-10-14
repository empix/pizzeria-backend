CREATE DATABASE pizzeria
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE pizzeria;

CREATE TABLE pizzas (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(32) NOT NULL UNIQUE,
	price decimal(4, 2) NOT NULL,
	PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE ingredients (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(32) UNIQUE,
	PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE pizza_ingredient (
	id int NOT NULL AUTO_INCREMENT,
	pizza_id int NOT NULL,
	ingredient_id int NOT NULL,
	FOREIGN KEY (pizza_id) REFERENCES pizzas (id),
	FOREIGN KEY (ingredient_id) REFERENCES ingredients (id),
	PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE orders (
	id int NOT NULL AUTO_INCREMENT,
	order_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;

CREATE TABLE order_item (
	id int NOT NULL AUTO_INCREMENT,
	pizza_id int NOT NULL,
	order_id int NOT NULL,
	quantity int NOT NULL DEFAULT '1',
	FOREIGN KEY (pizza_id) REFERENCES pizzas (id),
	FOREIGN KEY (order_id) REFERENCES orders (id),
	PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;