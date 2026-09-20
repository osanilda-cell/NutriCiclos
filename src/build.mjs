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
  { key: "sobre", href: "sobre/", label: "Sobre nós" },
  { key: "nutricionista", href: "nutricionista/", label: "A Nutricionista" },
  { key: "servicos", href: "servicos/", label: "Serviços" },
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
<meta property="og:image:alt" content="NutriCiclos — Nutrição em cada ciclo da vida">
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
        <p>Clínica de Nutrição. Cuidado nutricional humanizado, personalizado e baseado em ciência — em cada ciclo da vida.</p>
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
        <p class="footer__big">Nutrição em cada ciclo da vida.</p>
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

function cta(r, { title = "Cada fase da vida merece um cuidado <em>nutricional</em> específico.", lead = "Conte com a NutriCiclos para caminhar ao seu lado." } = {}) {
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
  { n: "Infância", short: "Infância", sub: "A base para a vida toda", text: "Crescimento, desenvolvimento e formação do paladar. É na infância que se constroem os hábitos alimentares que tendem a acompanhar a pessoa pelo resto da vida.", tags: ["Introdução alimentar", "Seletividade", "Lancheira saudável"] },
  { n: "Adolescência", short: "Adolescência", sub: "O estirão do crescimento", text: "O pico de crescimento aumenta a necessidade de energia, proteína, cálcio e ferro — e é também quando se acumula boa parte da massa óssea que vai sustentar a vida adulta.", tags: ["Crescimento", "Massa óssea", "Esporte", "Relação com a comida"] },
  { n: "Gestação e amamentação", short: "Gestação", sub: "Nutrindo duas vidas", text: "Mais demanda de ácido fólico, ferro, iodo e proteína, ganho de peso adequado e atenção à segurança dos alimentos — da gestação à amamentação.", tags: ["Pré-natal", "Ganho de peso", "Amamentação"] },
  { n: "Vida adulta", short: "Vida adulta", sub: "Rotina, prevenção e desempenho", text: "Composição corporal, energia para o dia a dia e prevenção de doenças crônicas, com estratégias que cabem na sua agenda — e não o contrário.", tags: ["Composição corporal", "Prevenção", "Rotina"] },
  { n: "Climatério e menopausa", short: "Menopausa", sub: "Uma nova fisiologia", text: "A queda do estrogênio muda a distribuição de gordura, acelera a perda de massa óssea e muscular e altera o risco cardiovascular. A alimentação é parte central do cuidado nessa fase.", tags: ["Massa óssea", "Massa muscular", "Saúde cardiovascular"] },
  { n: "Envelhecimento", short: "Maturidade", sub: "Força e autonomia", text: "Preservar a massa muscular, garantir proteína e hidratação adequadas e manter o prazer de comer — para envelhecer com saúde, força e independência.", tags: ["Massa muscular", "Hidratação", "Autonomia"] },
];

