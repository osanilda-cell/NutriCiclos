// Gera o site estático NutriCiclos em ../dist
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../dist");

/* ======================= CONFIGURAÇÃO ======================= */
export const SITE = {
  url: "https://nutriciclos.com.br",
  name: "NutriCiclos",
  fullName: "NutriCiclos — Clínica de Nutrição",
  nutri: "Osana Melo",
  crn: "CRN-10 6463",
  email: "osanilda@gmail.com",
  whatsapp: "5511985469311",          // formato internacional, só números
  whatsappLabel: "(11) 98546-9311",
  waText: "Olá, Osana! Vim pelo site da NutriCiclos e gostaria de agendar uma consulta.",
};
const WA = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.waText)}`;
const VERSION = Date.now().toString(36);
const HAS_PHOTO = fs.existsSync(path.join(__dirname, "assets/img/osana.jpg"));

/* ======================= ÍCONES ======================= */
const I = {
  arrow: `<svg class="btn__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.5-4.5A8.4 8.4 0 1 1 20.5 11.6Z"/><path d="M9 10.2c.3 1.9 2.3 4 4.4 4.5l1.3-1.1 1.8.8"/><path d="M9 10.2 9.9 9l-.7-1.8"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>`,
  // serviços (48x48, traço fino)
  bio: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="9" width="34" height="32" rx="9"/><path d="M14 22a10 10 0 0 1 20 0"/><path d="m24 22 4.5-5"/><circle cx="24" cy="22" r="1.3" fill="currentColor"/><path d="M16 33h4M28 33h4"/></svg>`,
  cycle: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="15"/><circle cx="24" cy="9" r="3" fill="currentColor" stroke="none"/><circle cx="37" cy="31.5" r="3"/><circle cx="11" cy="31.5" r="3"/><path d="M24 17c-3.5 2.5-3.5 7.5 0 10 3.5-2.5 3.5-7.5 0-10Z"/></svg>`,
  leaf: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 37C9 22 19 10 39 9c1 20-10 30-25 29"/><path d="M11 37c6-9 13-15 22-20"/><path d="M8 41l3-4"/></svg>`,
  sport: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="29" cy="9.5" r="3.5"/><path d="m17 20 7-4 6 3 3 7 6 1"/><path d="m24 16-3 11 7 5-2 10"/><path d="m21 27-4 7-8 1"/></svg>`,
  woman: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="18" r="10"/><path d="M24 28v14M18 36h12"/><path d="M24 12c-2.5 2-2.5 5.5 0 7.5 2.5-2 2.5-5.5 0-7.5Z"/></svg>`,
  pen: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="17" y="6" width="14" height="28" rx="5" transform="rotate(35 24 20)"/><path d="m31.5 30 5 7"/><path d="m36.5 37 1.8 2.6"/><path d="m14 10 5 3.5M12 14l3.5 2.5"/><path d="M8 40h13"/></svg>`,
  // valores
  ear: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 20a10 10 0 0 1 20 0c0 7-7 8-7 14a5 5 0 0 1-9 3"/><path d="M19 20a5 5 0 0 1 10 0c0 3-3 4-3 6"/><path d="M38 14c2 3 2 9 0 12M42 11c3 5 3 13 0 18"/></svg>`,
  flask: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 7h10M20 7v12L10 37a3 3 0 0 0 2.6 4.5h22.8A3 3 0 0 0 38 37L28 19V7"/><path d="M15 30h18"/><circle cx="21" cy="35" r="1.3" fill="currentColor"/><circle cx="27" cy="34" r="1" fill="currentColor"/></svg>`,
  heart: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 40S8 31 8 19a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 12-16 21-16 21Z"/></svg>`,
  loop: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M38 24a14 14 0 1 1-4.1-9.9"/><path d="M34 8v6.5h-6.5"/><circle cx="24" cy="24" r="3"/></svg>`,
  thyroid: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 12v26"/><path d="M24 19c-3-6-13-8-15 1-1.5 8 5 15 15 10"/><path d="M24 19c3-6 13-8 15 1 1.5 8-5 15-15 10"/></svg>`,
};

/* ======================= DUNAS ======================= */
const dunes = (steps = 26, trail = "M300 338 C 520 300, 640 262, 780 238 S 990 204, 1085 196") => `
<div class="dunes" aria-hidden="true">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" data-steps="${steps}">
    <defs>
      <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8d8c5"/><stop offset="1" stop-color="#efe3d4"/></linearGradient>
      <linearGradient id="dg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1e5d6"/><stop offset="1" stop-color="#f6eee4"/></linearGradient>
      <linearGradient id="dg3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7efe5"/><stop offset=".45" stop-color="#faf5ee"/></linearGradient>
    </defs>
    <path class="dune" fill="url(#dg1)" d="M0 150 C 180 108, 360 88, 560 118 S 900 192, 1100 140 S 1340 78, 1440 96 V 360 H 0 Z"/>
    <path class="dune" fill="url(#dg2)" d="M0 214 C 200 168, 420 158, 640 196 S 1000 248, 1240 190 S 1400 166, 1440 172 V 360 H 0 Z"/>
    <path class="dune" fill="url(#dg3)" d="M0 272 C 260 236, 520 246, 760 270 S 1200 300, 1440 246 V 360 H 0 Z"/>
    <path class="trail" d="${trail}" fill="none" stroke="none"/>
    <g class="steps-g"></g>
  </svg>
</div>`;

/* ======================= PARTES COMPARTILHADAS ======================= */
const NAV = [
  { key: "inicio", href: "", label: "Início" },
  { key: "fases", href: "fases/", label: "As fases" },
  { key: "tireoide", href: "tireoide/", label: "Tireoide" },
  { key: "servicos", href: "servicos/", label: "Serviços" },
  { key: "nutricionista", href: "nutricionista/", label: "A Nutricionista" },
  { key: "contato", href: "contato/", label: "Contato" },
];

