CREATE USER nome WITH opcoes

DROP USER nome

ALTER USER nome RENAME TO novo_nome

CREATE GROUP nome_grupo

ALTER GROUP nome_grupo ADD_USER nome_usuario

DROP GROUP nome_grupo

CREATE ROLE nome WITH opcoes

DROP ROLE IF EXISTS nome

ALTER ROLE nome WITH opcoes

ALTER TABLE nome_tabela OWNER TO novo_dono

GRANT privilegio ON objeto TO papel WITH GRANT OPTION

REVOKE ALL ON FUNCTION teste(int, int) FROM PUBLIC



-- CREATE ROLE PROFESSOR PASSWORD
CREATE ROLE PROFESSOR

GRANT SELECT ON HOSPEDE TO PROFESSOR