const SERVICES = [
  { icon: "bio", short: "Anamnese completa e composição corporal por bioimpedância: um ponto de partida preciso para o seu plano.", t: "Avaliação nutricional com bioimpedância", s: "Anamnese completa — história, hábitos, rotina e exames — e análise da composição corporal por bioimpedância: massa magra, gordura e água corporal. Um ponto de partida preciso para o seu plano.", tags: ["Anamnese", "Composição corporal", "Evolução ao longo do tempo"] },
  { icon: "cycle", short: "Infância, gestação, climatério, menopausa e envelhecimento — cada fase com as suas necessidades.", t: "Nutrição por fases da vida", s: "Infância, gestação, climatério, menopausa e envelhecimento: cada fase tem necessidades próprias, e o plano alimentar acompanha essas mudanças.", tags: ["Infância", "Gestação", "Climatério", "Menopausa", "Envelhecimento"] },
  { icon: "leaf", short: "Sem dietas genéricas: mudanças consistentes, que preservam a massa muscular e cabem na sua rotina.", t: "Emagrecimento saudável e reeducação alimentar", s: "Sem dietas genéricas nem restrições impossíveis: mudanças consistentes, que preservam a massa muscular e cabem na sua rotina — para resultados que se sustentam.", tags: ["Sem dietas genéricas", "Hábitos", "Constância"] },
  { icon: "sport", short: "Alimentação ajustada ao seu treino e aos seus objetivos — energia, desempenho e recuperação.", t: "Nutrição esportiva", s: "Alimentação ajustada ao seu treino e aos seus objetivos, do praticante recreativo ao atleta: energia para treinar, desempenho e recuperação.", tags: ["Desempenho", "Recuperação", "Hipertrofia"] },
  { icon: "woman", short: "Cuidado nutricional em cada etapa hormonal da vida da mulher, com escuta e sem julgamentos.", t: "Saúde da mulher", s: "Cuidado nutricional em cada etapa hormonal da vida da mulher — ciclo menstrual, gestação, climatério e menopausa — com escuta e sem julgamentos.", tags: ["Ciclo menstrual", "Gestação", "Menopausa"] },
  { icon: "pen", short: "Durante e após o uso de semaglutida (Ozempic®) e tirzepatida (Mounjaro®), preservando a massa muscular.", t: "Acompanhamento com medicamentos para emagrecimento", s: "Acompanhamento nutricional durante e após o uso de medicamentos como semaglutida (Ozempic®) e tirzepatida (Mounjaro®): garantir proteína e nutrientes com o apetite reduzido, preservar a massa muscular e manter os resultados depois da suspensão.", tags: ["Durante o uso", "Após a suspensão", "Preservar massa muscular"] },
];

const STEPS = [
  { t: "Primeiro contato", s: "Você fala comigo pelo WhatsApp ou por e-mail e escolhemos juntos o melhor horário." },
  { t: "Consulta e avaliação", s: "Escuta da sua história, rotina e objetivos, com avaliação da composição corporal por bioimpedância." },
  { t: "Plano personalizado", s: "Estratégias alimentares realistas, pensadas para a sua fase da vida e para o seu dia a dia." },
  { t: "Acompanhamento", s: "Retornos para ajustar o plano, acompanhar sua evolução e seguir ao seu lado." },
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
  description: "Clínica de nutrição com atendimento humanizado, personalizado e baseado em ciência para todas as fases da vida.",
  email: SITE.email,
  telephone: "+55 11 98546-9311",
  medicalSpecialty: "DietNutrition",
  slogan: "Nutrição em cada ciclo da vida",
  founder: { "@id": SITE.url + "/nutricionista/#osana" },
  knowsAbout: ["Nutrição clínica", "Bioimpedância", "Nutrição na menopausa", "Nutrição esportiva", "Nutrição materno-infantil", "Emagrecimento"],
};
const PERSON = {
  "@type": "Person",
  "@id": SITE.url + "/nutricionista/#osana",
  name: SITE.nutri,
  jobTitle: "Nutricionista",
  identifier: SITE.crn,
  worksFor: { "@id": SITE.url + "/#clinica" },
  url: SITE.url + "/nutricionista/",
};
const crumbs = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it[0], item: SITE.url + "/" + it[1] })),
});

/* ======================= PÁGINAS ======================= */
const pages = [];

