const WHATSAPP_BASE_LINK = "https://wa.me/message/ZBA4WKZ5RORVP1";
const WHATSAPP_NUMBER = "5500000000000";
const FORM_SUBMIT_EMAIL = "contato@agmimpulse.com.br";
const FORM_SUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`;

const questions = [
  {
    id: "q1",
    title: "Quando você precisa tomar uma decisão crítica na empresa, você:",
    options: [
      { letter: "A", text: "Decido no feeling, dados são só para contabilidade", score: 3 },
      { letter: "B", text: "Tenho alguns números, mas não confio 100% para decidir", score: 2 },
      { letter: "C", text: "Abro o dashboard/software e decido com base nos indicadores", score: 1 }
    ]
  },
  {
    id: "q2",
    title: "Sua previsibilidade de faturamento vem de:",
    options: [
      { letter: "A", text: "Torcer para agenda encher. Meta é desejo, não ciência", score: 3 },
      { letter: "B", text: "Tenho software mas não uso com frequência", score: 2 },
      { letter: "C", text: "Funil no CRM + taxa de conversão: tenho previsibilidade", score: 1 }
    ]
  },
  {
    id: "q3",
    title: "Sobre lucro e ticket médio, hoje você:",
    options: [
      { letter: "A", text: "Só vejo no DRE depois que fecha o mês. Se der bom, deu", score: 3 },
      { letter: "B", text: "Tenho sistema, mas não integro com financeiro", score: 2 },
      { letter: "C", text: "Tenho BI que mostra dados em tempo real através de indicadores", score: 1 }
    ]
  },
  {
    id: "q4",
    title: "Se você ficasse 7 dias sem ir na empresa, sua equipe:",
    options: [
      { letter: "A", text: "Para. Pois tudo depende de supervisão", score: 3 },
      { letter: "B", text: "Roda algumas coisas, mas trava sem sua aprovação", score: 2 },
      { letter: "C", text: "Continua. Os processos e dados estão no sistema e não na sua cabeça", score: 1 }
    ]
  },
  {
    id: "q5",
    title: "Sobre perda de oportunidade de vendas:",
    options: [
      { letter: "A", text: "Não sei. Meu controle é caderninho ou memória", score: 3 },
      { letter: "B", text: "Tenho software mas não meço motivo de perda nem taxa de conversão", score: 2 },
      { letter: "C", text: "Meu CRM mostra exatamente onde perco oportunidades", score: 1 }
    ]
  },
  {
    id: "q6",
    title: "Sua precificação hoje é feita:",
    options: [
      { letter: "A", text: "Olho concorrente e copio. Margem é surpresa no final do mês", score: 3 },
      { letter: "B", text: "Tenho custos no sistema, mas não sei margem de lucro", score: 2 },
      { letter: "C", text: "Software calcula margem + demanda. Ajusto preço por dados", score: 1 }
    ]
  },
  {
    id: "q7",
    title: "Para destravar o crescimento da empresa, você acredita mais em:",
    options: [
      { letter: "A", text: "Ajustar primeiro os processos internos com as ferramentas que já possuo", budget: "BAIXINHO" },
      { letter: "B", text: "Treinar meu time comercial para converter mais", budget: "MEDIO" },
      { letter: "C", text: "Ter um especialista me guiando nas decisões estratégicas da empresa", budget: "ALTO" },
      { letter: "D", text: "Ter um time externo de alta performance rodando a gestão para mim", budget: "PREMIUM" }
    ]
  },
  {
    id: "q8",
    title: "Qual segmento da empresa?",
    options: [
      { letter: "A", text: "Saúde", segment: "SAUDE" },
      { letter: "B", text: "Outros", segment: "OUTROS" }
    ]
  }
];

const results = {
  VERMELHA: {
    className: "zone-red",
    icon: "warning",
    title: "ZONA VERMELHA: Empresa no Modo Sobrevivência",
    text: "A gestão ainda depende muito do improviso. Sem processos claros, indicadores confiáveis e rotina de análise, cada decisão vira urgência e o crescimento cobra caro da operação.",
    generalSolution: "IMPULSE-ME 360 - Diagnóstico, processos e indicadores para recuperar controle, previsibilidade e lucro.",
    healthSolution: "IMPULSE-ME Clinic - Do caos ao controle financeiro, com processos, indicadores e agenda organizada.",
    cta: "Receber direcionamento estratégico"
  },
  AMARELA: {
    className: "zone-yellow",
    icon: "insights",
    title: "ZONA AMARELA: Crescimento Instável",
    text: "Existe movimento, mas ainda falta previsibilidade. A empresa vende, entrega e resolve, porém sem uma rotina forte de indicadores o crescimento fica vulnerável.",
    generalSolution: "PLANO DE ESTRATÉGIA SAZONAL - Calendário comercial de 12 meses com ações prontas para vender o ano todo.",
    healthSolution: "PLANO DE ESTRATÉGIA SAZONAL - Calendário comercial para organizar agenda, campanhas e ações de captação.",
    cta: "Receber plano de ação"
  },
  AZUL: {
    className: "zone-blue",
    icon: "trending_up",
    title: "ZONA AZUL: Base Sólida, Hora de Escalar",
    text: "A operação já tem sinais de maturidade. Agora o desafio é transformar dados em decisão recorrente, treinar liderança e escalar sem perder margem.",
    generalSolution: "MENTORIAS IMPULSE-ME - Acompanhamento para implantar rotina de gestão, indicadores e tomada de decisão.",
    healthSolution: "MENTORIAS IMPULSE-ME - Ajuste fino para empresas de saúde que querem crescer com segurança e previsibilidade.",
    cta: "Receber caminho de escala"
  },
  AZUL_PREMIUM: {
    className: "zone-blue",
    icon: "workspace_premium",
    title: "ZONA AZUL PREMIUM: Pronto para Virar Referência",
    text: "A empresa demonstra estrutura e maturidade. O próximo passo é buscar excelência, blindar a operação e dominar o mercado com estratégia.",
    generalSolution: "IMPULSE-ME 360 PREMIUM - Projeto estratégico para consolidar gestão, cultura organizacional e crescimento sustentável.",
    healthSolution: "IMPULSE-ME Clinic Premium - Projeto estratégico para empresas de saúde que querem crescer com autoridade.",
    cta: "Receber projeto premium"
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
const questionTitle = document.querySelector("#questionTitle");
const optionsList = document.querySelector("#optionsList");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const formError = document.querySelector("#formError");
const questionError = document.querySelector("#questionError");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const resultSolution = document.querySelector("#resultSolution");
const resultIcon = document.querySelector("#resultIcon");
const resultMeta = document.querySelector("#resultMeta");
const whatsappButton = document.querySelector("#whatsappButton");
const restartButton = document.querySelector("#restartButton");
const emailStatus = document.querySelector("#emailStatus");
const menuButton = document.querySelector("#menuButton");
const mobileMenu = document.querySelector("#mobileMenu");
const siteHeader = document.querySelector("#siteHeader");
const testimonialCarousel = document.querySelector("#testimonialCarousel");
const floatingWhatsApp = document.querySelector(".floating-whatsapp");
const siteFooter = document.querySelector(".site-footer");

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
    company: data.get("company").trim(),
    business: data.get("business").trim(),
    city: data.get("city").trim(),
    state: data.get("state").trim().toUpperCase(),
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
  resultPanel.className = "quiz-panel result-panel";
  resultPanel.classList.remove("active");
  leadForm.reset();
  leadForm.classList.add("active");
  quizProgressWrap.hidden = true;
  formError.textContent = "";
  questionError.textContent = "";
  emailStatus.textContent = "";
  emailStatus.className = "email-status";
  resultMeta.innerHTML = "";
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

function initTestimonialCarousel() {
  if (!testimonialCarousel) {
    return;
  }

  const track = testimonialCarousel.querySelector(".video-carousel-track");
  const slides = [...testimonialCarousel.querySelectorAll(".video-testimonial")];
  const videos = slides.map((slide) => slide.querySelector("video"));
  const previousButton = document.querySelector("#testimonialPrev");
  const nextButton = document.querySelector("#testimonialNext");
  const dotsContainer = document.querySelector("#testimonialDots");
  let activeIndex = 0;
  let autoplayTimer;
  let touchStartX = 0;
  let carouselVisible = false;

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Mostrar depoimento ${index + 1}`);
    dot.addEventListener("click", () => {
      setActiveSlide(index);
      restartAutoplay();
    });
    dotsContainer.appendChild(dot);
    return dot;
  });

  function visibleSlides() {
    if (window.innerWidth <= 700) {
      return 1;
    }

    if (window.innerWidth <= 1120) {
      return 2;
    }

    return 3;
  }

  function trackStartIndex() {
    const visible = visibleSlides();
    const preferredStart = visible === 3 ? activeIndex - 1 : activeIndex;
    return Math.max(0, Math.min(preferredStart, slides.length - visible));
  }

  function updateTrackPosition() {
    const firstVisibleSlide = slides[trackStartIndex()];
    const trackOffset = firstVisibleSlide.offsetLeft - slides[0].offsetLeft;
    track.style.transform = `translateX(-${trackOffset}px)`;
  }

  function updateVideoPlayback() {
    videos.forEach((video, index) => {
      if (index === activeIndex && carouselVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }

  function setActiveSlide(index) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive && visibleSlides() === 1));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    updateTrackPosition();
    updateVideoPlayback();
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
  }

  function startAutoplay() {
    stopAutoplay();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    autoplayTimer = window.setInterval(() => {
      setActiveSlide(activeIndex + 1);
    }, 7000);
  }

  function restartAutoplay() {
    startAutoplay();
  }

  previousButton.addEventListener("click", () => {
    setActiveSlide(activeIndex - 1);
    restartAutoplay();
  });

  nextButton.addEventListener("click", () => {
    setActiveSlide(activeIndex + 1);
    restartAutoplay();
  });

  testimonialCarousel.addEventListener("mouseenter", stopAutoplay);
  testimonialCarousel.addEventListener("mouseleave", startAutoplay);
  testimonialCarousel.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });
  testimonialCarousel.addEventListener("touchend", (event) => {
    const movement = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(movement) > 45) {
      setActiveSlide(activeIndex + (movement < 0 ? 1 : -1));
    }

    startAutoplay();
  }, { passive: true });

  videos.forEach((video) => {
    video.muted = true;
    video.addEventListener("volumechange", () => {
      if (!video.muted) {
        stopAutoplay();
      }
    });
  });

  const carouselObserver = new IntersectionObserver((entries) => {
    carouselVisible = entries[0].isIntersecting;
    updateVideoPlayback();

    if (carouselVisible) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  }, { threshold: 0.35 });

  carouselObserver.observe(testimonialCarousel);

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      setActiveSlide(activeIndex);
    }, 120);
  });

  setActiveSlide(0);
}

