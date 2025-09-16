from fastapi import FastAPI
from pydantic import BaseModel
from typing import Literal, List


app = FastAPI()


# Schemas

class Partida(BaseModel):
    id: int
    nome: str
    data: str
    local: int
    categoria: Literal['p', 'a', 's'] = 'a'
    tipo: Literal['Masculino', 'Feminino', 'Mista']
    situacao: Literal['Em adesão', 'Em disputa', 'Encerrada']
    jogadores: List


class Jogador(BaseModel):
    id: int
    nome: str
    sexo: Literal['m', 'f']
    categoria: Literal['p', 'a', 's'] = 'a'
    convidado_por: int


class Arena(BaseModel):
    id: int
    nome: str
    localizacao: str


class Convite(BaseModel):
    id: int
    responsavel: int
    codigo: str

class SolicitacaoAdesaoPartida(BaseModel):
    id: int
    id_jogador: int
    id_partida: int


#EndPoints

# GET /partidas 
# Parametros:
@app.get('/partidas', response_model=List[Partida], status_code=200)
def list_partidas(categoria: str | None = None):
    return [Partida(id=1, nome='Volei do ADS', data='2025-09-01',
                   local=1, categoria='a', tipo='Mista', situacao='Em adesão', 
                   jogadores=[]), 
            Partida(id=2, nome='Volei do IFPI', data='2025-09-05',
                   local=1, categoria='a', tipo="Masculino", situacao='Em adesão', 
                   jogadores=[])]


# GET /partidas[id]
# Parametros: id
@app.get('/partidas/{id}', response_model=Partida, status_code=200)
def detail_partidas(id: int):
    return Partida(id=1, nome='Volei do ADS', data='2025-09-01',
                   local=1, categoria='a', tipo='Mista', situacao='Em adesão', 
                   jogadores=[])


# POST /partidas
# Parametros:
@app.post('/partidas', response_model=Partida, status_code=201)
def create_partidas():
    return Partida(id=1, nome='Volei do ADS', data='2025-09-01',
                   local=1, categoria='a', tipo='Mista', situacao='Em adesão', 
                   jogadores=[])


# PUT /partidas[id]
# Parametros: id
@app.put('/partidas/{id}', response_model=Partida, status_code=200)
def update_partidas(id: int, partida_atualizada: Partida):
    return partida_atualizada


# DELETE /partidas[id]
# Parametros: id
@app.delete('/partidas/{id}', status_code=204)
def delete_partidas(id: int):
    return


# POST /partidas[id]/permitirAdesao
# Parametros: id
@app.post('/partidas/{id}/permitirAdesao', response_model=Partida, status_code=201)
def permitir_adesao_partidas(id: int):
    return Partida(id=1, nome='Volei do ADS', data='2025-09-01',
                   local=1, categoria='a', tipo='Mista', situacao='Em adesão', 
                   jogadores=[2])


# GET /jogadores
# Parametros:
@app.get('/jogadores', response_model=List[Jogador], status_code=200)
def list_jogadores(categoria: str | None = None):
    return [Jogador(id=1, nome='Lucas', sexo='m',
                   categoria='a', convidado_por=2),
            Jogador(id=2, nome='Thalisson', sexo='m',
                   categoria='a', convidado_por=1)]


# GET /jogadores[id]
# Parametros: id
@app.get('/jogadores/{id}', response_model=Jogador, status_code=200)
def detail_jogadores(id: int):
    return Jogador(id=1, nome='Lucas', sexo='m',
                   categoria='a', convidado_por=2)


# POST /jogadores
# Parametros:
@app.post('/jogadores', response_model=Jogador, status_code=201)
def create_jogadores():
    return Jogador(id=1, nome='Lucas', sexo='m',
                   categoria='a', convidado_por=2)


# PUT /jogadores[id]
# Parametros: id
@app.put('/jogadores/{id}', response_model=Jogador, status_code=200)
def update_jogadores(id: int, jogador_atualizado: Jogador):
    return jogador_atualizado


# DELETE /jogadores[id]
# Parametros: id
@app.delete('/jogadores/{id}', status_code=204)
def delete_jogadores(id: int):
    return


# GET /arenas
# Parametros:
@app.get('/arenas', response_model=List[Arena], status_code=200)
def list_arenas():
    return [Arena(id=1, nome="THE Beach", localizacao="Rua 7 de Setembro, 738"),
            Arena(id=2, nome="THE Sports", localizacao="Rua 21 de Abril, 738")]


# GET /arenas[id]
# Parametros: id
@app.get('/arenas/{id}', response_model=Arena, status_code=200)
def detail_arenas(id: int):
    return Arena(id=1, nome="THE Beach", localizacao="Rua 7 de Setembro, 738")


# POST /arenas
# Parametros:
@app.post('/arenas', response_model=Arena, status_code=201)
def create_arenas():
    return Arena(id=1, nome="THE Beach", localizacao="Rua 7 de Setembro, 738")


# PUT /arenas[id]
# Parametros: id
@app.put('/arenas/{id}', response_model=Arena, status_code=200)
def update_arenas(id: int, arena_atualizada: Arena):
    return arena_atualizada


# DELETE /arenas[id]
# Parametros: id
@app.delete('/arenas/{id}', status_code=204)
def delete_arenas(id: int):
    return


# GET /convites
# Parametros:
@app.get('/convites', response_model=List[Convite], status_code=200)
def list_convites():
    return [Convite(id=1, responsavel=1, codigo="123"),
            Convite(id=2, responsavel=2, codigo="321")]


# GET /convites[id]
# Parametros: id
@app.get('/convites/{id}', response_model=Convite, status_code=200)
def detail_convites(id: int):
    return Convite(id=1, responsavel=1, codigo="123")


# POST /convites
# Parametros:
@app.post('/convites', response_model=Convite, status_code=201)
def create_convites():
    return Convite(id=1, responsavel=1, codigo="123")


# PUT /convites[id]
# Parametros: id
@app.put('/convites/{id}', response_model=Convite, status_code=200)
def update_convites(id: int, convite_atualizado: Convite):
    return convite_atualizado


# DELETE /convites[id]
# Parametros: id
@app.delete('/convites/{id}', status_code=204)
def delete_convites(id: int):
    return


# GET /solicitacoes
# Parametros:
@app.get('/solicitacoes', response_model=List[SolicitacaoAdesaoPartida], status_code=200)
def list_solicitacoes():
    return [SolicitacaoAdesaoPartida(id=1, id_jogador=1, id_partida=1),
            SolicitacaoAdesaoPartida(id=2, id_jogador=2, id_partida=2)]


# GET /solicitacoes[id]
# Parametros: id
@app.get('/solicitacoes/{id}', response_model=SolicitacaoAdesaoPartida, status_code=200)
def detail_solicitacoes(id: int):
    return SolicitacaoAdesaoPartida(id=1, id_jogador=1, id_partida=1)


# POST /solicitacoes
# Parametros:
@app.post('/solicitacoes', response_model=SolicitacaoAdesaoPartida, status_code=201)
def create_solicitacoes():
    return SolicitacaoAdesaoPartida(id=1, id_jogador=1, id_partida=1)


# PUT /solicitacoes[id]
# Parametros: id
@app.put('/solicitacoes/{id}', response_model=SolicitacaoAdesaoPartida, status_code=200)
def update_solicitacoes(id: int, solicitacao_atualizado: SolicitacaoAdesaoPartida):
    return solicitacao_atualizado


# DELETE /solicitacoes[id]
# Parametros: id
@app.delete('/solicitacoes/{id}', status_code=204)
def delete_solicitacoes(id: int):
    return