/* ---------- INÍCIO ---------- */
pages.push({
  key: "inicio",
  path: "",
  file: "index.html",
  title: "NutriCiclos | Clínica de Nutrição em cada ciclo da vida",
  ogTitle: "NutriCiclos — Nutrição em cada ciclo da vida",
  description: "Nutrição humanizada e baseada em ciência para cada fase da vida: gestação, menopausa, emagrecimento, nutrição esportiva e bioimpedância. Agende sua consulta.",
  preload: `<link rel="preload" href="assets/img/emblem-3d.webp" as="image" type="image/webp" fetchpriority="high">`,
  jsonld: [{ "@context": "https://schema.org", "@graph": [ORG, PERSON, { "@type": "WebSite", "@id": SITE.url + "/#site", url: SITE.url + "/", name: SITE.fullName, inLanguage: "pt-BR", publisher: { "@id": SITE.url + "/#clinica" } }] }],
  body: (r) => `
<section class="hero" aria-labelledby="hero-title">
  <div class="container hero__grid">
    <div class="hero__copy">
      <p class="eyebrow" data-hero-in>Clínica de Nutrição<span class="hide-sm">· ${SITE.nutri}</span></p>
      <h1 class="display hero__title" id="hero-title" data-hero-title>Nutrição<br> em cada <em>ciclo</em><br> da vida</h1>
      <p class="lead hero__lead" data-hero-in>A NutriCiclos nasceu para cuidar da sua saúde nutricional em todas as fases da vida — com atendimento humanizado, personalizado e baseado em ciência.</p>
      <div class="hero__actions" data-hero-in>
        <a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Agendar pelo WhatsApp</a>
        <a class="btn btn--ghost" href="servicos/">Conheça os serviços ${I.arrow}</a>
      </div>
    </div>
    <div class="hero__visual" aria-hidden="true">
      <span class="hero__orbit"></span>
      <svg class="hero__ring" viewBox="0 0 400 400">
        <defs><path id="ringpath" d="M200 200 m-178 0 a178 178 0 1 1 356 0 a178 178 0 1 1 -356 0"/></defs>
        <g class="spin"><text><textPath href="#ringpath" textLength="1110">Infância · Adolescência · Gestação · Vida adulta · Menopausa · Maturidade ·</textPath></text></g>
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
    <p class="manifesto__text" data-fill>Aqui você não encontra dietas genéricas. Encontra <em>escuta, respeito</em> e estratégias que cabem na sua realidade — com um olhar específico para cada fase da vida e a ciência como base de cada decisão.</p>
  </div>
</section>

<section class="cycles" id="ciclos" aria-labelledby="ciclos-title">
  <div class="container cycles__intro">
    <div class="section-head">
      <p class="eyebrow" data-reveal>Os ciclos da vida</p>
      <h2 class="h2" id="ciclos-title" data-split>Cada fase pede um <em>olhar</em> diferente.</h2>
    </div>
  </div>
  <div class="cycles__stage">
    <div class="container cycles__grid">
      <div class="wheel">
        <svg viewBox="-95 -12 790 624" role="img" aria-label="Roda das fases da vida">
          <circle class="wheel__dash" cx="300" cy="300" r="268"/>
          <circle class="wheel__track" cx="300" cy="300" r="230"/>
          <circle class="wheel__progress" cx="300" cy="300" r="230" transform="rotate(-90 300 300)"/>
          ${PHASES.map((ph, i) => {
            const a = (-90 + i * 60) * Math.PI / 180;
            const x = 300 + 230 * Math.cos(a), y = 300 + 230 * Math.sin(a);
            const lx = 300 + 272 * Math.cos(a), ly = 300 + 272 * Math.sin(a);
            const anchor = Math.abs(Math.cos(a)) < 0.1 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
            const dy = Math.abs(Math.cos(a)) < 0.1 ? (Math.sin(a) < 0 ? -14 : 30) : 6;
            const dx = anchor === "start" ? 12 : anchor === "end" ? -12 : 0;
            return `<g class="wheel__node" tabindex="0" role="button" aria-label="${ph.short}: ${ph.n}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7"/><text x="${(lx + dx).toFixed(1)}" y="${(ly + dy).toFixed(1)}" text-anchor="${anchor}">${ph.short}</text></g>`;
          }).join("")}
        </svg>
        <div class="wheel__center">
          <img src="assets/img/emblem-copper.svg" alt="" loading="lazy">
          <p class="wheel__num"><span class="wheel__num-inner">01</span><small>de 06</small></p>
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
        </article>`).join("")}
      </div>
    </div>
    <div class="cycles__progress" aria-hidden="true"><i></i></div>
  </div>
</section>

