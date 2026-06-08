// =====================================================
// Comandos disponíveis
// =====================================================
//
// DIAS DA SEMANA:
//   0 = Domingo
//   1 = Segunda
//   2 = Terça
//   3 = Quarta
//   4 = Quinta
//   5 = Sexta
//   6 = Sábado
//   R = Dia real
//
// HORA:
//   ↑ (Seta Cima) = +1 hora
//   ↓ (Seta Baixo) = -1 hora
//   → (Seta Direita) = +5 minutos
//   ← (Seta Esquerda) = -5 minutos
//   Espaço = Hora real

// ------------ A DATA NÃO MUDA NA SIMULAÇÃO --------------

// ===== VARIÁVEIS GLOBAIS =====
// Estas variáveis guardam a informação que precisa ser acedida em todo o código

// Variáveis para as fontes
let fonteTitulo;  // SF Pro Display Bold
let fonteHoras;   // Inter Regular

let rotinaSemana = {};  
// Variável que guarda todas as atividades de cada dia da semana
// Estrutura: { 'Segunda': [...atividades...], 'Terça': [...], etc }

let diaSimulado = -1;
// Variável que controla a simulação de dias da semana
// -1 = usa o dia real do sistema
// 0 a 6 = simula um dia específico (0=Domingo, 1=Segunda, ..., 6=Sábado)

let horaSimulada = -1;
// Variável que controla a simulação de horas
// -1 = usa a hora real do sistema
// 0 a 23 = simula uma hora específica

let minutoSimulado = -1;
// Variável que controla a simulação de minutos
// -1 = usa os minutos reais do sistema
// 0 a 59 = simula minutos específicos

let opacidadeAlerta = 0;
// Variável que controla a opacidade da cor laranja no alerta
// Usado para criar o efeito de pulsação quando faltam ≤5 minutos


// =====================================================
// PRELOAD - Carrega dados antes do programa começar
// =====================================================
// Esta função é executada UMA VEZ antes de tudo

