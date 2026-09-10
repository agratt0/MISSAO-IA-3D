const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao ligar a televisão no noticiário da noite, você vê uma notícia urgente: a agência espacial internacional abriu inscrições para civis participarem da primeira missão de colonização de Marte. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é loucura, é perigoso demais para nós!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é fascinante, eu preciso me inscrever!",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Após passar nas primeiras fases de seleção, você entra em um programa de treinamento intensivo. Em uma das oficinas de engenharia aeroespacial, o instrutor pede que vocês projetem um sistema de suporte à vida para a base marciana. Como você decide proceder?",
        alternativas: [
            {
                texto: "Utilizar simuladores avançados e algoritmos de IA para projetar um ecossistema fechado de alta eficiência que recicle todos os recursos.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Pesquisar manuais clássicos de arquitetura de submarinos, conversar com colegas e adaptar ideias tradicionais com base em conhecimentos próprios.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Durante o debriefing do treinamento, a equipe realiza um grande debate sobre o futuro da exploração espacial. Um ponto central é levantado: a colonização de Marte desvia recursos essenciais que deveriam ser usados para salvar a Terra. No debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defendo que devemos concentrar todos os nossos esforços e dinheiro em resolver as crises climáticas e ambientais da Terra antes de pensar em outros planetas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Argumento que a tecnologia desenvolvida para Marte pode ser aplicada na Terra e que expandir nossa presença para o espaço garante a sobrevivência da humanidade a longo prazo.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Como parte da documentação da missão, cada cadete precisa criar um pôster conceitual que represente a futura cidade humana em Marte. E agora?",
        alternativas: [
            {
                texto: "Criar o desenho manualmente usando ferramentas digitais básicas de ilustração, focando na sua própria expressão artística.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Utilizar um gerador de imagens avançado para criar uma representação fotorrealista hiperdetalhada da colônia marciana.",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "O projeto final de sobrevivência em grupo está atrasado e um dos seus colegas resolveu gerar todo o relatório técnico utilizando uma inteligência artificial em poucos segundos, sem revisar nada. O documento está pronto, mas genérico. O que você faz?",
        alternativas: [
            {
                texto: "A tecnologia é útil, mas máquinas podem falhar ou inventar dados. É fundamental revisar o texto e adicionar análises e perspectivas humanas reais.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Se a IA gerou o texto de forma rápida e coerente, não vejo problema em entregar o documento inteiro do jeito que está.",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();