initTestimonialCarousel();

if (floatingWhatsApp && siteFooter) {
  const updateFloatingWhatsApp = () => {
    const footerPosition = siteFooter.getBoundingClientRect();
    const footerIsVisible = footerPosition.top < window.innerHeight && footerPosition.bottom > 0;
    floatingWhatsApp.classList.toggle("is-hidden", footerIsVisible);
  };

  window.addEventListener("scroll", updateFloatingWhatsApp, { passive: true });
  window.addEventListener("resize", updateFloatingWhatsApp);
  updateFloatingWhatsApp();
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const existingAnswer = state.answers[question.id];
  const progress = Math.round(((state.currentQuestion + 1) / questions.length) * 100);

  progressLabel.textContent = `Pergunta ${state.currentQuestion + 1} de ${questions.length}`;
  progressPercent.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;
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
  const segment = state.answers.q8?.segment || "OUTROS";
  const zone = getZone(score, budget);
  const result = results[zone];
  const solution = segment === "SAUDE" ? result.healthSolution : result.generalSolution;
  const segmentLabel = segment === "SAUDE" ? "Saúde" : "Outros";
  const directionLabel = getDirectionLabel(budget);
  const leadPayload = buildLeadPayload(zone, result, solution, score, segmentLabel, directionLabel);

  resultPanel.className = `quiz-panel result-panel active ${result.className}`;
  resultIcon.textContent = result.icon;
  resultTitle.textContent = result.title;
  resultMeta.innerHTML = `
    <span>Segmento: ${segmentLabel}</span>
    <span>Pontuação: ${score}/18</span>
    <span>Direcionamento: ${directionLabel}</span>
  `;
  resultText.textContent = result.text;
  resultSolution.textContent = solution;
  whatsappButton.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">chat</span>${result.cta}`;
  whatsappButton.href = buildWhatsappUrl(leadPayload);
  sendLeadEmail(leadPayload);

  questionPanel.classList.remove("active");
  quizProgressWrap.hidden = true;
  document.querySelector("#quizShell").scrollIntoView({ behavior: "smooth", block: "start" });
}