function preload() {
  
  fonteTitulo = loadFont('typo/SF-Pro-Display-Bold.ttf');
  fonteHoras = loadFont('typo/Inter-VariableFont_slnt,wght.ttf');
  
  console.log('📄 A carregar rotina semanal...');
  
  // Define a rotina completa de TODOS os dias da semana
  rotinaSemana = {
    
    // ===== SEGUNDA-FEIRA =====
    'Segunda': [
      { nome: "Dormir", inicio: 23, fim: 8 },    
      { nome: "Manhã em Casa", inicio: 8, fim: 9 },    
      { nome: "Ir para Gym", inicio: 9, fim: 9.5 },    
      { nome: "Gym", inicio: 9.5, fim: 10.5 },      
      { nome: "Ir para casa", inicio: 10.5, fim: 11 },    
      { nome: "Tempo Livre", inicio: 11, fim: 12 },
      { nome: "Almoço", inicio: 12, fim: 13 },
      { nome: "Descanso", inicio: 13, fim: 13.5 },
      { nome: "Ir para a ESAD", inicio: 13.5, fim: 14 },
      { nome: "Aula Lab. Projeto", inicio: 14, fim: 18 },
      { nome: "Ir para casa", inicio: 18, fim: 18.5 },
      { nome: "Jantar", inicio: 18.5, fim: 19.5 },
      { nome: "Noite Livre", inicio: 19.5, fim: 23 }
    ],
    
    // ===== TERÇA-FEIRA =====
    'Terça': [
      { nome: "Dormir", inicio: 23, fim: 8 },
      { nome: "Manhã em Casa", inicio: 8, fim: 9 },
      { nome: "Ir para a ESAD", inicio: 9, fim: 9.5 },     
      { nome: "Aula PDM III", inicio: 9.5, fim: 12.5 },   
      { nome: "Almoço", inicio: 12.5, fim: 13.5 },     
      { nome: "Aula PDM III", inicio: 13.5, fim: 16.5 },   
      { nome: "Ir para casa", inicio: 16.5, fim: 17 },
      { nome: "Descanso", inicio: 17, fim: 17.5 },
      { nome: "Ir para Gym", inicio: 17.5, fim: 18 },
      { nome: "Gym", inicio: 18, fim: 19 },
      { nome: "Ir para casa", inicio: 19, fim: 19.5 },
      { nome: "Noite Livre", inicio: 19.5, fim: 23 }
    ],
    
    // ===== QUARTA-FEIRA =====
    'Quarta': [
      { nome: "Dormir", inicio: 23, fim: 7 },
      { nome: "Manhã em Casa", inicio: 7, fim: 9 },
      { nome: "Ir para Gym", inicio: 9, fim: 9.5 },
      { nome: "Gym", inicio: 9.5, fim: 10.5 },
      { nome: "Ir para casa", inicio: 10.5, fim: 11 },
      { nome: "Descanso", inicio: 11, fim: 12 },
      { nome: "Almoço", inicio: 12, fim: 14 },
      { nome: "Estudo", inicio: 14, fim: 19 },
      { nome: "Jantar", inicio: 19, fim: 20 },
      { nome: "Noite Livre", inicio: 20, fim: 23 }
    ],
    
    // ===== QUINTA-FEIRA =====
    'Quinta': [
      { nome: "Dormir", inicio: 23, fim: 8 },
      { nome: "Manhã em Casa", inicio: 8, fim: 9 },
      { nome: "Ir para a ESAD", inicio: 9, fim: 9.5 },
      { nome: "Aula PDM III", inicio: 9.5, fim: 12.5 },
      { nome: "Almoço", inicio: 12.5, fim: 14 },
      { nome: "Aula Gestão", inicio: 14, fim: 17 },
      { nome: "Ir para casa", inicio: 17, fim: 17.5 },
      { nome: "Preparar sair de casa", inicio: 17.5, fim: 18.5 },
      { nome: "Ir para a estação", inicio: 18.5, fim: 19 },
      { nome: "Viagem comboio", inicio: 19, fim: 21.25 },
      { nome: "Viagem para casa", inicio: 21.25, fim: 22.5 },
      { nome: "Noite Livre", inicio: 22.5, fim: 23 }
    ],
    
    // ===== SEXTA-FEIRA =====
    'Sexta': [
      { nome: "Dormir", inicio: 23, fim: 9 },    
      { nome: "Manhã livre", inicio: 9, fim: 13 },     
      { nome: "Almoço", inicio: 13, fim: 14 },
      { nome: "Descanso", inicio: 14, fim: 14.5 },
      { nome: "Sair de casa", inicio: 14.5, fim: 15 },  
      { nome: "Fazer as unhas", inicio: 15, fim: 16 },   
      { nome: "Tempo Livre", inicio: 16, fim: 16.5 },
      { nome: "Ir para casa", inicio: 16.5, fim: 17 },
      { nome: "Noite Livre", inicio: 17, fim: 23 }
    ],
    
    // ===== SÁBADO =====
    'Sábado': [
      { nome: "Dormir", inicio: 23, fim: 10 },    
      { nome: "Manhã Relaxada", inicio: 10, fim: 12 },     
      { nome: "Almoço", inicio: 12, fim: 13 },    
      { nome: "Tempo Livre", inicio: 13, fim: 23 }
    ],
    
    // ===== DOMINGO =====
    'Domingo': [
      { nome: "Dormir", inicio: 23, fim: 9 },
      { nome: "Manhã Relaxada", inicio: 9, fim: 12 },
      { nome: "Almoço", inicio: 12, fim: 13 },    
      { nome: "Família", inicio: 13, fim: 15 },    
      { nome: "Tempo Livre", inicio: 15, fim: 17 },
      { nome: "Sair de casa", inicio: 17, fim: 18 },      
      { nome: "Ir para a estação", inicio: 18, fim: 19.5 },     
      { nome: "Apanhar comboio", inicio: 19.5, fim: 22 },     
      { nome: "Ir para casa", inicio: 22, fim: 22.5 },
      { nome: "Descanso", inicio: 22.5, fim: 23 }
    ]
  };
  
  console.log('✅ Rotina carregada com sucesso!');
  console.log('📅 Dias disponíveis:', Object.keys(rotinaSemana));
  // Mostra na consola quais os dias estão disponíveis
}

