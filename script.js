const WHATSAPP_LINK = "https://wa.me/message/ZBA4WKZ5RORVP1";

const questions = [
  {
    id: "q1",
    title: "Quando você precisa tomar uma decisão crítica na clínica, você:",
    options: [
      { letter: "A", text: "Decido no feeling. Dado é só pra contabilidade ver depois", score: 3 },
      { letter: "B", text: "Tenho alguns números, mas não confio 100% pra decidir", score: 2 },
      { letter: "C", text: "Abro o dashboard/software e decido com base nos indicadores", score: 1 }
    ]
  },
  {
    id: "q2",
    title: "Sua previsibilidade de faturamento vem de:",
    options: [
      { letter: "A", text: "Torcer pra agenda encher. Meta é desejo, não ciência", score: 3 },
      { letter: "B", text: "Tenho software mas o agendamento não preenche direito", score: 2 },
      { letter: "C", text: "Funil no CRM + taxa de conversão. Sei quanto vou faturar no mês", score: 1 }
    ]
  },
  {
    id: "q3",
    title: "Sobre lucro e ticket médio, hoje você:",
    options: [
      { letter: "A", text: "Só vejo no DRE depois que fecha o mês. Se der bom, deu", score: 3 },
      { letter: "B", text: "Tenho sistema, mas não integro agenda com financeiro", score: 2 },
      { letter: "C", text: "Tenho BI que mostra margem em tempo real por médico/procedimento", score: 1 }
    ]
  },
  {
    id: "q4",
    title: "Se você ficasse 7 dias sem ir na clínica, sua equipe:",
    options: [
      { letter: "A", text: "Para. Tudo depende de você mandar no WhatsApp", score: 3 },
      { letter: "B", text: "Roda algumas coisas, mas trava sem sua aprovação", score: 2 },
      { letter: "C", text: "Continua. Processos e dados tão no sistema, não na sua cabeça", score: 1 }
    ]
  },
  {
    id: "q5",
    title: "Sobre perda de paciente no seu CRC/agendamento:",
    options: [
      { letter: "A", text: "Não sei. Meu controle é caderninho ou memória", score: 3 },
      { letter: "B", text: "Tenho software mas não meço motivo de perda nem taxa de conversão", score: 2 },
      { letter: "C", text: "Meu CRM me mostra exatamente onde vaza paciente e treino o time nisso", score: 1 }
    ]
  },
  {
    id: "q6",
    title: "Sua precificação hoje é feita:",
    options: [
      { letter: "A", text: "Olho concorrente e copio. Margem é surpresa no final do mês", score: 3 },
      { letter: "B", text: "Tenho custos no sistema, mas não sei margem por procedimento", score: 2 },
      { letter: "C", text: "Software calcula margem + demanda. Ajusto preço por dados", score: 1 }
    ]
  },
  {
    id: "q7",
    title: "Pra destravar o crescimento da clínica, você acredita mais em:",
    options: [
      { letter: "A", text: "Ajustar processos internos primeiro, com o que tenho em casa", budget: "BAIXINHO" },
      { letter: "B", text: "Treinar meu time de agendamento pra ele converter mais", budget: "MEDIO" },
      { letter: "C", text: "Ter um especialista me guiando nas decisões estratégicas da clínica", budget: "ALTO" },
      { letter: "D", text: "Ter um time externo de alta performance rodando a gestão pra mim", budget: "PREMIUM" }
    ]
  }
];

const results = {
  VERMELHA: {
    title: "ZONA VERMELHA: Clínica no Modo Sobrevivência",
    text: "Você é o gargalo da clínica. Sem processo, cada dia é um incêndio. Agenda vazia hoje, caos amanhã. Crescer assim adoece você e quebra a operação.",
    solution: "IMPULSE ME CLINIC - Do caos ao controle financeiro com processos, indicadores e agenda organizada.",
    cta: "Quero delegar minha gestão"
  },
  AMARELA: {
    title: "ZONA AMARELA: Crescimento Instável",
    text: "Você fatura, mas não tem previsibilidade. Um mês cheio paga dois vazios. Falta processo pro agendamento lotar o ano todo.",
    solution: "PLANO SAZONAL PARA CLÍNICAS - Calendário de 12 meses.",
    cta: "Quero agenda previsível"
  },
  AZUL: {
    title: "ZONA AZUL: Base Sólida, Hora de Escalar",
    text: "Sua clínica é saudável. Agora o jogo é escalar sem perder qualidade nem sobrecarregar os médicos.",
    solution: "MENTORIAS IMPULSE ME SAÚDE - Ajuste fino com especialista em clínicas.",
    cta: "Quero escalar com especialista"
  },
  AZUL_PREMIUM: {
    title: "ZONA AZUL PREMIUM: Pronto pra Ser Referência",
    text: "Você já tem gestão. Agora é buscar excelência e dominar sua região como clínica referência.",
    solution: "IMPULSE ME 360 - Projeto estratégico para previsibilidade, cultura organizacional e lucro.",
    cta: "Quero dominar meu mercado"
  }
};