<section class="voice" aria-labelledby="voice-title">
  <div class="voice__card">
    <span class="voice__glow" aria-hidden="true"></span>
    <div class="container voice__grid">
      <div class="voice__art" aria-hidden="true"><img src="assets/img/emblem-3d.webp" alt="" width="520" height="630" loading="lazy"></div>
      <div>
        <p class="eyebrow eyebrow--light" id="voice-title" data-reveal>A nutricionista</p>
        <blockquote class="voice__quote">
          <p data-split>Quando entrei na menopausa, descobri que a reposição hormonal não resolve tudo. É preciso alinhar outras ferramentas — entre elas, uma alimentação adequada para essa etapa da vida.</p>
          <footer class="voice__who" data-reveal><div><strong>${SITE.nutri}</strong><span>Nutricionista · ${SITE.crn}</span></div></footer>
        </blockquote>
        <a class="link-arrow" href="nutricionista/" data-reveal>Conheça a nutricionista ${I.arrow}</a>
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
        <p class="muted" data-reveal>Cada atendimento é pensado de acordo com a fase da vida e as necessidades individuais de quem nos procura.</p>
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

${cta(r)}
`,
});

/* ---------- SOBRE ---------- */
pages.push({
  key: "sobre",
  path: "sobre/",
  file: "sobre/index.html",
  title: "Sobre nós | NutriCiclos — Clínica de Nutrição",
  description: "Conheça a NutriCiclos: nutrição que acompanha a vida em todos os seus ciclos, unindo ciência atualizada e atendimento próximo e humanizado.",
  jsonld: [crumbs([["Início", ""], ["Sobre nós", "sobre/"]]), { "@context": "https://schema.org", "@type": "AboutPage", name: "Sobre a NutriCiclos", url: SITE.url + "/sobre/", about: ORG }],
  body: (r) => `
${pageHero({ eyebrow: "Sobre nós", title: "Nutrição que acompanha a <em>vida</em> em todos os seus ciclos.", lead: "Mais do que um consultório: um espaço de cuidado contínuo, onde a nutrição se torna uma aliada em todas as etapas da sua jornada." }, r)}

<section class="section" aria-labelledby="historia">
  <div class="container split">
    <div class="split__sticky">
      <p class="eyebrow" data-reveal>Nossa história</p>
      <h2 class="h2" id="historia" data-split style="margin-top:22px">Uma convicção que virou <em>cuidado</em>.</h2>
    </div>
    <div class="prose">
      <p class="intro" data-reveal>A <strong>NutriCiclos</strong> nasceu da convicção de que a nutrição deve <em>acompanhar a vida</em> em todos os seus ciclos.</p>
      <p data-reveal>Acreditamos que cada fase — infância, adolescência, gestação, vida adulta, climatério e envelhecimento — pede um olhar específico, cuidadoso e personalizado.</p>
      <p data-reveal>Nosso trabalho une conhecimento científico atualizado com um atendimento próximo e humanizado. Aqui, você não encontra dietas genéricas: encontra escuta, respeito e estratégias que cabem na sua realidade.</p>
      <p data-reveal>Mais do que um consultório, somos um espaço de cuidado contínuo, onde a nutrição se torna uma aliada em todas as etapas da sua jornada.</p>
    </div>
  </div>
</section>