// =====================================================
// --------------------- SETUP -------------------------
// =====================================================
// Esta função é executada UMA VEZ no início
// Define configurações básicas como tamanho do canvas e fonte

function setup() {
  createCanvas(450, 450);
 
}

// =====================================================
// ---------------------- DRAW -------------------------
// =====================================================
// Esta função é executada CONTINUAMENTE (cerca de 60 vezes por segundo) ou seja redesenha tudo no canvas constantemente

function draw() {
  
  // ========================================
  // PASSO 1: DESENHAR FUNDO COM DEGRADÊ
  // ========================================
  // Cria um efeito de degradê de cor castanha
  // Mais clara em cima, mais escura em baixo
  
  for (let y = 0; y < 450; y++) {
    // Loop que percorre cada linha vertical (y) do canvas
    
    // Calcula as cores RGB para cada linha
    // map() converte um valor de um intervalo para outro
    let r = map(y, 0, 450, 200, 100);   // Vermelho: de 255 a 128
    let g = map(y, 0, 450, 200, 100);   // Verde: de 255 a 128
    let b = map(y, 0, 450, 200, 100);   // Azul: de 255 a 128
    
    stroke(r, g, b);  // Define a cor da linha
    line(0, y, 450, y);  // Desenha linha horizontal
  } 
  
  // ========================================
  // PASSO 2: OBTER ROTINA DE HOJE
  // ========================================
  // Descobre qual é a rotina do dia atual (ou simulado)
  
  let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  // Array com nomes dos dias (índice 0=Domingo, 1=Segunda, etc)
  
  // Decide qual dia usar: simulado ou real
  let indiceDia = diaSimulado >= 0 ? diaSimulado : new Date().getDay();
  // Se diaSimulado >= 0, usa esse valor
  // Senão, usa new Date().getDay() que dá o dia real (0-6)
  
  let hoje = dias[indiceDia];
  // Converte o número (0-6) no nome do dia ('Domingo', 'Segunda', etc)
  
  // DEBUG: Mostra informação na consola a cada segundo
  if (frameCount % 60 === 0) {
    // frameCount é o número de frames desde o início
    // % 60 significa "resto da divisão por 60"
    // Então isto executa aproximadamente 1x por segundo
    console.log('Procurando rotina para:', hoje);
    console.log('Dias disponíveis:', Object.keys(rotinaSemana));
  }
  
  // Procura a rotina do dia no objeto rotinaSemana
  let rotinaHoje = rotinaSemana[hoje] || [];
  // || [] significa: se não existir, usa um array vazio
  
  // Se não há rotina definida para hoje, usa uma rotina padrão
  if (rotinaHoje.length === 0) {
    rotinaHoje = [
      { nome: "Dormir", inicio: 23, fim: 10 },
      { nome: "Manhã Relaxada", inicio: 10, fim: 12 },
      { nome: "Almoço", inicio: 12, fim: 13 },
      { nome: "Tempo Livre", inicio: 13, fim: 23 }
    ];
  }
  
  // ========================================
  // PASSO 3: DESCOBRIR ATIVIDADE ATUAL
  // ========================================
  // Descobre qual atividade está a acontecer agora
  
  // Usa as funções hour(), minute(), second() do p5.js
  // Mas permite simulação com as setas do teclado
  let horaReal = horaSimulada >= 0 ? horaSimulada : hour();
  // Se horaSimulada >= 0, usa valor simulado; senão usa hora() do sistema
  
  let minutoReal = minutoSimulado >= 0 ? minutoSimulado : minute();
  // Se minutoSimulado >= 0, usa valor simulado; senão usa minute() do sistema
  
  let segundoReal = second();
  // Segundos sempre reais (não simulamos segundos)
  
  // Converte hora:minuto:segundo para formato decimal
  // Exemplo: 9h30m = 9 + 30/60 = 9.5
  let horaAgora = horaReal + minutoReal / 60 + segundoReal / 3600;
  
  // DEBUG: Mostra hora na consola
  if (frameCount % 60 === 0) {
    let modoTexto = (horaSimulada >= 0 || minutoSimulado >= 0) ? ' [SIMULADA]' : ' [REAL]';
    console.log('⏰ Hora:', horaReal + ':' + minutoReal + ':' + segundoReal + modoTexto);
    console.log('⏰ Hora decimal:', horaAgora.toFixed(2));
  }
  
  // Por defeito, assume a primeira atividade
  let atividadeAtual = rotinaHoje[0];
  
  // Percorre todas as atividades para encontrar a atual
  for (let ativ of rotinaHoje) {
    // "for...of" percorre cada elemento do array
    
    // Verifica se a atividade começa e acaba no mesmo dia
    if (ativ.inicio < ativ.fim) {
      // Exemplo: Aula das 9h às 13h (9 < 13)
      if (horaAgora >= ativ.inicio && horaAgora < ativ.fim) {
        atividadeAtual = ativ;
        break;  // Para o loop, encontrámos a atividade!
      }
    }
    // Atividade que passa da meia-noite
    else {
      // Exemplo: Dormir das 23h às 7h (23 > 7)
      if (horaAgora >= ativ.inicio || horaAgora < ativ.fim) {
        // Está depois das 23h OU antes das 7h
        atividadeAtual = ativ;
        break;
      }
    }
  }
  
  // ========================================
  // PASSO 4: DESCOBRIR PRÓXIMA ATIVIDADE
  // ========================================
  // Descobre qual é a atividade seguinte
  
  let indiceAtual = rotinaHoje.indexOf(atividadeAtual);
  // indexOf() dá a posição da atividade no array (0, 1, 2, etc)
  
  let proximaAtividade = rotinaHoje[(indiceAtual + 1) % rotinaHoje.length];
  // (indiceAtual + 1) pega a próxima posição
  // % rotinaHoje.length faz "wrap around" (volta ao início se for a última)
  // Exemplo: se há 8 atividades e estamos na 7ª (índice 7),
  // (7 + 1) % 8 = 8 % 8 = 0 (volta para a primeira)
  
  // ========================================
  // PASSO 5: CALCULAR PROGRESSO (0 a 100%)
  // ========================================
  // Calcula quanto % da atividade atual já passou
  
  // Duração total da atividade em horas
  let duracao = atividadeAtual.fim - atividadeAtual.inicio;
  if (duracao < 0) duracao += 24;
  // Se negativo, passa da meia-noite (ex: 7 - 23 = -16, então 24-16=8h)
  
  // Tempo que já passou desde o início
  let decorrido = horaAgora - atividadeAtual.inicio;
  if (decorrido < 0) decorrido += 24;
  // Ajusta se a atividade começou "ontem"
  
  // Calcula percentagem
  let progresso = (decorrido / duracao) * 100;
  // Exemplo: se passou 1h de uma atividade de 2h = 1/2 * 100 = 50%
  
  progresso = constrain(progresso, 0, 100);
  // constrain() garante que fica entre 0 e 100
  
  // ========================================
  // PASSO 6: CALCULAR MINUTOS RESTANTES
  // ========================================
  // Descobre quantos minutos faltam até ao fim da atividade
  
  let agora = horaReal * 60 + minutoReal;
  // Converte hora atual para minutos totais
  // Exemplo: 9h30 = 9*60 + 30 = 570 minutos
  
  let fim = atividadeAtual.fim * 60;
  // Converte hora de fim para minutos
  
  // Ajusta se a atividade termina "amanhã"
  if (fim < agora && atividadeAtual.inicio > atividadeAtual.fim) {
    fim += 24 * 60;  // Adiciona 24 horas em minutos
  }
  
  let minutosFaltam = fim - agora;
  // Subtrai para descobrir quanto falta 
  
  // ========================================
  // PASSO 7: VERIFICAR ALERTA DE TRANSIÇÃO (2 NÍVEIS)
  // ========================================
  // Sistema de alerta em 2 níveis:
  // - 15 minutos: Laranja suave (aviso)
  // - 5 minutos: Laranja a pulsar (urgente)
  
  let alertaLeve = minutosFaltam <= 15 && minutosFaltam > 5;  // Aviso (15-5 min)
  let alertaUrgente = minutosFaltam <= 5;  // Urgente (≤5 min)
  
  // Cria animação de pulsação APENAS para alerta urgente
  if (alertaUrgente) {
    // Pulsação mais rápida e intensa quando é urgente
    opacidadeAlerta = map(sin(frameCount * 0.1), -1, 1, 120, 230);
    // frameCount * 0.1 = mais rápido que antes (era 0.05)
  } else if (alertaLeve) {
    // Laranja fixo, sem pulsar
    opacidadeAlerta = 200;
  } else {
    opacidadeAlerta = 200;  // Opacidade normal para azul
  } 
  
  // ========================================
  // PASSO 8: DESENHAR CONTAINER (caixa de vidro)
  // ========================================
  // Desenha a moldura semi-transparente à volta de tudo
  
  fill(255, 255, 255, 40);
  // Cor: branco (255,255,255) com opacidade baixa (40)
  // Cria efeito de vidro fosco
  
  noStroke();  // Sem contorno
  
  rect(35, 35, 380, 380, 80);
  // Desenha retângulo: x, y, largura, altura, raio dos cantos
  // Cantos arredondados (raio 80) dão aspeto suave
  
  // Desenha borda branca sutil
  noFill();  // Sem preenchimento, só contorno
  stroke(255, 255, 255, 60);  // Branco semi-transparente
  strokeWeight(1);  // Espessura da linha
  rect(35, 35, 380, 380, 80);
  
  
  // ========================================
  // PASSO 9: DESENHAR ATIVIDADE ATUAL (bloco grande)
  // ========================================
  // Desenha o bloco principal com a atividade atual
  
  // Escolhe a cor baseada no alerta
  if (alertaLeve || alertaUrgente) {
    fill(255, 140, 66, opacidadeAlerta);
    // Cor laranja com opacidade variável (cria pulsação)
  } else {
    fill(74, 144, 226, 200);
    // Cor azul normal
  }
  
  noStroke();
  rect(65, 65, 320, 220, 50);
  // Bloco grande: posição (65,65), tamanho 320x220, cantos raio 45
  
  // ----- BARRA DE PROGRESSO (lado esquerdo) -----
  
  // Fundo da barra (cinza)
  fill(0, 0, 0, 50);  // Preto semi-transparente
  rect(90, 75, 15, 200, 30);
  // Barra vertical: x=75, y=75, largura=15, altura=200
  
  // Preenchimento da barra (cresce de cima para baixo)
  fill(0, 0, 0, 80);  // Preto mais escuro
  let alturaProgresso = map(progresso, 0, 100, 0, 200);
  // Converte % (0-100) para pixels (0-200)
  rect(90, 75, 15, alturaProgresso, 30);
  
  
  // ----- HORA DE INÍCIO (canto superior direito) -----
  
  fill(255);  // Branco
  textStyle(NORMAL);  // Fonte não-bold
  textSize(15);  // Tamanho da letra em px
  textAlign(RIGHT, TOP);  // Alinhado à direita e ao topo
  
  // Formata a hora de início
  let horaInicio = floor(atividadeAtual.inicio);
  // floor() arredonda para baixo (9.5 → 9)
  
  let minInicio = round((atividadeAtual.inicio - horaInicio) * 60);
  // Pega a parte decimal e converte para minutos
  // Exemplo: 9.5 → (9.5 - 9) * 60 = 0.5 * 60 = 30 minutos
  
  // Desenha o texto
  text(horaInicio + ":" + (minInicio < 10 ? "0" : "") + minInicio, 360, 90);
  // (minInicio < 10 ? "0" : "") adiciona zero à esquerda se necessário
  // Exemplo: 9:05 em vez de 9:5
  
  
  // ----- NOME DA ATIVIDADE (centro) -----
  
  textStyle(BOLD);  // Fonte bold (negrito)
  textSize(22);  // Tamanho grande
  textAlign(CENTER, CENTER);  // Centrado
  text(atividadeAtual.nome, 225, 175);
  // Desenha no centro do bloco (225 = meio de 450)
  
  
  // ----- HORA DE FIM (canto inferior direito) -----
  
  textStyle(NORMAL);
  textSize(15);
  textAlign(RIGHT, BOTTOM);
  
  // Formata hora de fim (mesmo processo que início)
  let horaFim = floor(atividadeAtual.fim);
  let minFim = round((atividadeAtual.fim - horaFim) * 60);
  
  text(horaFim + ":" + (minFim < 10 ? "0" : "") + minFim, 360, 260);
  
  
  // ========================================
  // PASSO 10: DESENHAR PRÓXIMA ATIVIDADE (bloco pequeno)
  // ========================================
  // Desenha o bloco inferior com a próxima atividade
  
  fill(122, 184, 240, 180);  // Azul claro
  noStroke();
  rect(65, 305, 320, 80, 40);  // Bloco menor
  
  // Nome da próxima atividade
  fill(255);  // Branco
  textStyle(BOLD);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(proximaAtividade.nome, 225, 345);
  
  
  // ========================================
  // PASSO 11: INFORMAÇÕES DE DATA
  // ========================================
  // Mostra dia da semana no TOPO (centro) e data no FUNDO (centro) do bloco principal
  // Conforme pedido no briefing: usar day(), month(), year()
  
  fill(255, 255, 255, 200);  // Branco semi-transparente
  textStyle(NORMAL);
  textSize(11);  // Tamanho pequeno para não interferir
  
  // ----- DIA DA SEMANA (topo, centrado) -----
  textAlign(CENTER, TOP);
  text(hoje, 225, 90);
  // Posicionado no topo do bloco, centrado
  // (225 = centro horizontal, 80 = topo do bloco)
  
  // ----- DATA (fundo, centrado) -----
  textAlign(CENTER, BOTTOM);
  
  // Formata a data no formato DD/MM/YYYY
  let diaNum = day();    // Dia do mês (1-31)
  let mesNum = month();  // Mês (1-12)
  let anoNum = year();   // Ano (ex: 2025)
  
  text(diaNum + "/" + mesNum + "/" + anoNum, 225, 260);
  // Posicionado no fundo do bloco, centrado
  // (225 = centro horizontal, 270 = fundo do bloco)
  
}