function head(p, r) {
  const url = SITE.url + "/" + p.path;
  const img = SITE.url + "/assets/img/og-image.jpg";
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${p.title}</title>
<meta name="description" content="${p.description}">
${p.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
<meta name="theme-color" content="#faf5ee">
<meta name="author" content="${SITE.nutri} — ${SITE.crn}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="${SITE.fullName}">
<meta property="og:title" content="${p.ogTitle || p.title}">
<meta property="og:description" content="${p.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="NutriCiclos — Nutrição em cada fase da menopausa">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p.ogTitle || p.title}">
<meta name="twitter:description" content="${p.description}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="${r}favicon.svg" type="image/svg+xml">
<link rel="icon" href="${r}favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="${r}apple-touch-icon.png">
<link rel="manifest" href="${r}site.webmanifest">
<link rel="preload" href="${r}assets/fonts/fraunces-latin-standard-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${r}assets/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
${p.preload || ""}
<link rel="stylesheet" href="${r}assets/css/style.css?v=${VERSION}">
<script>document.documentElement.classList.add("js");setTimeout(function(){if(!window.__ncReady)document.documentElement.classList.remove("js")},3500);</script>
${(p.jsonld || []).map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
</head>`;
}

function header(p, r) {
  const links = NAV.map((n) => `<li><a class="nav__link" href="${r}${n.href || "./"}"${n.key === p.key ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("");
  const mlinks = NAV.map((n, i) => `<li><a href="${r}${n.href || "./"}"${n.key === p.key ? ' aria-current="page"' : ""}>${n.label}<small>0${i + 1}</small></a></li>`).join("");
  return `
<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
<header class="site-header">
  <div class="container">
    <a class="brand" href="${r || "./"}">
      <img class="brand__mark" src="${r}assets/img/emblem-copper.svg" alt="" width="34" height="41">
      <span class="brand__word">
        <img class="brand__name" src="${r}assets/img/wordmark-copper.svg" alt="NutriCiclos" width="128" height="26">
        <span class="brand__tag">Clínica de Nutrição</span>
      </span>
    </a>
    <nav class="nav" aria-label="Principal">
      <ul class="nav__list">${links}</ul>
      <a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">Agendar consulta</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu"><span></span><span></span></button>
    </nav>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
  <nav aria-label="Menu móvel"><ul>${mlinks}</ul></nav>
  <div class="mobile-menu__foot">
    <a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Agendar pelo WhatsApp</a>
    <p>${SITE.nutri} · Nutricionista · ${SITE.crn}</p>
  </div>
</div>`;
}

function footer(r) {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <img class="brand__mark" src="${r}assets/img/emblem-light.svg" alt="" width="54" height="65" loading="lazy">
        <img class="brand__name" src="${r}assets/img/wordmark-light.svg" alt="NutriCiclos" width="190" height="38" loading="lazy">
        <p>Clínica de Nutrição. Cuidado nutricional para a mulher em cada fase da menopausa, com atenção à tireoide. Atendimento online para todo o Brasil e presencial em Florianópolis e região.</p>
      </div>
      <div>
        <h2>Navegação</h2>
        <ul>${NAV.map((n) => `<li><a href="${r}${n.href || "./"}">${n.label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2>Contato</h2>
        <ul>
          <li><a href="${WA}" target="_blank" rel="noopener">WhatsApp <span class="nowrap">${SITE.whatsappLabel}</span></a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__big">Nutrição em cada fase da menopausa.</p>
        <a class="btn btn--light" href="${WA}" target="_blank" rel="noopener">Agendar consulta ${I.arrow}</a>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© <span data-year>2026</span> NutriCiclos — Clínica de Nutrição</p>
      <p>Responsável técnica: ${SITE.nutri} · Nutricionista · ${SITE.crn}</p>
    </div>
  </div>
</footer>`;
}

function scripts(r) {
  return `
<script src="${r}assets/js/vendor/gsap.min.js" defer></script>
<script src="${r}assets/js/vendor/ScrollTrigger.min.js" defer></script>
<script src="${r}assets/js/vendor/SplitText.min.js" defer></script>
<script src="${r}assets/js/vendor/lenis.min.js" defer></script>
<script src="${r}assets/js/main.js?v=${VERSION}" defer></script>`;
}

function page(p) {
  const depth = p.path.split("/").filter(Boolean).length;
  const r = "../".repeat(depth);
  const body = typeof p.body === "function" ? p.body(r) : p.body;
  return `${head(p, r)}
<body class="page-${p.key}">
${header(p, r)}
<main id="conteudo">
${body}
</main>
${footer(r)}
${scripts(r)}
</body>
</html>
`;
}

function pageHero({ eyebrow, title, lead, extra = "" }, r) {
  return `
<section class="page-hero">
  <img class="page-hero__ring" src="${r}assets/img/emblem-copper.svg" alt="" aria-hidden="true">
  <div class="container">
    <p class="eyebrow" data-hero-in>${eyebrow}</p>
    <h1 class="display page-hero__title" data-hero-title>${title}</h1>
    ${lead ? `<p class="lead" data-hero-in>${lead}</p>` : ""}
    ${extra}
  </div>
  ${dunes(22)}
</section>`;
}

function cta(r, { title = "Cada fase da menopausa merece um cuidado <em>nutricional</em> específico.", lead = "Atendimento online para todo o Brasil e presencial em Florianópolis e região." } = {}) {
  return `
<section class="cta" aria-labelledby="cta-title">
  <div class="container">
    <p class="eyebrow eyebrow--center" data-reveal>Agende sua consulta</p>
    <h2 class="display cta__title" id="cta-title" data-split>${title}</h2>
    <p class="lead" data-reveal>${lead}</p>
    <div class="cta__actions" data-reveal>
      <a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Agendar pelo WhatsApp</a>
      <a class="btn btn--ghost" href="mailto:${SITE.email}">${I.mail} Enviar e-mail</a>
    </div>
  </div>
  ${dunes(30, "M200 340 C 430 300, 560 268, 720 244 S 930 210, 1030 200")}
</section>`;
}

/* ======================= CONTEÚDO ======================= */
const PHASES = [
  {
    slug: "pre-menopausa", n: "Pré-menopausa", short: "Pré-menopausa", sub: "A mudança silenciosa",
    age: "A partir dos 35 a 40 anos, com a menstruação ainda regular",
    text: "A menstruação continua regular, mas a partir dos 35 a 40 anos a reserva dos ovários diminui e a progesterona começa a cair. Nada atrasa, e por isso quase ninguém percebe. É a hora de construir reserva: músculos, ossos e energia.",
    tags: ["Massa muscular", "Ossos", "Glicemia", "TPM"],
    title: "Pré-menopausa: sinais aos 35-40 anos e alimentação | NutriCiclos",
    description: "Os hormônios começam a mudar antes da menstruação atrasar. Veja os sinais da pré-menopausa e como a alimentação prepara o corpo.",
    h1: "Pré-menopausa: a mudança <em>silenciosa</em>.",
    what: [
      "A pré-menopausa é toda a vida fértil da mulher, mas é a partir dos 35 a 40 anos que ela pede um olhar mais atento. Os ovários passam a ter menos óvulos, e a produção de progesterona começa a cair antes da de estrogênio.",
      "A menstruação continua vindo no dia certo. Por isso essas mudanças passam despercebidas, mas já aparecem no sono, no humor e na composição do corpo.",
    ],
    signs: ["TPM mais intensa", "Sono mais leve", "Fluxo diferente do habitual", "Cansaço", "Gordura que começa a se acumular na barriga", "Mais dificuldade para perder peso"],
    focus: [
      "Proteína em todas as refeições, para construir e manter massa muscular.",
      "Cálcio e vitamina D, para chegar à menopausa com ossos fortes.",
      "Ferro, principalmente quando o fluxo é intenso.",
      "Glicemia estável, com fibras e menos açúcar e farinhas refinadas.",
      "Bioimpedância, para ter um ponto de partida e acompanhar a evolução.",
    ],
    thyroid: "É também uma idade comum para o aparecimento de alterações da tireoide. Cansaço e ganho de peso que não melhoram com ajustes de rotina merecem uma avaliação da tireoide.",
  },
  {
    slug: "perimenopausa", n: "Perimenopausa", short: "Perimenopausa", sub: "A transição",
    age: "Dos ciclos irregulares até um ano após a última menstruação",
    text: "Começa quando os ciclos ficam irregulares e vai até um ano depois da última menstruação. Dura em média 4 anos. O estrogênio sobe e desce de forma imprevisível, e os sintomas aparecem.",
    tags: ["Fogachos", "Sono", "Humor", "Ciclos irregulares"],
    title: "Perimenopausa: sintomas, duração e o que comer | NutriCiclos",
    description: "Ciclo irregular, calores, insônia e ganho de peso: entenda a perimenopausa e o que a alimentação faz por cada sintoma.",
    h1: "Perimenopausa: a <em>transição</em>.",
    what: [
      "A perimenopausa é a transição propriamente dita. Começa quando o intervalo entre as menstruações passa a variar e termina 12 meses depois da última menstruação. Costuma durar cerca de 4 anos, mas pode ser mais curta ou mais longa.",
      "Nessa fase o estrogênio não cai em linha reta: ele oscila, com picos e quedas. É essa instabilidade que explica sintomas que vêm e vão.",
    ],
    signs: ["Ciclos irregulares, mais curtos ou mais longos", "Ondas de calor e suor noturno", "Insônia e despertares de madrugada", "Irritabilidade, ansiedade e névoa mental", "Sangramento mais intenso", "Ganho de peso, principalmente na barriga"],
    focus: [
      "Glicemia estável ao longo do dia, o que ajuda na fome e na energia.",
      "Proteína distribuída nas refeições, para proteger a massa muscular.",
      "Ferro quando há sangramento intenso.",
      "Atenção a café, álcool e pimenta, que podem disparar fogachos em algumas mulheres.",
      "Jantar mais leve e uma rotina que favoreça o sono.",
    ],
    thyroid: "Palpitações, calor, ansiedade e insônia também podem ser sinais de hipertireoidismo, como na doença de Graves. Cansaço e ganho de peso podem ser hipotireoidismo, como na doença de Hashimoto. Por isso a avaliação inclui sempre a tireoide.",
  },
  {
    slug: "menopausa", n: "Menopausa", short: "Menopausa", sub: "O marco",
    age: "A última menstruação, em média perto dos 48 a 51 anos no Brasil",
    text: "É o marco da última menstruação, confirmado depois de 12 meses sem menstruar. Antes dos 40 anos é considerada prematura. É o momento de reavaliar tudo: exames, composição corporal e plano alimentar.",
    tags: ["Fogachos", "Massa muscular", "Osso", "Coração"],
    title: "Menopausa: o que muda no corpo e na alimentação | NutriCiclos",
    description: "Como saber se entrou na menopausa, o que muda no metabolismo e como ajustar a alimentação, com ou sem reposição hormonal.",
    h1: "Menopausa: o <em>marco</em>.",
    what: [
      "A menopausa não é um período, é um dia: o da última menstruação. Só se sabe que ela aconteceu olhando para trás, depois de 12 meses seguidos sem menstruar.",
      "No Brasil, ela acontece em média perto dos 48 a 51 anos. Quando acontece antes dos 40 anos, é chamada de insuficiência ovariana prematura e precisa de acompanhamento médico.",
    ],
    signs: ["Sintomas da transição que podem continuar por alguns anos", "Ressecamento da pele e da mucosa vaginal", "Mudança na distribuição de gordura", "Alterações no colesterol"],
    focus: [
      "Reavaliação completa: história, exames e bioimpedância.",
      "Alimentação ajustada junto com a terapia hormonal, quando ela for indicada pela sua médica.",
      "Proteína suficiente para manter a força.",
      "Cálcio, vitamina D e alimentos que protegem o coração.",
    ],
    thyroid: "Quem usa levotiroxina precisa de atenção extra: o cálcio e o ferro, comuns nessa fase, atrapalham a absorção do remédio quando são tomados perto dele.",
  },
  {
    slug: "pos-menopausa", n: "Pós-menopausa", short: "Pós-menopausa", sub: "Força para o resto da vida",
    age: "Do primeiro ano após a menopausa em diante",
    text: "Começa depois da menopausa e segue pela vida toda. A perda óssea é mais rápida nos primeiros anos, o colesterol tende a subir e a massa muscular cai sem estímulo. Alimentação e treino de força protegem o corpo para o futuro.",
    tags: ["Força", "Osteoporose", "Coração", "Autonomia"],
    title: "Pós-menopausa: ossos, músculos e coração | NutriCiclos",
    description: "Depois da menopausa, a alimentação protege ossos, músculos e coração. Veja o que priorizar no prato para viver com força.",
    h1: "Pós-menopausa: força para o <em>resto da vida</em>.",
    what: [
      "A pós-menopausa começa depois da menopausa e segue pelo resto da vida. Com o estrogênio baixo e estável, os sintomas costumam diminuir, mas o corpo passa a ter outras prioridades.",
      "A perda de massa óssea é mais rápida nos primeiros anos, o risco cardiovascular aumenta e a massa muscular diminui se não for estimulada. É aqui que o cuidado de hoje define a autonomia de amanhã.",
    ],
    signs: ["Perda de força e de massa muscular", "Maior risco de osteoporose e fraturas", "Mudanças no colesterol e na pressão", "Ressecamento e alterações urinárias"],
    focus: [
      "Proteína distribuída no dia, em todas as refeições.",
      "Cálcio e vitamina D, com exames para ajustar.",
      "Um padrão alimentar que protege o coração: fibras, gorduras boas e menos ultraprocessados.",
      "Hidratação, que fica mais difícil com a idade.",
      "Treino de força combinado com a alimentação.",
    ],
    thyroid: "No hipertireoidismo, como na doença de Graves, a perda óssea se soma à da pós-menopausa. No hipotireoidismo, o colesterol tende a subir. Nos dois casos a alimentação precisa considerar a tireoide.",
  },
];

const SERVICES = [
  { icon: "bio", short: "Anamnese completa e composição corporal por bioimpedância, para acompanhar músculo e gordura em cada fase.", t: "Avaliação nutricional com bioimpedância", s: "Anamnese completa (história, hábitos, rotina e exames) e análise da composição corporal por bioimpedância: massa magra, gordura e água corporal. Um ponto de partida preciso para o seu plano e para acompanhar cada fase.", tags: ["Anamnese", "Composição corporal", "Evolução ao longo do tempo"] },
  { icon: "cycle", short: "Pré-menopausa, perimenopausa, menopausa e pós-menopausa: um plano que acompanha seus hormônios.", t: "Nutrição nas fases da menopausa", s: "Da pré-menopausa à pós-menopausa, cada fase tem necessidades próprias. O plano alimentar acompanha essas mudanças, com ou sem terapia hormonal, em conjunto com a sua médica.", tags: ["Pré-menopausa", "Perimenopausa", "Menopausa", "Pós-menopausa"] },
  { icon: "thyroid", short: "Hipotireoidismo (Hashimoto) e hipertireoidismo (Graves): alimentação que funciona junto com o tratamento.", t: "Nutrição no hipotireoidismo e nas alterações da tireoide", s: "Cuidado nutricional nas alterações tireoidianas, como a doença de Hashimoto (hipotireoidismo) e a doença de Graves (hipertireoidismo): horário certo da levotiroxina, selênio, iodo, ferro e vitamina D na medida certa, sempre junto com o tratamento do endocrinologista.", tags: ["Hipotireoidismo", "Hashimoto", "Hipertireoidismo", "Graves"] },
  { icon: "leaf", short: "Perder gordura na menopausa sem perder músculo, sem dietas genéricas.", t: "Emagrecimento na menopausa", s: "Sem dietas genéricas nem restrições impossíveis: mudanças consistentes, que reduzem a gordura abdominal, preservam a massa muscular e cabem na sua rotina, para resultados que se sustentam.", tags: ["Gordura abdominal", "Massa muscular", "Constância"] },
  { icon: "sport", short: "Alimentação ajustada ao treino de força, para manter músculo, osso e energia depois dos 40.", t: "Treino de força e alimentação depois dos 40", s: "Alimentação ajustada ao seu treino e aos seus objetivos: energia para treinar, recuperação e o estímulo certo para manter músculos e ossos fortes depois dos 40.", tags: ["Força", "Recuperação", "Massa muscular"] },
  { icon: "pen", short: "Durante e após o uso de semaglutida (Ozempic®) e tirzepatida (Mounjaro®), preservando a massa muscular.", t: "Acompanhamento com medicamentos para emagrecimento", s: "Acompanhamento nutricional durante e após o uso de medicamentos como semaglutida (Ozempic®) e tirzepatida (Mounjaro®): garantir proteína e nutrientes com o apetite reduzido, preservar a massa muscular e manter os resultados depois da suspensão.", tags: ["Durante o uso", "Após a suspensão", "Preservar massa muscular"] },
];

const STEPS = [
  { t: "Primeiro contato", s: "Você fala comigo pelo WhatsApp ou por e-mail e escolhemos juntas o melhor horário, online ou presencial." },
  { t: "Consulta e avaliação", s: "Escuta da sua história, rotina, exames e objetivos, com avaliação da composição corporal por bioimpedância." },
  { t: "Plano personalizado", s: "Estratégias alimentares realistas, pensadas para a sua fase, para a sua tireoide e para o seu dia a dia." },
  { t: "Acompanhamento", s: "Retornos para ajustar o plano, acompanhar sua evolução e seguir ao seu lado." },
];

const FAQ = [
  ["Qual a diferença entre pré-menopausa, perimenopausa e menopausa?", "A pré-menopausa é a vida fértil, com atenção especial a partir dos 35 a 40 anos, quando os hormônios começam a cair sem atrasar a menstruação. A perimenopausa é a transição, com ciclos irregulares. A menopausa é o dia da última menstruação, confirmado após 12 meses sem menstruar. Depois dela vem a pós-menopausa."],
  ["Com quantos anos começa a perimenopausa?", "Em geral, por volta dos 40 e poucos anos, quando os ciclos começam a ficar irregulares. Ela dura em média 4 anos, mas cada mulher tem o seu ritmo."],
  ["Por que engordo na menopausa mesmo comendo igual?", "A queda do estrogênio muda o lugar onde o corpo guarda gordura, que passa a se concentrar na barriga, e a perda de massa muscular diminui o gasto de energia. Por isso a estratégia muda: mais proteína, mais força e menos restrição."],
  ["Hipotireoidismo engorda? O que comer?", "O hipotireoidismo sem tratamento pode causar um ganho de peso moderado, com inchaço. Com o tratamento em dia, a alimentação ajuda com o horário certo da levotiroxina, nutrientes como selênio, ferro e vitamina D e um plano que considere também a menopausa."],
  ["Palpitação e calor são menopausa ou hipertireoidismo?", "Podem ser os dois. Calor, suor, palpitações e insônia aparecem tanto na perimenopausa quanto no hipertireoidismo, como na doença de Graves. Por isso vale avaliar a tireoide com a sua médica."],
  ["Posso tomar levotiroxina com café ou com o cálcio?", "O ideal é tomar a levotiroxina em jejum, só com água, e esperar de 30 a 60 minutos para o café da manhã. Suplementos de cálcio e de ferro devem ficar a cerca de 4 horas de distância do remédio."],
  ["Preciso de nutricionista se já faço reposição hormonal?", "A reposição pode ser uma aliada valiosa, mas sozinha não resolve tudo. A alimentação protege músculos, ossos e coração e ajuda no peso e na energia, com ou sem reposição."],
  ["O atendimento é online?", "Sim. O atendimento é online para todo o Brasil e presencial em Florianópolis e região."],
];

const stepsHtml = () => `
<div class="steps" role="list">
  <span class="steps__line" aria-hidden="true"><i></i></span>
  ${STEPS.map((s, i) => `<div class="step" role="listitem" data-reveal><span class="step__dot">0${i + 1}</span><h3>${s.t}</h3><p>${s.s}</p></div>`).join("")}
</div>`;

/* ---------- JSON-LD ---------- */
const ORG = {
  "@type": "MedicalBusiness",
  "@id": SITE.url + "/#clinica",
  name: SITE.fullName,
  alternateName: "NutriCiclos",
  url: SITE.url + "/",
  logo: SITE.url + "/assets/img/logo-nutriciclos.jpg",
  image: SITE.url + "/assets/img/og-image.jpg",
  description: "Clínica de nutrição para a mulher nas fases da menopausa (pré-menopausa, perimenopausa, menopausa e pós-menopausa), com atenção ao hipotireoidismo e às alterações da tireoide. Atendimento online e presencial em Florianópolis.",
  email: SITE.email,
  telephone: "+55 11 98546-9311",
  medicalSpecialty: "DietNutrition",
  slogan: "Nutrição em cada fase da menopausa",
  areaServed: [{ "@type": "City", name: "Florianópolis" }, { "@type": "Country", name: "Brasil" }],
  founder: { "@id": SITE.url + "/nutricionista/#osana" },
  knowsAbout: ["Nutrição na menopausa", "Climatério", "Perimenopausa", "Pós-menopausa", "Hipotireoidismo", "Tireoidite de Hashimoto", "Doença de Graves", "Bioimpedância", "Emagrecimento"],
};
const PERSON = {
  "@type": "Person",
  "@id": SITE.url + "/nutricionista/#osana",
  name: SITE.nutri,
  jobTitle: "Nutricionista",
  identifier: SITE.crn,
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Nove de Julho (UNINOVE)" },
  knowsAbout: ["Nutrição na menopausa", "Hipotireoidismo", "Alterações da tireoide"],
  worksFor: { "@id": SITE.url + "/#clinica" },
  url: SITE.url + "/nutricionista/",
};
// arco de círculo para textos que acompanham a roda (ângulos em graus, 0 = direita)
const arc = (cx, cy, rad, a0, a1, sweep) => {
  const p = (a) => [(cx + rad * Math.cos(a * Math.PI / 180)).toFixed(1), (cy + rad * Math.sin(a * Math.PI / 180)).toFixed(1)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M${x0} ${y0} A${rad} ${rad} 0 0 ${sweep} ${x1} ${y1}`;
};
const articleLd = (headline, description, p) => ({
  "@context": "https://schema.org", "@type": "Article", headline, description, inLanguage: "pt-BR",
  url: SITE.url + "/" + p, author: { "@id": SITE.url + "/nutricionista/#osana" }, publisher: { "@id": SITE.url + "/#clinica" },
});
// corpo das páginas de conteúdo: blocos com título à esquerda e texto à direita
const articleBody = (r, blocks) => blocks.map((b, i) => `
<section class="section${i % 2 ? " section--sand" : ""}" aria-label="${b.eyebrow}">
  <div class="container split">
    <div class="split__sticky">
      <p class="eyebrow" data-reveal>${b.eyebrow}</p>
      <h2 class="h2" data-split style="margin-top:22px">${b.title}</h2>
    </div>
    <div class="prose">${b.html}</div>
  </div>
</section>`).join("");
const crumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it[0], item: SITE.url + "/" + it[1] })),
});

/* ======================= PÁGINAS ======================= */
const pages = [];

/* ---------- INÍCIO ---------- */
const COMPARE = [
  ["Cansaço", "Comum", "Muito comum", "Comum, com agitação"],
  ["Peso", "Ganho, na barriga", "Ganho, com inchaço", "Perda, mesmo comendo mais"],
  ["Temperatura", "Ondas de calor", "Sensação de frio", "Calor e suor constantes"],
  ["Coração", "Palpitações podem ocorrer", "Batimento mais lento", "Palpitações frequentes"],
  ["Sono e humor", "Insônia, irritabilidade", "Desânimo, lentidão", "Ansiedade, insônia, tremor"],
  ["Menstruação", "Irregular na transição", "Pode ficar mais intensa", "Pode ficar escassa"],
  ["Cabelo e pele", "Pele seca, queda", "Pele seca, queda", "Cabelo fino, queda"],
];
const compareHtml = () => `
<div class="compare" data-reveal>
  <table>
    <caption class="sr-only">Comparação de sintomas entre menopausa, hipotireoidismo e hipertireoidismo</caption>
    <thead><tr><th scope="col">Sintoma</th><th scope="col">Menopausa</th><th scope="col">Hipotireoidismo<small>Hashimoto</small></th><th scope="col">Hipertireoidismo<small>Graves</small></th></tr></thead>
    <tbody>${COMPARE.map((row) => `<tr><th scope="row">${row[0]}</th>${row.slice(1).map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>
</div>`;
const faqHtml = () => `
<div class="faq">
  ${FAQ.map(([q, a]) => `<details class="faq__item" data-reveal><summary>${q}</summary><p>${a}</p></details>`).join("")}
</div>`;
const faqLd = () => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

pages.push({
  key: "inicio",
  path: "",
  file: "index.html",
  title: "Nutricionista para Menopausa e Hipotireoidismo | NutriCiclos",
  ogTitle: "NutriCiclos — Nutrição em cada fase da menopausa",
  description: "Nutrição para pré-menopausa, perimenopausa, menopausa e pós-menopausa, com atenção ao hipotireoidismo (Hashimoto) e ao hipertireoidismo (Graves). Agende.",
  preload: `<link rel="preload" href="assets/img/emblem-3d.webp" as="image" type="image/webp" fetchpriority="high">`,
  jsonld: [{ "@context": "https://schema.org", "@graph": [ORG, PERSON, { "@type": "WebSite", "@id": SITE.url + "/#site", url: SITE.url + "/", name: SITE.fullName, inLanguage: "pt-BR", publisher: { "@id": SITE.url + "/#clinica" } }] }, faqLd()],
  body: (r) => `
<section class="hero" aria-labelledby="hero-title">
  <div class="container hero__grid">
    <div class="hero__copy">
      <p class="eyebrow" data-hero-in>Nutricionista no climatério<span class="hide-sm">· ${SITE.nutri}</span></p>
      <h1 class="display hero__title" id="hero-title" data-hero-title>Nutrição para<br> cada fase da<br> <em>menopausa</em></h1>
      <p class="lead hero__lead" data-hero-in>Da pré-menopausa à pós-menopausa, um plano alimentar que acompanha a mudança dos seus hormônios e também olha para a tireoide. Cansaço, calores e mudanças de peso podem ser menopausa, uma alteração da tireoide ou as duas coisas juntas.</p>
      <div class="hero__actions" data-hero-in>
        <a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Agendar pelo WhatsApp</a>
        <a class="btn btn--ghost" href="#ciclos">Descubra sua fase ${I.arrow}</a>
      </div>
      <p class="hero__note" data-hero-in>Atendimento online para todo o Brasil e presencial em Florianópolis e região.</p>
    </div>
    <div class="hero__visual" aria-hidden="true">
      <span class="hero__orbit"></span>
      <svg class="hero__ring" viewBox="0 0 400 400">
        <defs><path id="ringpath" d="M200 200 m-178 0 a178 178 0 1 1 356 0 a178 178 0 1 1 -356 0"/></defs>
        <g class="spin"><text><textPath href="#ringpath" textLength="1110">Pré-menopausa · Perimenopausa · Menopausa · Pós-menopausa · Tireoide ·</textPath></text></g>
      </svg>
      <div class="hero__emblem-wrap">
        <img class="hero__emblem" src="assets/img/emblem-3d.webp" alt="" width="520" height="630" fetchpriority="high">
      </div>
    </div>
  </div>
  ${dunes(26)}
  <a class="scroll-cue" href="#manifesto">Role<i></i></a>
</section>

<section class="manifesto" id="manifesto" aria-label="Nossa proposta">
  <div class="container manifesto__inner">
    <p class="eyebrow" data-reveal>Nossa proposta</p>
    <p class="manifesto__text" data-fill>Aqui você não encontra dietas genéricas. Encontra <em>escuta, respeito</em> e estratégias que cabem na sua realidade, com um olhar específico para cada fase da menopausa, para a sua tireoide e com a ciência como base de cada decisão.</p>
  </div>
</section>

<section class="cycles" id="ciclos" aria-labelledby="ciclos-title">
  <div class="container cycles__intro">
    <div class="section-head">
      <p class="eyebrow" data-reveal>As fases da menopausa</p>
      <h2 class="h2" id="ciclos-title" data-split>Seus hormônios mudam em <em>etapas</em>. Sua alimentação também.</h2>
    </div>
  </div>
  <div class="cycles__stage">
    <div class="container cycles__grid">
      <div class="wheel">
        <svg viewBox="-95 -12 790 624" role="img" aria-label="Roda das quatro fases da menopausa, cercada pelas alterações tireoidianas: Hashimoto e Graves">
          <defs>
            <path id="thy-top" d="${arc(300, 300, 244, -82, -8, 1)}"/>
            <path id="thy-bottom" d="${arc(300, 300, 256, 172, 98, 0)}"/>
          </defs>
          <circle class="wheel__dash wheel__dash--thyroid" cx="300" cy="300" r="268"/>
          <circle class="wheel__track" cx="300" cy="300" r="230"/>
          <circle class="wheel__progress" cx="300" cy="300" r="230" transform="rotate(-90 300 300)"/>
          <g class="wheel__thyroid"><text><textPath href="#thy-top" startOffset="50%" text-anchor="middle">Alterações tireoidianas</textPath></text><text><textPath href="#thy-bottom" startOffset="50%" text-anchor="middle">Hashimoto · Graves</textPath></text></g>
          ${PHASES.map((ph, i) => {
            const a = (-90 + i * (360 / PHASES.length)) * Math.PI / 180;
            const x = 300 + 230 * Math.cos(a), y = 300 + 230 * Math.sin(a);
            const lx = 300 + 272 * Math.cos(a), ly = 300 + 272 * Math.sin(a);
            const anchor = Math.abs(Math.cos(a)) < 0.1 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
            const dy = Math.abs(Math.cos(a)) < 0.1 ? (Math.sin(a) < 0 ? -14 : 30) : 6;
            const dx = anchor === "start" ? 12 : anchor === "end" ? -12 : 0;
            return `<g class="wheel__node" tabindex="0" role="button" aria-label="${ph.short}: ${ph.sub}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7"/><text x="${(lx + dx).toFixed(1)}" y="${(ly + dy).toFixed(1)}" text-anchor="${anchor}">${ph.short}</text></g>`;
          }).join("")}
        </svg>
        <div class="wheel__center">
          <img src="assets/img/emblem-copper.svg" alt="" loading="lazy">
          <p class="wheel__num"><span class="wheel__num-inner">01</span><small>de 0${PHASES.length}</small></p>
        </div>
      </div>
      <div class="phases">
        ${PHASES.map((ph, i) => `
        <article class="phase" aria-label="${ph.n}">
          <p class="phase__kicker">Fase 0${i + 1}</p>
          <h3 class="phase__title">${ph.n}</h3>
          <p class="phase__sub">${ph.sub}</p>
          <p class="phase__text">${ph.text}</p>
          <ul class="phase__tags">${ph.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          <a class="link-arrow phase__more" href="${ph.slug}/">Entenda a ${ph.n.toLowerCase()} ${I.arrow}</a>
        </article>`).join("")}
      </div>
    </div>
    <div class="cycles__progress" aria-hidden="true"><i></i></div>
  </div>
</section>

<section class="section section--sand" id="tireoide" aria-labelledby="thy-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Tireoide e menopausa</p>
      <h2 class="h2" id="thy-title" data-split>É menopausa ou é <em>tireoide</em>?</h2>
      <p class="muted" data-reveal>As alterações tireoidianas, como a doença de Hashimoto (hipotireoidismo) e a doença de Graves (hipertireoidismo), aparecem com frequência na mesma idade da transição para a menopausa, e os sintomas se misturam. Por isso, na NutriCiclos, a avaliação inclui sempre a tireoide.</p>
    </div>
    ${compareHtml()}
    <div class="thy-help">
      <article class="commit__item" data-reveal><h3>No hipotireoidismo</h3><p>Horário certo da levotiroxina, longe do café, do cálcio e do ferro. Selênio e iodo na medida certa, sem excesso. Ferro e vitamina D, que costumam estar baixos.</p><a class="link-arrow" href="tireoide/hipotireoidismo/">Hipotireoidismo e Hashimoto ${I.arrow}</a></article>
      <article class="commit__item" data-reveal><h3>No hipertireoidismo</h3><p>Proteína e energia suficientes para não perder músculo. Proteção dos ossos. Cuidado com excesso de iodo e com a cafeína, que piora as palpitações.</p><a class="link-arrow" href="tireoide/doenca-de-graves/">Hipertireoidismo e Graves ${I.arrow}</a></article>
    </div>
    <p class="notice" data-reveal>O cuidado nutricional funciona junto com o tratamento do endocrinologista e não substitui o acompanhamento médico.</p>
  </div>
</section>

<section class="voice" aria-labelledby="voice-title">
  <div class="voice__card">
    <span class="voice__glow" aria-hidden="true"></span>
    <div class="container voice__grid">
      <div class="voice__art" aria-hidden="true"><img src="assets/img/emblem-3d.webp" alt="" width="520" height="630" loading="lazy"></div>
      <div>
        <p class="eyebrow eyebrow--light" id="voice-title" data-reveal>Quem cuida de você</p>
        <blockquote class="voice__quote">
          <p data-split>Quando entrei no climatério e na menopausa, percebi, no meu próprio corpo, que a reposição hormonal sozinha não resolve tudo. E, por ter hipotireoidismo, aprendi a cuidar da menopausa e da tireoide ao mesmo tempo.</p>
          <footer class="voice__who" data-reveal><div><strong>${SITE.nutri}</strong><span>Nutricionista · ${SITE.crn} · Anos de experiência no atendimento ao público</span></div></footer>
        </blockquote>
        <a class="link-arrow" href="nutricionista/" data-reveal>Conheça a minha história ${I.arrow}</a>
      </div>
    </div>
  </div>
</section>

<section class="services" aria-labelledby="svc-title">
  <div class="services__pin section">
    <div class="services__track">
      <div class="services__intro">
        <p class="eyebrow" data-reveal>Serviços</p>
        <h2 class="h2" id="svc-title" data-split>Cuidado sob <em>medida</em> para você.</h2>
        <p class="muted" data-reveal>Cada atendimento é pensado de acordo com a sua fase, a sua tireoide e as suas necessidades. Online para todo o Brasil e presencial em Florianópolis e região.</p>
        <div data-reveal><a class="link-arrow" href="servicos/">Ver todos os serviços ${I.arrow}</a></div>
      </div>
      ${SERVICES.map((s, i) => `
      <a class="svc-card${i === SERVICES.length - 1 ? " svc-card--dark" : ""}" href="servicos/#servico-${i + 1}" data-reveal>
        <span class="svc-card__num">0${i + 1}</span>
        <span class="svc-card__icon">${I[s.icon]}</span>
        <h3 class="h3">${s.t}</h3>
        <p>${s.short}</p>
      </a>`).join("")}
    </div>
    <div class="services__bar" aria-hidden="true"><i></i></div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="how-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Como funciona</p>
      <h2 class="h2" id="how-title" data-split>Do primeiro contato ao <em>acompanhamento</em>.</h2>
    </div>
    ${stepsHtml()}
  </div>
</section>

<section class="section" aria-labelledby="faq-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Perguntas frequentes</p>
      <h2 class="h2" id="faq-title" data-split>Dúvidas comuns sobre menopausa e <em>tireoide</em>.</h2>
    </div>
    ${faqHtml()}
  </div>
</section>

${cta(r)}
`,
});

/* ---------- AS FASES ---------- */
pages.push({
  key: "fases",
  path: "fases/",
  file: "fases/index.html",
  title: "As fases da menopausa: da pré à pós-menopausa | NutriCiclos",
  description: "Pré-menopausa, perimenopausa, menopausa e pós-menopausa: o que muda em cada fase e como a alimentação acompanha seus hormônios.",
  jsonld: [crumbs([["Início", ""], ["As fases", "fases/"]])],
  body: (r) => `
${pageHero({ eyebrow: "As fases da menopausa", title: "Quatro fases, um mesmo <em>corpo</em> que muda.", lead: "Entender em que fase você está é o primeiro passo para comer de acordo com o que o seu corpo precisa agora." }, r)}

<section class="section section--paper" aria-labelledby="lista-fases">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Em que fase você está?</p>
      <h2 class="h2" id="lista-fases" data-split>Da pré-menopausa à <em>pós-menopausa</em>.</h2>
    </div>
    <ol class="phase-list">
      ${PHASES.map((ph, i) => `<li data-reveal><span class="phase-list__n">0${i + 1}</span><h3><a href="${r}${ph.slug}/">${ph.n}</a></h3><p><strong>${ph.age}.</strong> ${ph.text} <a class="link-arrow" href="${r}${ph.slug}/">Saiba mais ${I.arrow}</a></p></li>`).join("")}
    </ol>
    <p class="notice" data-reveal>Em todas as fases podem surgir alterações tireoidianas, como a doença de Hashimoto (hipotireoidismo) ou a doença de Graves (hipertireoidismo). <a href="${r}tireoide/">Entenda a relação entre tireoide e menopausa.</a></p>
  </div>
</section>

${cta(r)}
`,
});

/* ---------- PÁGINAS DE CADA FASE ---------- */
PHASES.forEach((ph, i) => {
  const prev = PHASES[i - 1], next = PHASES[i + 1];
  pages.push({
    key: "fases",
    path: ph.slug + "/",
    file: ph.slug + "/index.html",
    title: ph.title,
    description: ph.description,
    jsonld: [crumbs([["Início", ""], ["As fases", "fases/"], [ph.n, ph.slug + "/"]]), articleLd(ph.n, ph.description, ph.slug + "/")],
    body: (r) => `
${pageHero({ eyebrow: `Fase 0${i + 1} de 0${PHASES.length} · ${ph.age}`, title: ph.h1, lead: ph.text }, r)}
${articleBody(r, [
  { eyebrow: "O que acontece", title: "O que acontece no <em>corpo</em>", html: ph.what.map((t) => `<p data-reveal>${t}</p>`).join("") },
  { eyebrow: "Sinais", title: "Sinais <em>comuns</em>", html: `<ul class="checklist" data-reveal>${ph.signs.map((t) => `<li>${t}</li>`).join("")}</ul>` },
  { eyebrow: "Nutrição", title: "Foco da <em>alimentação</em>", html: `<ul class="checklist" data-reveal>${ph.focus.map((t) => `<li>${t}</li>`).join("")}</ul>` },
  { eyebrow: "Tireoide", title: "E a <em>tireoide</em>?", html: `<p data-reveal>${ph.thyroid}</p><p data-reveal><a class="link-arrow" href="${r}tireoide/">Tireoide e menopausa ${I.arrow}</a></p>` },
])}
<nav class="section section--paper pager" aria-label="Outras fases">
  <div class="container pager__inner">
    ${prev ? `<a class="pager__link" href="${r}${prev.slug}/"><small>Fase anterior</small>${prev.n}</a>` : `<span></span>`}
    ${next ? `<a class="pager__link pager__link--next" href="${r}${next.slug}/"><small>Próxima fase</small>${next.n}</a>` : `<a class="pager__link pager__link--next" href="${r}tireoide/"><small>Atravessa todas as fases</small>Tireoide</a>`}
  </div>
</nav>
${cta(r)}
`,
  });
});

/* ---------- TIREOIDE ---------- */
pages.push({
  key: "tireoide",
  path: "tireoide/",
  file: "tireoide/index.html",
  title: "Tireoide e menopausa: hipotireoidismo e hipertireoidismo | NutriCiclos",
  description: "Cansaço, calores e mudanças de peso podem ser tireoide. Entenda o hipotireoidismo (Hashimoto) e o hipertireoidismo (Graves) na menopausa.",
  jsonld: [crumbs([["Início", ""], ["Tireoide", "tireoide/"]]), articleLd("Tireoide e menopausa", "Hipotireoidismo (Hashimoto) e hipertireoidismo (Graves) na menopausa.", "tireoide/")],
  body: (r) => `
${pageHero({ eyebrow: "Alterações tireoidianas", title: "Menopausa ou <em>tireoide</em>?", lead: "As alterações da tireoide são bem mais frequentes em mulheres e aparecem justamente na idade da transição para a menopausa. Os sintomas se misturam, e o cuidado precisa olhar para os dois." }, r)}

<section class="section" aria-labelledby="duas">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>As mais comuns</p>
      <h2 class="h2" id="duas" data-split>Duas doenças autoimunes, dois <em>caminhos</em> opostos.</h2>
    </div>
    <div class="thy-help">
      <article class="commit__item" data-reveal><span class="svc-card__num">Hipo</span><h3>Hipotireoidismo e doença de Hashimoto</h3><p>A tireoide passa a produzir menos hormônio. A doença de Hashimoto é a causa mais comum de hipotireoidismo e fica mais frequente entre os 40 e os 60 anos. Cansaço, ganho de peso e queda de cabelo são facilmente atribuídos à menopausa.</p><a class="link-arrow" href="${r}tireoide/hipotireoidismo/">Saiba mais ${I.arrow}</a></article>
      <article class="commit__item" data-reveal><span class="svc-card__num">Hiper</span><h3>Hipertireoidismo e doença de Graves</h3><p>A tireoide passa a produzir hormônio demais. A doença de Graves é a causa mais comum de hipertireoidismo. Calor, suor, palpitações, ansiedade e insônia se confundem com os sintomas da perimenopausa.</p><a class="link-arrow" href="${r}tireoide/doenca-de-graves/">Saiba mais ${I.arrow}</a></article>
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="sintomas">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Comparação</p>
      <h2 class="h2" id="sintomas" data-split>Sintomas que se <em>confundem</em>.</h2>
    </div>
    ${compareHtml()}
    <p class="notice" data-reveal>Só os exames de sangue (como TSH e T4 livre) confirmam uma alteração da tireoide. Se você se reconheceu na tabela, converse com a sua médica.</p>
  </div>
</section>

<section class="pullquote" aria-label="Experiência pessoal">
  <span class="voice__glow" aria-hidden="true"></span>
  <div class="container">
    <p class="eyebrow eyebrow--light" data-reveal>Eu também vivo isso</p>
    <blockquote>
      <p data-split>Convivo com o hipotireoidismo. Sei o que é não saber se o cansaço vem da menopausa ou da tireoide.</p>
      <cite data-reveal>— ${SITE.nutri}</cite>
    </blockquote>
  </div>
</section>

${cta(r, { title: "Menopausa e tireoide, cuidadas <em>juntas</em>.", lead: "Atendimento online para todo o Brasil e presencial em Florianópolis e região." })}
`,
});

pages.push({
  key: "tireoide",
  path: "tireoide/hipotireoidismo/",
  file: "tireoide/hipotireoidismo/index.html",
  title: "Hipotireoidismo: sintomas e alimentação na menopausa | NutriCiclos",
  description: "Cansaço, ganho de peso e queda de cabelo podem ser hipotireoidismo. Entenda o Hashimoto, a levotiroxina e o que comer no dia a dia.",
  jsonld: [crumbs([["Início", ""], ["Tireoide", "tireoide/"], ["Hipotireoidismo", "tireoide/hipotireoidismo/"]]), articleLd("Hipotireoidismo e Hashimoto na menopausa", "Sintomas do hipotireoidismo, levotiroxina e alimentação na menopausa.", "tireoide/hipotireoidismo/")],
  body: (r) => `
${pageHero({ eyebrow: "Tireoide · Hipotireoidismo", title: "Hipotireoidismo e Hashimoto na <em>menopausa</em>.", lead: "Quando a tireoide funciona menos, o corpo inteiro desacelera. Na menopausa, esses sinais se somam aos do climatério e é fácil confundir um com o outro." }, r)}
${articleBody(r, [
  { eyebrow: "O que é", title: "O que é o <em>hipotireoidismo</em>", html: `<p data-reveal>No hipotireoidismo, a tireoide produz menos hormônio do que o corpo precisa. A causa mais comum é a doença de Hashimoto, uma tireoidite autoimune: o próprio sistema de defesa do corpo inflama a glândula aos poucos.</p><p data-reveal>Ela é bem mais frequente em mulheres e aparece com mais frequência entre os 40 e os 60 anos, a mesma idade da transição para a menopausa.</p>` },
  { eyebrow: "Sinais", title: "Sintomas mais <em>comuns</em>", html: `<ul class="checklist" data-reveal>${["Cansaço e sonolência", "Ganho de peso moderado e inchaço", "Sensação de frio", "Pele seca e queda de cabelo", "Intestino preso", "Desânimo e lentidão para pensar", "Menstruação mais intensa", "Colesterol mais alto"].map((t) => `<li>${t}</li>`).join("")}</ul>` },
  { eyebrow: "Nutrição", title: "Como a alimentação <em>ajuda</em>", html: `<ul class="checklist" data-reveal>${[
    "<strong>Levotiroxina no horário certo:</strong> em jejum, só com água, de 30 a 60 minutos antes do café da manhã.",
    "<strong>Cálcio e ferro longe do remédio:</strong> suplementos com cerca de 4 horas de distância, porque atrapalham a absorção.",
    "<strong>Selênio:</strong> uma a duas castanhas-do-pará por dia costumam bastar. Mais do que isso pode fazer mal.",
    "<strong>Iodo na medida:</strong> o sal iodado já supre a necessidade. Suplementos só com indicação.",
    "<strong>Ferro, vitamina D e vitamina B12:</strong> costumam estar baixos e merecem exames.",
    "<strong>Glúten:</strong> retirar só se houver doença celíaca, que é mais comum em quem tem Hashimoto e deve ser investigada.",
  ].map((t) => `<li>${t}</li>`).join("")}</ul>` },
  { eyebrow: "Peso", title: "Hipotireoidismo <em>engorda</em>?", html: `<p data-reveal>Sem tratamento, o hipotireoidismo pode causar um ganho de peso moderado, em boa parte por retenção de líquido. Com o tratamento em dia, o peso passa a depender dos mesmos fatores que pesam na menopausa: massa muscular, sono, estresse e alimentação. É nisso que o plano trabalha.</p>` },
])}
<section class="section section--paper"><div class="container"><p class="notice" data-reveal>O cuidado nutricional complementa, e não substitui, o acompanhamento com o endocrinologista. A dose da levotiroxina é sempre definida pelo médico.</p></div></section>
${cta(r, { title: "Hipotireoidismo e menopausa, cuidados <em>juntos</em>.", lead: "Atendimento online para todo o Brasil e presencial em Florianópolis e região." })}
`,
});

pages.push({
  key: "tireoide",
  path: "tireoide/doenca-de-graves/",
  file: "tireoide/doenca-de-graves/index.html",
  title: "Doença de Graves: alimentação no hipertireoidismo | NutriCiclos",
  description: "Palpitações, calor e perda de peso podem ser Graves. Veja como a alimentação protege músculos e ossos no hipertireoidismo.",
  jsonld: [crumbs([["Início", ""], ["Tireoide", "tireoide/"], ["Doença de Graves", "tireoide/doenca-de-graves/"]]), articleLd("Doença de Graves e hipertireoidismo", "Sintomas do hipertireoidismo e alimentação na doença de Graves.", "tireoide/doenca-de-graves/")],
  body: (r) => `
${pageHero({ eyebrow: "Tireoide · Hipertireoidismo", title: "Doença de Graves e <em>hipertireoidismo</em>.", lead: "Quando a tireoide funciona demais, o corpo acelera. Calor, suor e palpitações podem parecer perimenopausa, mas pedem outro cuidado." }, r)}
${articleBody(r, [
  { eyebrow: "O que é", title: "O que é a doença de <em>Graves</em>", html: `<p data-reveal>No hipertireoidismo, a tireoide produz hormônio demais e o metabolismo acelera. A causa mais comum é a doença de Graves, uma doença autoimune em que o sistema de defesa estimula a tireoide a trabalhar sem parar.</p><p data-reveal>Ela é mais frequente em mulheres e costuma aparecer entre os 30 e os 50 anos, podendo coincidir com a pré-menopausa e a perimenopausa.</p>` },
  { eyebrow: "Sinais", title: "Sintomas mais <em>comuns</em>", html: `<ul class="checklist" data-reveal>${["Calor e suor constantes", "Palpitações e coração acelerado", "Perda de peso mesmo comendo mais", "Ansiedade, irritação e tremor nas mãos", "Insônia", "Menstruação mais escassa", "Cabelo fino e queda", "Olhos mais saltados ou irritados, em alguns casos"].map((t) => `<li>${t}</li>`).join("")}</ul>` },
  { eyebrow: "Nutrição", title: "Como a alimentação <em>ajuda</em>", html: `<ul class="checklist" data-reveal>${[
    "<strong>Proteína e energia suficientes:</strong> o metabolismo acelerado consome músculo, e é preciso repor.",
    "<strong>Ossos protegidos:</strong> o hipertireoidismo acelera a perda óssea, que se soma à da menopausa. Cálcio e vitamina D entram no plano.",
    "<strong>Cuidado com o excesso de iodo:</strong> algas e alguns suplementos podem piorar o quadro.",
    "<strong>Menos cafeína:</strong> café, chás estimulantes e energéticos aumentam as palpitações.",
    "<strong>Depois do tratamento:</strong> com iodo radioativo ou cirurgia, a tireoide muitas vezes passa a funcionar menos, e o plano muda para evitar o ganho de peso.",
  ].map((t) => `<li>${t}</li>`).join("")}</ul>` },
])}
<section class="section section--paper"><div class="container"><p class="notice" data-reveal>O cuidado nutricional complementa, e não substitui, o acompanhamento com o endocrinologista, que define o tratamento.</p></div></section>
${cta(r, { title: "Hipertireoidismo e menopausa, cuidados <em>juntos</em>.", lead: "Atendimento online para todo o Brasil e presencial em Florianópolis e região." })}
`,
});

/* ---------- SOBRE ---------- */
pages.push({
  key: "sobre",
  path: "sobre/",
  file: "sobre/index.html",
  title: "Sobre nós | NutriCiclos — Clínica de Nutrição",
  description: "Conheça a NutriCiclos: nutrição para a mulher em cada fase da menopausa, com atenção à tireoide, unindo ciência atualizada e atendimento humanizado.",
  jsonld: [crumbs([["Início", ""], ["Sobre nós", "sobre/"]]), { "@context": "https://schema.org", "@type": "AboutPage", name: "Sobre a NutriCiclos", url: SITE.url + "/sobre/", about: ORG }],
  body: (r) => `
${pageHero({ eyebrow: "Sobre nós", title: "Nutrição que acompanha a mulher em cada <em>fase</em> da menopausa.", lead: "Mais do que um consultório: um espaço de cuidado contínuo, onde a nutrição se torna uma aliada da pré-menopausa à pós-menopausa." }, r)}

<section class="section" aria-labelledby="historia">
  <div class="container split">
    <div class="split__sticky">
      <p class="eyebrow" data-reveal>Nossa história</p>
      <h2 class="h2" id="historia" data-split style="margin-top:22px">Uma convicção que virou <em>cuidado</em>.</h2>
    </div>
    <div class="prose">
      <p class="intro" data-reveal>A <strong>NutriCiclos</strong> nasceu da convicção de que a nutrição deve <em>acompanhar os ciclos hormonais</em> da mulher.</p>
      <p data-reveal>Acreditamos que cada fase da menopausa (pré-menopausa, perimenopausa, menopausa e pós-menopausa) pede um olhar específico, cuidadoso e personalizado. E que a tireoide, tão presente nessa idade, precisa fazer parte desse olhar.</p>
      <p data-reveal>Nosso trabalho une conhecimento científico atualizado com um atendimento próximo e humanizado. Aqui, você não encontra dietas genéricas: encontra escuta, respeito e estratégias que cabem na sua realidade.</p>
      <p data-reveal>Mais do que um consultório, somos um espaço de cuidado contínuo, onde a nutrição se torna uma aliada em todas as etapas da sua jornada.</p>
    </div>
  </div>
</section>

<section class="section section--sand" aria-label="Missão e visão">
  <div class="container pillars">
    <article class="pillar" data-reveal>
      <span class="pillar__label">Missão</span>
      <p>Acompanhar e cuidar da saúde nutricional de cada mulher em todas as fases da menopausa, com atendimento humanizado, científico e personalizado.</p>
    </article>
    <article class="pillar pillar--dark" data-reveal>
      <span class="pillar__label">Visão</span>
      <p>Ser referência em nutrição na menopausa e nas alterações da tireoide, reconhecida pela excelência e pela humanidade no cuidado.</p>
    </article>
  </div>
</section>

<section class="section" aria-labelledby="valores">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>O que nos guia</p>
      <h2 class="h2" id="valores" data-split>Quatro princípios em <em>cada</em> atendimento.</h2>
    </div>
    <div class="values">
      <article class="value" data-reveal><span class="value__icon">${I.ear}</span><h3>Escuta</h3><p>Antes de qualquer plano, entender a sua história, a sua rotina e o que é importante para você.</p></article>
      <article class="value" data-reveal><span class="value__icon">${I.flask}</span><h3>Ciência</h3><p>Condutas baseadas em conhecimento científico atualizado — nada de modismos.</p></article>
      <article class="value" data-reveal><span class="value__icon">${I.heart}</span><h3>Respeito</h3><p>Sem julgamentos. Respeito à sua individualidade, à sua cultura alimentar e ao seu tempo.</p></article>
      <article class="value" data-reveal><span class="value__icon">${I.loop}</span><h3>Continuidade</h3><p>Um cuidado que acompanha as mudanças do corpo e da vida, fase após fase.</p></article>
    </div>
  </div>
</section>

<section class="section section--paper" aria-labelledby="fases">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>As fases da menopausa</p>
      <h2 class="h2" id="fases" data-split>Um olhar específico para <em>cada fase</em>.</h2>
    </div>
    <ol class="phase-list">
      ${PHASES.map((ph, i) => `<li data-reveal><span class="phase-list__n">0${i + 1}</span><h3><a href="${r}${ph.slug}/">${ph.n}</a></h3><p>${ph.text}</p></li>`).join("")}
    </ol>
  </div>
</section>

${cta(r)}
`,
});

/* ---------- NUTRICIONISTA ---------- */
pages.push({
  key: "nutricionista",
  path: "nutricionista/",
  file: "nutricionista/index.html",
  title: "Osana Melo, nutricionista em menopausa (CRN-10 6463) | NutriCiclos",
  description: "Nutricionista que vive a menopausa e o hipotireoidismo e descobriu que a reposição hormonal não resolve tudo. Conheça a história da Osana.",
  jsonld: [crumbs([["Início", ""], ["A Nutricionista", "nutricionista/"]]), { "@context": "https://schema.org", "@type": "ProfilePage", url: SITE.url + "/nutricionista/", mainEntity: PERSON }],
  body: (r) => `
${pageHero({ eyebrow: "A Nutricionista", title: "Seja muito bem-vinda. Eu sou a <em>Osana Melo</em>.", lead: `Nutricionista responsável pela NutriCiclos · ${SITE.crn}` }, r)}

<section class="section" aria-labelledby="trajetoria">
  <div class="container split">
    <div class="split__sticky" data-reveal>
      <figure class="portrait" style="margin:0">
        <div class="portrait__fallback"><img src="${r}assets/img/emblem-3d.webp" alt="" width="520" height="630" loading="lazy"></div>
        ${HAS_PHOTO ? `<img class="portrait__photo" src="${r}assets/img/osana.jpg" alt="Osana Melo, nutricionista da NutriCiclos" loading="lazy">` : ""}
        <figcaption class="portrait__badge"><div><strong>${SITE.nutri}</strong><span>Nutricionista</span></div><em>${SITE.crn}</em></figcaption>
      </figure>
    </div>
    <div class="prose">
      <p class="eyebrow" data-reveal>Minha história</p>
      <h2 class="h2" id="trajetoria" data-split style="margin:22px 0 40px">Eu caminho pela mesma <em>estrada</em> que você.</h2>
      <p class="intro" data-reveal>Antes de ser a nutricionista que vai guiar as suas escolhas alimentares, eu sou uma mulher que caminha exatamente pela <em>mesma estrada</em> que você.</p>
      <p data-reveal>Quando entrei no climatério e na menopausa, descobri que as teorias dos consultórios e dos artigos científicos são bem diferentes da vida real. Eu percebi, na minha própria rotina e no meu próprio corpo, que a terapia de reposição hormonal sozinha não resolve tudo. Ela até pode ser uma aliada valiosa para muitas de nós, mas não é uma pílula mágica.</p>
      <p data-reveal>Foi vivendo essa fase que eu vi a gordura abdominal chegar de mansinho, aquela que se instala na região da cintura, que insiste em ficar e que parece ignorar as estratégias que sempre funcionaram a vida inteira. Eu senti o cansaço que flutua, as mudanças de humor e os pequenos sinais de um metabolismo que ganhou um ritmo completamente novo.</p>
      <p data-reveal>E eu tenho uma camada a mais nessa história: convivo com o hipotireoidismo. Sei o que é não saber se o cansaço vem da menopausa ou da tireoide, e o que é ajustar o remédio, o café da manhã e o cálcio para que um cuidado não atrapalhe o outro.</p>
      <p data-reveal>Os desafios da menopausa são reais, profundos e, muitas vezes, solitários. Mas a maior lição que essa fase me trouxe, tanto como mulher quanto como profissional de saúde, é que não existe uma solução única. Para viver bem nesta etapa, é necessária a junção de vários cuidados integrados. Precisamos alinhar o estímulo hormonal correto, o manejo do estresse, o cuidado com o sono e, como base de sustentação para tudo isso, uma nutrição estratégica e humanizada.</p>
      <p data-reveal>A alimentação não serve apenas para brigar com a balança; ela fornece a matéria-prima exata que o seu corpo precisa para apoiar o equilíbrio dos hormônios, proteger seus ossos, blindar o seu coração e devolver a energia que você achou que tinha perdido.</p>
      <p data-reveal>Eu não vou te prescrever uma dieta de gaveta ou restrições impossíveis. Eu vou te ouvir, te acolher e desenhar uma estratégia que cabe na sua vida real, porque eu entendo perfeitamente o que você está passando. <strong>Vamos caminhar juntas?</strong></p>
      <p data-reveal style="margin-top:36px"><a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Fale comigo pelo WhatsApp</a></p>
    </div>
  </div>
</section>

<section class="section section--sand" aria-labelledby="formacao">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Formação e experiência</p>
      <h2 class="h2" id="formacao" data-split>Experiência de vida e <em>experiência</em> profissional.</h2>
    </div>
    <div class="commit">
      <article class="commit__item" data-reveal><span class="svc-card__num">Formação</span><h3>Nutrição</h3><p>Graduada pela Universidade Nove de Julho (UNINOVE), em São Paulo.</p></article>
      <article class="commit__item" data-reveal><span class="svc-card__num">Experiência</span><h3>Serviço público</h3><p>Anos de experiência no atendimento ao público.</p></article>
      <article class="commit__item" data-reveal><span class="svc-card__num">Registro</span><h3>${SITE.crn}</h3><p>Responsável técnica da NutriCiclos.</p></article>
    </div>
  </div>
</section>

<section class="pullquote" aria-label="Depoimento pessoal">
  <span class="voice__glow" aria-hidden="true"></span>
  <div class="container">
    <p class="eyebrow eyebrow--light" data-reveal>Uma experiência pessoal</p>
    <blockquote>
      <p data-split>A reposição hormonal até pode ser uma aliada valiosa, mas não é uma pílula mágica.</p>
      <cite data-reveal>— ${SITE.nutri}</cite>
    </blockquote>
  </div>
</section>

<section class="section" aria-labelledby="compromisso">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Meu compromisso</p>
      <h2 class="h2" id="compromisso" data-split>Um atendimento que <em>cabe</em> na sua vida.</h2>
    </div>
    <div class="commit">
      <article class="commit__item" data-reveal><span class="svc-card__num">01</span><h3>Próximo</h3><p>Você é ouvida de verdade. O plano nasce da sua história, e não de um modelo pronto.</p></article>
      <article class="commit__item" data-reveal><span class="svc-card__num">02</span><h3>Sem julgamentos</h3><p>Um espaço seguro para falar da sua relação com a comida, do jeito que ela é.</p></article>
      <article class="commit__item" data-reveal><span class="svc-card__num">03</span><h3>Realista</h3><p>Estratégias possíveis, que realmente caibam na sua rotina e se sustentem com o tempo.</p></article>
    </div>
  </div>
</section>

${cta(r, { title: "Vamos caminhar <em>juntas</em>?", lead: "Atendimento online para todo o Brasil e presencial em Florianópolis e região." })}
`,
});

/* ---------- SERVIÇOS ---------- */
pages.push({
  key: "servicos",
  path: "servicos/",
  file: "servicos/index.html",
  title: "Serviços: nutrição na menopausa e no hipotireoidismo | NutriCiclos",
  description: "Nutrição nas fases da menopausa, no hipotireoidismo e nas alterações da tireoide, bioimpedância, emagrecimento e acompanhamento com Ozempic® e Mounjaro®.",
  jsonld: [
    crumbs([["Início", ""], ["Serviços", "servicos/"]]),
    {
      "@context": "https://schema.org", "@type": "ItemList", name: "Serviços da NutriCiclos",
      itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Service", name: s.t, description: s.s, provider: { "@id": SITE.url + "/#clinica" }, url: SITE.url + "/servicos/#servico-" + (i + 1) } })),
    },
  ],
  body: (r) => `
${pageHero({ eyebrow: "Serviços", title: "Cuidado nutricional para <em>cada fase</em> da menopausa.", lead: "Cada atendimento é pensado de acordo com a sua fase, a sua tireoide e as suas necessidades. Online para todo o Brasil e presencial em Florianópolis e região." }, r)}

<section class="section" aria-labelledby="lista-servicos">
  <div class="container split">
    <div class="split__sticky">
      <p class="eyebrow" data-reveal>Oferecemos</p>
      <h2 class="h2" id="lista-servicos" data-split style="margin:22px 0 28px">Seis caminhos, um mesmo <em>cuidado</em>.</h2>
      <p class="muted" data-reveal>Todos os atendimentos começam por uma escuta cuidadosa e por uma avaliação completa — o plano é sempre construído com você.</p>
      <div data-reveal style="margin-top:28px"><a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Agendar consulta</a></div>
    </div>
    <ol class="svc-list">
      ${SERVICES.map((s, i) => `
      <li class="svc-row" id="servico-${i + 1}" data-reveal>
        <span class="svc-row__icon">${I[s.icon]}</span>
        <div>
          <span class="svc-row__n">0${i + 1}</span>
          <h3>${s.t}</h3>
          <p>${s.s}</p>
          <ul>${s.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
          ${i === 5 ? `<p class="notice" style="margin-top:22px">O acompanhamento nutricional complementa — e não substitui — o acompanhamento médico. A prescrição e o ajuste de medicamentos são feitos pelo seu médico.</p>` : ""}
        </div>
      </li>`).join("")}
    </ol>
  </div>
</section>

<section class="section section--paper" aria-labelledby="how-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Como funciona</p>
      <h2 class="h2" id="how-title" data-split>Do primeiro contato ao <em>acompanhamento</em>.</h2>
    </div>
    ${stepsHtml()}
  </div>
</section>

${cta(r)}
`,
});

/* ---------- CONTATO ---------- */
pages.push({
  key: "contato",
  path: "contato/",
  file: "contato/index.html",
  title: "Contato e agendamento | NutriCiclos — Clínica de Nutrição",
  description: "Agende sua consulta com a nutricionista Osana Melo (CRN-10 6463) pelo WhatsApp (11) 98546-9311 ou por e-mail. Online para todo o Brasil e presencial em Florianópolis.",
  jsonld: [crumbs([["Início", ""], ["Contato", "contato/"]]), { "@context": "https://schema.org", "@type": "ContactPage", url: SITE.url + "/contato/", about: ORG }],
  body: (r) => `
${pageHero({ eyebrow: "Contato", title: "Agende sua <em>consulta</em>.", lead: "Atendimento online para todo o Brasil e presencial em Florianópolis e região." }, r)}

<section class="section" aria-label="Canais de atendimento">
  <div class="container contact-grid">
    <a class="contact-card contact-card--dark" href="${WA}" target="_blank" rel="noopener" data-reveal>
      <span class="contact-card__icon">${I.chat}</span>
      <span class="contact-card__label">WhatsApp</span>
      <span class="contact-card__value">${SITE.whatsappLabel}</span>
      <span class="contact-card__go">Fale diretamente comigo ${I.arrow}</span>
    </a>
    <a class="contact-card" href="mailto:${SITE.email}" data-reveal>
      <span class="contact-card__icon">${I.mail}</span>
      <span class="contact-card__label">E-mail</span>
      <span class="contact-card__value">${SITE.email}</span>
      <span class="contact-card__go">Enviar mensagem ${I.arrow}</span>
    </a>
  </div>
</section>

<section class="section section--sand" aria-labelledby="mensagem">
  <div class="container composer">
    <div>
      <p class="eyebrow" data-reveal>Mensagem rápida</p>
      <h2 class="h2" id="mensagem" data-split style="margin:22px 0 24px">Conte um pouco sobre <em>você</em>.</h2>
      <p class="muted" data-reveal>Preencha os campos e sua mensagem abre pronta no WhatsApp (ou no seu e-mail). Nenhum dado fica guardado no site.</p>
    </div>
    <form class="form" id="composer" data-wa="${SITE.whatsapp}" data-mail="${SITE.email}" data-reveal>
      <div class="form__row">
        <div class="field"><label for="nome">Seu nome</label><input id="nome" name="nome" type="text" autocomplete="name" placeholder="Como posso te chamar?"></div>
        <div class="field"><label for="motivo">Assunto</label>
          <select id="motivo" name="motivo">
            <option value="">Escolha uma opção</option>
            ${SERVICES.map((s) => `<option>${s.t.replace(" com medicamentos para emagrecimento", " com medicamentos")}</option>`).join("")}
            <option>Outro assunto</option>
          </select>
        </div>
      </div>
      <div class="field"><label for="mensagem-txt">Mensagem (opcional)</label><textarea id="mensagem-txt" name="mensagem" placeholder="Conte brevemente seu objetivo ou sua dúvida"></textarea></div>
      <div class="form__actions">
        <button class="btn btn--copper" type="submit">${I.chat} Enviar pelo WhatsApp</button>
        <button class="btn btn--ghost" type="button" data-mail-btn>${I.mail} Enviar por e-mail</button>
      </div>
      <p class="form__hint">${SITE.nutri} · Nutricionista · ${SITE.crn}</p>
    </form>
  </div>
</section>

<section class="section section--paper" aria-labelledby="how-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Como funciona</p>
      <h2 class="h2" id="how-title" data-split>Do primeiro contato ao <em>acompanhamento</em>.</h2>
    </div>
    ${stepsHtml()}
  </div>
</section>
`,
});

/* ---------- 404 ---------- */
pages.push({
  key: "404",
  path: "",
  file: "404.html",
  abs: true,
  noindex: true,
  title: "Página não encontrada | NutriCiclos",
  description: "A página que você procura não existe ou mudou de endereço.",
  body: () => `
<section class="notfound">
  <div class="container">
    <p class="eyebrow eyebrow--center" data-hero-in>Página não encontrada</p>
    <h1 class="display" data-hero-title>4<em>0</em>4</h1>
    <p class="lead" data-hero-in style="margin:10px auto 36px">Parece que esse caminho se perdeu nas dunas. Vamos voltar ao início?</p>
    <div data-hero-in><a class="btn btn--copper" href="/">Voltar ao início ${I.arrow}</a></div>
  </div>
  ${dunes(24)}
</section>`,
});

/* ======================= ESCRITA ======================= */
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, f.name), d = path.join(dst, f.name);
    f.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
copyDir(path.join(__dirname, "assets"), path.join(OUT, "assets"));
copyDir(path.join(__dirname, "public"), OUT);

for (const p of pages) {
  let html = page(p);
  // 404 é servido em qualquer profundidade: usa caminhos absolutos
  if (p.abs) html = html.replace(/(href|src)="(?!https?:|mailto:|#|\/)([^"]*)"/g, (m, a, v) => `${a}="/${v === "./" ? "" : v}"`);
  const f = path.join(OUT, p.file);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
}

// minificação
import("esbuild").then(async ({ build }) => {
  for (const f of ["assets/js/main.js", "assets/css/style.css"]) {
    await build({ entryPoints: [path.join(OUT, f)], outfile: path.join(OUT, f), allowOverwrite: true, minify: true, target: ["es2017", "safari13"], logLevel: "error" });
  }
  console.log("minificado");
});

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${SITE.url}/${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path ? "0.8" : "1.0"}</priority></url>`).join("\n")}
</urlset>
`);
fs.writeFileSync(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
console.log("ok →", OUT, pages.length, "páginas");
