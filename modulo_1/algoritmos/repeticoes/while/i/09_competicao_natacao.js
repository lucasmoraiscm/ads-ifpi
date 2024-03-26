import {question} from 'readline-sync'

function main(){
    let numero_prova = get_number('Número da prova: ');
    let qtd_competidores = get_number('Quantidade de competidores: ');

    let pontos_clube_a = 0;
    let pontos_clube_b = 0;

    while (numero_prova != 0 && qtd_competidores != 0){
        let get_data_competitor = qtd_competidores;

        while (get_data_competitor != 0){
            const nome = get_text('Nome do competidor: ');
            const classificacao = get_number('Classificação: ');
            const tempo = get_number('Tempo: ');
            const clube = get_text('Clube: ').toUpperCase();

            const pontuacao = calcular_pontuacao(classificacao);

            if (clube == 'A'){
                pontos_clube_a = pontos_clube_a + pontuacao;
            }else{
                pontos_clube_b = pontos_clube_b + pontuacao;
            }

            get_data_competitor--;
        }

        numero_prova = get_number('Número da prova: ');
        qtd_competidores = get_number('Quantidade de competidores: ');
    }

    const vencedor = calcular_vencedor(pontos_clube_a, pontos_clube_b);

    const resultado = `
    Pontos Clube A: ${pontos_clube_a}
    Pontos Clube B: ${pontos_clube_b}
    Vencedor: ${vencedor}
    `

    console.log(resultado);
}

function get_number(mensagem){
    const n = Number(question(mensagem));
    return n;
}

function get_text(mensagem){
    const txt = question(mensagem);
    return txt;
}


function calcular_pontuacao(classificacao){
    let pontuacao = 0;

    if (classificacao === 1){
        pontuacao = pontuacao + 9;
    }else if (classificacao === 2){
        pontuacao = pontuacao + 6;
    }else if (classificacao === 3){
        pontuacao = pontuacao + 4;
    }else if (classificacao === 4){
        pontuacao = pontuacao + 3;
    }

    return pontuacao;
}

function calcular_vencedor(pts_clube_a, pts_clube_b){
    if (pts_clube_a > pts_clube_b){
        return 'Clube A';
    }else if (pts_clube_a < pts_clube_b){
        return 'Clube B';
    }else{
        return 'Os Clubes empataram';
    }
}

main()