<section class="section section--sand" aria-label="Missão e visão">
  <div class="container pillars">
    <article class="pillar" data-reveal>
      <span class="pillar__label">Missão</span>
      <p>Acompanhar e cuidar da saúde nutricional de cada pessoa em todas as fases da vida, com atendimento humanizado, científico e personalizado.</p>
    </article>
    <article class="pillar pillar--dark" data-reveal>
      <span class="pillar__label">Visão</span>
      <p>Ser referência em nutrição integrada e humanizada, reconhecida pela excelência no cuidado em todas as etapas da vida.</p>
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
      <p class="eyebrow" data-reveal>Os ciclos</p>
      <h2 class="h2" id="fases" data-split>Um olhar específico para <em>cada fase</em>.</h2>
    </div>
    <ol class="phase-list">
      ${PHASES.map((ph, i) => `<li data-reveal><span class="phase-list__n">0${i + 1}</span><h3>${ph.n}</h3><p>${ph.text}</p></li>`).join("")}
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
  title: "Osana Melo, Nutricionista (CRN-10 6463) | NutriCiclos",
  description: "Conheça Osana Melo, nutricionista responsável pela NutriCiclos: cuidado integral, com ciência, escuta e empatia, respeitando os ciclos naturais da vida.",
  jsonld: [crumbs([["Início", ""], ["A Nutricionista", "nutricionista/"]]), { "@context": "https://schema.org", "@type": "ProfilePage", url: SITE.url + "/nutricionista/", mainEntity: PERSON }],
  body: (r) => `
${pageHero({ eyebrow: "A Nutricionista", title: "Olá! Eu sou a <em>Osana Melo</em>.", lead: `Nutricionista responsável pela NutriCiclos · ${SITE.crn}` }, r)}

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
      <p class="eyebrow" data-reveal>Conheça a nutricionista</p>
      <h2 class="h2" id="trajetoria" data-split style="margin:22px 0 40px">Uma trajetória guiada pelo <em>cuidado</em>.</h2>
      <p class="intro" data-reveal>Minha trajetória é guiada pelo propósito de cuidar das pessoas de forma integral, respeitando os <em>ciclos naturais da vida</em> e a individualidade de cada paciente.</p>
      <p data-reveal>Acredito que a nutrição é uma ferramenta poderosa de cuidado e transformação — quando feita com ciência, escuta e empatia.</p>
      <p data-reveal>Na NutriCiclos, meu compromisso é oferecer um atendimento próximo, sem julgamentos e com estratégias realistas, que realmente caibam na sua rotina.</p>
      <p data-reveal>Será um prazer caminhar com você em cada fase da sua vida.</p>
      <p data-reveal style="margin-top:36px"><a class="btn btn--copper" href="${WA}" target="_blank" rel="noopener">${I.chat} Fale comigo pelo WhatsApp</a></p>
    </div>
  </div>
</section>

<section class="pullquote" aria-label="Depoimento pessoal">
  <span class="voice__glow" aria-hidden="true"></span>
  <div class="container">
    <p class="eyebrow eyebrow--light" data-reveal>Uma experiência pessoal</p>
    <blockquote>
      <p data-split>Quando entrei na menopausa, descobri que a reposição hormonal não resolve tudo. É preciso alinhar outras ferramentas — entre elas, uma alimentação adequada para essa etapa da vida.</p>
      <cite data-reveal>— ${SITE.nutri}</cite>
    </blockquote>
  </div>
</section>

<section class="section section--sand" aria-labelledby="compromisso">
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

${cta(r, { title: "Será um prazer caminhar com <em>você</em>.", lead: "Em cada fase da sua vida." })}
`,
});

/* ---------- SERVIÇOS ---------- */
pages.push({
  key: "servicos",
  path: "servicos/",
  file: "servicos/index.html",
  title: "Serviços de Nutrição: bioimpedância, menopausa e mais | NutriCiclos",
  description: "Avaliação nutricional com bioimpedância, nutrição por fases da vida, emagrecimento saudável, nutrição esportiva, saúde da mulher e acompanhamento com Ozempic® e Mounjaro®.",
  jsonld: [
    crumbs([["Início", ""], ["Serviços", "servicos/"]]),
    {
      "@context": "https://schema.org", "@type": "ItemList", name: "Serviços da NutriCiclos",
      itemListElement: SERVICES.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Service", name: s.t, description: s.s, provider: { "@id": SITE.url + "/#clinica" }, url: SITE.url + "/servicos/#servico-" + (i + 1) } })),
    },
  ],
  body: (r) => `
${pageHero({ eyebrow: "Serviços", title: "Cuidado nutricional para <em>cada fase</em> da vida.", lead: "Cada atendimento é pensado de acordo com a fase da vida e as necessidades individuais de quem nos procura." }, r)}

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
  description: "Agende sua consulta com a nutricionista Osana Melo (CRN-10 6463) pelo WhatsApp (11) 98546-9311 ou por e-mail. Nutrição em cada ciclo da vida.",
  jsonld: [crumbs([["Início", ""], ["Contato", "contato/"]]), { "@context": "https://schema.org", "@type": "ContactPage", url: SITE.url + "/contato/", about: ORG }],
  body: (r) => `
${pageHero({ eyebrow: "Contato", title: "Agende sua <em>consulta</em>.", lead: "Estou pronta para cuidar da sua nutrição em cada ciclo da vida." }, r)}

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