// =====================================================
// INTERAÇÃO COM TECLADO
// =====================================================
// Esta função é chamada automaticamente quando carregas numa tecla
// Conforme pedido no briefing: permite simular dias e horas

function keyPressed() {
  
  // ===== SIMULAÇÃO DE DIAS (Teclas numéricas 0-6) =====
  // Permite testar rotinas de diferentes dias da semana
  
  if (key === '0') {
    diaSimulado = 0;  // 0 = Domingo
    console.log('📅 Simulando: Domingo');
  } else if (key === '1') {
    diaSimulado = 1;  // 1 = Segunda
    console.log('📅 Simulando: Segunda');
  } else if (key === '2') {
    diaSimulado = 2;  // 2 = Terça
    console.log('📅 Simulando: Terça');
  } else if (key === '3') {
    diaSimulado = 3;  // 3 = Quarta
    console.log('📅 Simulando: Quarta');
  } else if (key === '4') {
    diaSimulado = 4;  // 4 = Quinta
    console.log('📅 Simulando: Quinta');
  } else if (key === '5') {
    diaSimulado = 5;  // 5 = Sexta
    console.log('📅 Simulando: Sexta');
  } else if (key === '6') {
    diaSimulado = 6;  // 6 = Sábado
    console.log('📅 Simulando: Sábado');
  }
  
  // ===== TECLA R: Volta ao dia real =====
  if (key === 'r' || key === 'R') {
    diaSimulado = -1;  // -1 significa "usar dia real do sistema"
    console.log('📅 Voltando ao dia real');
  }
  
  
  // ===== SETAS: Simulação de hora e minutos =====
  // Permite avançar/recuar no tempo para testar alertas
  
  // SETA CIMA (↑): Aumenta 1 hora
  if (keyCode === UP_ARROW) {
    // Se ainda não estava a simular, começa com a hora atual
    if (horaSimulada < 0) horaSimulada = hour();
    if (minutoSimulado < 0) minutoSimulado = minute();
    if (diaSimulado < 0) diaSimulado = new Date().getDay();
    
    // Aumenta 1 hora
    horaSimulada = (horaSimulada + 1) % 24;
    
    // Se passou da meia-noite (voltou a 0), avança 1 dia
    if (horaSimulada === 0) {
      diaSimulado = (diaSimulado + 1) % 7;
      let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      console.log('📅 Passou para:', dias[diaSimulado]);
    }
    
    console.log('⏰ Hora simulada:', horaSimulada + ':' + minutoSimulado);
  }
  
  // SETA BAIXO (↓): Diminui 1 hora
  if (keyCode === DOWN_ARROW) {
    if (horaSimulada < 0) horaSimulada = hour();
    if (minutoSimulado < 0) minutoSimulado = minute();
    if (diaSimulado < 0) diaSimulado = new Date().getDay();
    
    // Diminui 1 hora
    horaSimulada = (horaSimulada - 1 + 24) % 24;
    
    // Se voltou para 23h (era 0h), volta 1 dia atrás
    if (horaSimulada === 23) {
      diaSimulado = (diaSimulado - 1 + 7) % 7;
      let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      console.log('📅 Voltou para:', dias[diaSimulado]);
    }
    
    console.log('⏰ Hora simulada:', horaSimulada + ':' + minutoSimulado);
  }
  
  // SETA DIREITA (→): Aumenta 5 minutos
  if (keyCode === RIGHT_ARROW) {
    if (horaSimulada < 0) horaSimulada = hour();
    if (minutoSimulado < 0) minutoSimulado = minute();
    if (diaSimulado < 0) diaSimulado = new Date().getDay();
    
    // Aumenta 5 minutos
    minutoSimulado = (minutoSimulado + 5) % 60;
    
    // Se passou dos 60 minutos, aumenta 1 hora
    if (minutoSimulado < 5) {
      horaSimulada = (horaSimulada + 1) % 24;
      
      // Se passou da meia-noite, avança 1 dia
      if (horaSimulada === 0) {
        diaSimulado = (diaSimulado + 1) % 7;
        let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        console.log('📅 Passou para:', dias[diaSimulado]);
      }
    }
    
    console.log('⏰ Hora simulada:', horaSimulada + ':' + minutoSimulado);
  }
  
  // SETA ESQUERDA (←): Diminui 5 minutos
  if (keyCode === LEFT_ARROW) {
    if (horaSimulada < 0) horaSimulada = hour();
    if (minutoSimulado < 0) minutoSimulado = minute();
    if (diaSimulado < 0) diaSimulado = new Date().getDay();
    
    // Diminui 5 minutos
    minutoSimulado = (minutoSimulado - 5 + 60) % 60;
    
    // Se voltou atrás na hora (passou de 0 para 55)
    if (minutoSimulado >= 55) {
      horaSimulada = (horaSimulada - 1 + 24) % 24;
      
      // Se voltou para 23h (era 0h), volta 1 dia atrás
      if (horaSimulada === 23) {
        diaSimulado = (diaSimulado - 1 + 7) % 7;
        let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        console.log('📅 Voltou para:', dias[diaSimulado]);
      }
    }
    
    console.log('⏰ Hora simulada:', horaSimulada + ':' + minutoSimulado);
  }
  
  // ===== ESPAÇO: Volta à hora real =====
  if (key === ' ') {
    horaSimulada = -1;    // Volta a usar hora real
    minutoSimulado = -1;  // Volta a usar minutos reais
    console.log('⏰ Voltando à hora real');
  }
}