drop table if exists users;

CREATE TABLE users (
    id UUID NOT NULL PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'qa', 'user', 'superuser', 'support', 'manager')),
    cellphone VARCHAR(20),
    rut VARCHAR(12), -- ex: 12.345.678-9
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_sign_in TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

INSERT INTO users (id, email, password, role, cellphone, rut)
VALUES
    (uuid_generate_v4(), 'admin1@example.com', 'password1', 'admin', '123-456-7890', '12.345.678-9'),
    (uuid_generate_v4(), 'qa1@example.com', 'password2', 'qa', '987-654-3210', '11.222.333-4'),
    (uuid_generate_v4(), 'superuser1@example.com', 'password3', 'superuser', '555-555-5555', '10.111.222-3'),
    (uuid_generate_v4(), 'support1@example.com', 'password4', 'support', '111-222-3333', '9.999.888-2'),
    (uuid_generate_v4(), 'manager1@example.com', 'password5', 'manager', '999-888-7777', '8.888.777-1'),
    (uuid_generate_v4(), 'user1@example.com', 'password6', 'user', '123-123-1234', '7.777.666-0'),
    (uuid_generate_v4(), 'user2@example.com', 'password7', 'user', '234-234-2345', '6.666.555-9'),
    (uuid_generate_v4(), 'user3@example.com', 'password8', 'user', '345-345-3456', '5.555.444-8'),
    (uuid_generate_v4(), 'user4@example.com', 'password9', 'user', '456-456-4567', '4.444.333-7'),
    (uuid_generate_v4(), 'user5@example.com', 'password10', 'user', '567-567-5678', '3.333.222-6');