function getZone(score, budget) {
  if (score <= 9 && budget === "PREMIUM") {
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

function getDirectionLabel(budget) {
  const labels = {
    BAIXINHO: "Processos internos",
    MEDIO: "Treinamento de equipe",
    ALTO: "Mentoria estratégica",
    PREMIUM: "Consultoria premium"
  };

  return labels[budget] || "Direcionamento estratégico";
}

function buildLeadPayload(zone, result, solution, score, segmentLabel, directionLabel) {
  const answerLines = questions.map((question, index) => {
    const answer = state.answers[question.id];
    return `${index + 1}. ${question.title} ${answer?.letter || "-"} - ${answer?.text || "-"}`;
  });

  const answersText = answerLines.join("\n");
  const message = [
    "Olá, AGM Impulse.",
    "Concluí o Diagnóstico Interativo e quero receber o direcionamento pelo WhatsApp.",
    "",
    `Nome: ${state.lead.name}`,
    `WhatsApp: ${state.lead.whatsapp}`,
    `Email: ${state.lead.email}`,
    `Empresa: ${state.lead.company}`,
    `Ramo de atuação: ${state.lead.business}`,
    `Segmento selecionado: ${segmentLabel}`,
    `Cidade/Estado: ${state.lead.city}/${state.lead.state}`,
    "",
    `Resultado: ${result.title}`,
    `Zona: ${zone.replace("_", " ")}`,
    `Pontuação: ${score}/18`,
    `Direcionamento desejado: ${directionLabel}`,
    `Solução indicada: ${solution}`,
    "",
    "Respostas:",
    answersText
  ].join("\n");

  return {
    nome: state.lead.name,
    whatsapp: state.lead.whatsapp,
    email: state.lead.email,
    empresa: state.lead.company,
    ramo_de_atuacao: state.lead.business,
    segmento: segmentLabel,
    cidade: state.lead.city,
    estado: state.lead.state,
    resultado: result.title,
    zona: zone,
    score_total: score,
    direcionamento: directionLabel,
    solucao_indicada: solution,
    respostas: answersText,
    mensagem_whatsapp: message
  };
}

function buildWhatsappUrl(payload) {
  if (WHATSAPP_NUMBER !== "5500000000000") {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(payload.mensagem_whatsapp)}`;
  }

  return `${WHATSAPP_BASE_LINK}?text=${encodeURIComponent(payload.mensagem_whatsapp)}`;
}

async function sendLeadEmail(payload) {
  emailStatus.textContent = "Enviando uma cópia do diagnóstico para a AGM Impulse...";
  emailStatus.className = "email-status is-loading";

  const formSubmitPayload = {
    _subject: `Novo diagnóstico AGM Impulse - ${payload.nome}`,
    _template: "table",
    _captcha: "false",
    _honey: "",
    _url: window.location.href.split("#")[0],
    _replyto: payload.email,
    nome: payload.nome,
    whatsapp: payload.whatsapp,
    email: payload.email,
    empresa: payload.empresa,
    ramo_de_atuacao: payload.ramo_de_atuacao,
    segmento: payload.segmento,
    cidade: payload.cidade,
    estado: payload.estado,
    resultado: payload.resultado,
    zona: payload.zona,
    score_total: payload.score_total,
    direcionamento: payload.direcionamento,
    solucao_indicada: payload.solucao_indicada,
    respostas: payload.respostas
  };

  try {
    const response = await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formSubmitPayload)
    });
    const responseText = await response.text();
    let data = {};

    try {
      data = JSON.parse(responseText);
    } catch {
      data = {};
    }

    const wasAccepted = response.ok && (data.success === true || data.success === "true");

    if (!wasAccepted) {
      throw new Error(data.message || `FormSubmit retornou status ${response.status}`);
    }

    emailStatus.textContent = "Cópia enviada para o e-mail da AGM Impulse.";
    emailStatus.className = "email-status is-success";
  } catch (error) {
    console.error("Falha ao enviar diagnóstico por e-mail:", error);
    const needsActivation = /activation|activate form/i.test(error.message);
    emailStatus.textContent = needsActivation
      ? "O recebimento por e-mail ainda precisa ser ativado pela AGM Impulse. O resultado continua disponível no WhatsApp."
      : "Não foi possível enviar a cópia por e-mail agora. Use o botão do WhatsApp para encaminhar o diagnóstico.";
    emailStatus.className = "email-status is-error";
  }
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
