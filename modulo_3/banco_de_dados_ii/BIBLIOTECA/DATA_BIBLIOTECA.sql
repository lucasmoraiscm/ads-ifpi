-- LEITOR
INSERT INTO LEITOR (NOME) VALUES 
('Ana Souza'), ('Bruno Lima'), ('Carla Menezes'), ('Diego Alves'), ('Eduarda Rocha'),
('Felipe Silva'), ('Gabriela Martins'), ('Henrique Torres'), ('Isabela Cunha'), ('João Pedro');

-- FUNCIONARIO
INSERT INTO FUNCIONARIO (NOME) VALUES 
('Marcos Freitas'), ('Renata Dias'), ('Tiago Moura'), ('Patrícia Lima'), ('Carlos Pinto'),
('Luciana Alves'), ('André Ferreira'), ('Juliana Costa'), ('Rafael Duarte'), ('Fernanda Melo');

-- AUTOR
INSERT INTO AUTOR (NOME, NACIONALIDADE) VALUES 
('José Saramago', 'Portugal'), ('Clarice Lispector', 'Brasil'), ('Gabriel García Márquez', 'Colômbia'),
('Machado de Assis', 'Brasil'), ('George Orwell', 'Inglaterra'), ('Jane Austen', 'Inglaterra'),
('J. K. Rowling', 'Reino Unido'), ('Paulo Coelho', 'Brasil'), ('Stephen King', 'EUA'), ('Haruki Murakami', 'Japão');

-- TITULO
INSERT INTO TITULO (NOME) VALUES 
('Ensaio sobre a Cegueira'), ('A Hora da Estrela'), ('Cem Anos de Solidão'), ('Dom Casmurro'), ('1984'),
('Orgulho e Preconceito'), ('Harry Potter e a Pedra Filosofal'), ('O Alquimista'), ('O Iluminado'), ('Kafka à Beira-Mar');

-- AUTORIA
INSERT INTO AUTORIA (COD_TIT, COD_AUTOR) VALUES 
(1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
(6, 6), (7, 7), (8, 8), (9, 9), (10, 10);

-- CATEGORIA
INSERT INTO CATEGORIA (NOME, VALOR_MULTA) VALUES 
('Ficção', 1.50), ('Romance', 1.00), ('Clássico', 2.00), 
('Fantasia', 1.75), ('Suspense', 2.50), ('Drama', 1.25), 
('Literatura Brasileira', 1.80), ('Infantojuvenil', 1.10), 
('Psicologia', 2.00), ('Filosofia', 1.60);

-- EXEMPLAR
INSERT INTO EXEMPLAR (STATUS, LOCALIZACAO, COD_CAT, COD_TIT) VALUES 
(TRUE, 'Estante A1', 1, 1), (TRUE, 'Estante A2', 2, 2), (FALSE, 'Estante B1', 3, 3),
(TRUE, 'Estante C1', 4, 4), (FALSE, 'Estante C2', 5, 5), (TRUE, 'Estante D1', 6, 6),
(TRUE, 'Estante D2', 4, 7), (FALSE, 'Estante E1', 7, 8), (TRUE, 'Estante E2', 5, 9), (TRUE, 'Estante F1', 1, 10);

-- EMPRESTIMO
INSERT INTO EMPRESTIMO (DT_EMP, DT_PREV_DEV, DT_PREV, COD_LEITOR, COD_EXE, COD_FUN) VALUES 
('2025-04-01', '2025-04-15', '2025-04-10', 1, 1, 1),
('2025-04-03', '2025-04-17', '2025-04-13', 2, 2, 2),
('2025-04-05', '2025-04-19', '2025-04-15', 3, 3, 3),
('2025-04-06', '2025-04-20', '2025-04-16', 4, 4, 4),
('2025-04-07', '2025-04-21', '2025-04-17', 5, 5, 5),
('2025-04-08', '2025-04-22', '2025-04-18', 6, 6, 6),
('2025-04-09', '2025-04-23', '2025-04-19', 7, 7, 7),
('2025-04-10', '2025-04-24', '2025-04-20', 8, 8, 8),
('2025-04-11', '2025-04-25', '2025-04-21', 9, 9, 9),
('2025-04-12', '2025-04-26', '2025-04-22', 10, 10, 10);

-- RESERVA
INSERT INTO RESERVA (STATUS, DT_RES, COD_LEITOR, COD_TIT) VALUES 
(TRUE, '2025-04-01', 1, 1), (TRUE, '2025-04-02', 2, 2), (FALSE, '2025-04-03', 3, 3),
(TRUE, '2025-04-04', 4, 4), (FALSE, '2025-04-05', 5, 5), (TRUE, '2025-04-06', 6, 6),
(TRUE, '2025-04-07', 7, 7), (FALSE, '2025-04-08', 8, 8), (TRUE, '2025-04-09', 9, 9), (TRUE, '2025-04-10', 10, 10);
