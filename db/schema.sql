
DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

USE bookstore;


CREATE TABLE books (
author_name VARCHAR( 255) NOT NULL,
title VARCHAR (255) NOT NULL,
category VARCHAR(255) NOT NULL,
published_year VARCHAR(255) NOT NULL,
price DECIMAL(8, 2) NOT NULL
);

CREATE TABLE carts ( 
title VARCHAR(255) NOT NULL,
author_name VARCHAR(255) NOT NULL,
quantity DECIMAL(5,2) NOT NULL,
book_id INT(4) NOT NULL,
userName_id INT(4) NOT NULL
);

CREATE TABLE users (
username VARCHAR(255) NOT NULL,
password VARCHAR (255) NOT NULL,
admin BOOL DEFAULT FALSE
);