const state = {
  lead: {},
  currentQuestion: 0,
  answers: {}
};

const leadForm = document.querySelector("#leadForm");
const questionPanel = document.querySelector("#questionPanel");
const resultPanel = document.querySelector("#resultPanel");
const quizProgressWrap = document.querySelector("#quizProgressWrap");
const progressLabel = document.querySelector("#progressLabel");
const progressPercent = document.querySelector("#progressPercent");
const progressBar = document.querySelector("#progressBar");
const questionKicker = document.querySelector("#questionKicker");
const questionTitle = document.querySelector("#questionTitle");
const optionsList = document.querySelector("#optionsList");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const formError = document.querySelector("#formError");
const questionError = document.querySelector("#questionError");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const resultSolution = document.querySelector("#resultSolution");
const whatsappButton = document.querySelector("#whatsappButton");
const restartButton = document.querySelector("#restartButton");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const siteHeader = document.querySelector("#siteHeader");

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.textContent = "";

  if (!leadForm.checkValidity()) {
    formError.textContent = "Preencha todos os campos e aceite o contato para iniciar.";
    leadForm.reportValidity();
    return;
  }

  const data = new FormData(leadForm);
  state.lead = {
    name: data.get("name").trim(),
    whatsapp: data.get("whatsapp").trim(),
    email: data.get("email").trim(),
    clinic: data.get("clinic").trim(),
    consent: data.get("consent") === "on"
  };

  leadForm.classList.remove("active");
  questionPanel.classList.add("active");
  quizProgressWrap.hidden = false;
  state.currentQuestion = 0;
  renderQuestion();
  document.querySelector("#quizShell").scrollIntoView({ behavior: "smooth", block: "start" });
});

nextButton.addEventListener("click", () => {
  questionError.textContent = "";
  const current = questions[state.currentQuestion];

  if (!state.answers[current.id]) {
    questionError.textContent = "Escolha uma opção para continuar.";
    return;
  }

  if (state.currentQuestion === questions.length - 1) {
    showResult();
    return;
  }

  state.currentQuestion += 1;
  renderQuestion();
});

backButton.addEventListener("click", () => {
  questionError.textContent = "";

  if (state.currentQuestion === 0) {
    questionPanel.classList.remove("active");
    quizProgressWrap.hidden = true;
    leadForm.classList.add("active");
    return;
  }

  state.currentQuestion -= 1;
  renderQuestion();
});

restartButton.addEventListener("click", () => {
  state.currentQuestion = 0;
  state.answers = {};
  resultPanel.classList.remove("active");
  leadForm.reset();
  leadForm.classList.add("active");
  quizProgressWrap.hidden = true;
  formError.textContent = "";
  questionError.textContent = "";
  document.querySelector("#diagnostico").scrollIntoView({ behavior: "smooth", block: "start" });
});

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  menuButton.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">${isOpen ? "close" : "menu"}</span>`;
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    menuButton.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">menu</span>';
    document.body.style.overflow = "";
  });
});

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("compact", window.scrollY > 40);
});

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const existingAnswer = state.answers[question.id];
  const progress = Math.round(((state.currentQuestion + 1) / questions.length) * 100);

  progressLabel.textContent = `Pergunta ${state.currentQuestion + 1} de ${questions.length}`;
  progressPercent.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
  questionKicker.textContent = `Q${state.currentQuestion + 1}`;
  questionTitle.textContent = question.title;
  optionsList.innerHTML = "";
  nextButton.disabled = !existingAnswer;
  nextButton.innerHTML = state.currentQuestion === questions.length - 1
    ? 'Ver resultado <span class="material-symbols-outlined" aria-hidden="true">analytics</span>'
    : 'Próxima <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>';

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.dataset.letter = option.letter;
    button.setAttribute("aria-pressed", existingAnswer?.letter === option.letter ? "true" : "false");

    if (existingAnswer?.letter === option.letter) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <strong>${option.letter}</strong>
      <span>${option.text}</span>
    `;

    button.addEventListener("click", () => {
      state.answers[question.id] = option;
      questionError.textContent = "";
      renderQuestion();
    });

    optionsList.appendChild(button);
  });
}

function showResult() {
  const score = questions.slice(0, 6).reduce((total, question) => {
    return total + (state.answers[question.id]?.score || 0);
  }, 0);
  const budget = state.answers.q7?.budget;
  const zone = getZone(score, budget);
  const result = results[zone];

  resultTitle.textContent = result.title;
  resultText.textContent = result.text;
  resultSolution.textContent = result.solution;
  whatsappButton.textContent = result.cta;
  whatsappButton.href = WHATSAPP_LINK;

  questionPanel.classList.remove("active");
  resultPanel.classList.add("active");
  quizProgressWrap.hidden = true;
  document.querySelector("#quizShell").scrollIntoView({ behavior: "smooth", block: "start" });
}

function getZone(score, budget) {
  if (score === 6 && budget === "PREMIUM") {
    return "AZUL_PREMIUM";
  }

  if (score >= 15) {
    return "VERMELHA";
  }

  if (score >= 10) {
    return "AMARELA";
  }

  return "AZUL";
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
