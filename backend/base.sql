CREATE DATABASE vehiclechallenge;

CREATE TABLE IF NOT EXISTS vehiclechallenge.company(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    city INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    plan_type VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP default current_timestamp
);
CREATE TABLE IF NOT EXISTS vehiclechallenge.driver(
	id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    city INT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    avatar_url VARCHAR(200),
    status VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP default current_timestamp,
    FOREIGN KEY(company_id) REFERENCES company(id)
);
CREATE TABLE IF NOT EXISTS vehiclechallenge.vehicle(
	id INT PRIMARY KEY AUTO_INCREMENT,
    driver_id INT,
    plate VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    type VARCHAR(20) NOT NULL,
    capacity VARCHAR(20) NOT NULL,
    creation_date TIMESTAMP default current_timestamp,
    FOREIGN KEY(driver_id) REFERENCES driver(id)
);
