/* NutriCiclos — interações e animações */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

  window.__ncReady = true;

  /* ---------------- Header ---------------- */
  var header = document.querySelector(".site-header");
  var lastY = 0;
  function onScrollHeader(y) {
    if (!header) return;
    header.classList.toggle("is-scrolled", y > 24);
    if (!root.classList.contains("menu-open")) {
      if (y > lastY + 6 && y > 320) header.classList.add("is-hidden");
      else if (y < lastY - 6 || y < 320) header.classList.remove("is-hidden");
    }
    lastY = y;
  }

  /* ---------------- Mobile menu ---------------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var lenis = null;
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }
    if (menu) menu.setAttribute("aria-hidden", open ? "false" : "true");
    if (menu) {
      if (open) menu.removeAttribute("inert"); else menu.setAttribute("inert", "");
    }
    if (lenis) { open ? lenis.stop() : lenis.start(); }
    document.body.style.overflow = open ? "hidden" : "";
    if (open && header) header.classList.remove("is-hidden");
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(!root.classList.contains("menu-open")); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && root.classList.contains("menu-open")) setMenu(false); });
  if (menu) menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  /* ---------------- Footprints on the dunes ---------------- */
  function buildFootprints(svg) {
    var trail = svg.querySelector(".trail");
    var group = svg.querySelector(".steps-g");
    if (!trail || !group || group.childElementCount) return [];
    var len = trail.getTotalLength();
    var count = parseInt(svg.getAttribute("data-steps") || "26", 10);
    var ns = "http://www.w3.org/2000/svg";
    var steps = [];
    for (var i = 0; i < count; i++) {
      var t = i / (count - 1);
      var f = 1 - Math.pow(1 - t, 1.55); // steps get closer toward the horizon
      var L = f * len;
      var p = trail.getPointAtLength(L);
      var q = trail.getPointAtLength(Math.min(len, L + 1));
      var ang = Math.atan2(q.y - p.y, q.x - p.x);
      var size = 8.5 * (1 - t) + 1.6 * t;
      var side = i % 2 === 0 ? 1 : -1;
      var ox = -Math.sin(ang) * size * 0.95 * side;
      var oy = Math.cos(ang) * size * 0.95 * side;
      var e = document.createElementNS(ns, "ellipse");
      e.setAttribute("cx", (p.x + ox).toFixed(1));
      e.setAttribute("cy", (p.y + oy).toFixed(1));
      e.setAttribute("rx", (size * 1.05).toFixed(2));
      e.setAttribute("ry", (size * 0.45).toFixed(2));
      e.setAttribute("transform", "rotate(" + (ang * 180 / Math.PI).toFixed(1) + " " + (p.x + ox).toFixed(1) + " " + (p.y + oy).toFixed(1) + ")");
      e.setAttribute("class", "fp");
      e.style.opacity = hasGsap && !reduced ? 0 : (0.5 - t * 0.25);
      e.dataset.o = (0.5 - t * 0.25).toFixed(2);
      group.appendChild(e);
      steps.push(e);
    }
    return steps;
  }
  var duneSets = [].map.call(document.querySelectorAll(".dunes svg"), function (svg) {
    return { svg: svg, steps: buildFootprints(svg) };
  });

  /* ---------------- WhatsApp message composer ---------------- */
  var form = document.getElementById("composer");
  if (form) {
    var wa = form.getAttribute("data-wa");
    var mail = form.getAttribute("data-mail");
    function compose() {
      var nome = (form.nome.value || "").trim();
      var motivo = form.motivo.value;
      var msg = (form.mensagem.value || "").trim();
      var txt = "Olá, Osana! " + (nome ? "Meu nome é " + nome + ". " : "") +
        "Vim pelo site da NutriCiclos e gostaria de agendar uma consulta" +
        (motivo ? " (" + motivo + ")" : "") + "." + (msg ? "\n\n" + msg : "");
      return txt;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(compose()), "_blank", "noopener");
    });
    var mailBtn = form.querySelector("[data-mail-btn]");
    if (mailBtn) mailBtn.addEventListener("click", function () {
      var subject = "Agendamento de consulta" + (form.motivo.value ? " — " + form.motivo.value : "");
      window.location.href = "mailto:" + mail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(compose());
    });
  }

  /* ---------------- Year ---------------- */
  [].forEach.call(document.querySelectorAll("[data-year]"), function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------------- Without GSAP or with reduced motion ---------------- */
  if (!hasGsap || reduced) {
    root.classList.add("reduced");
    root.classList.remove("js");
    window.addEventListener("scroll", function () { onScrollHeader(window.scrollY); }, { passive: true });
    onScrollHeader(window.scrollY);
    [].forEach.call(document.querySelectorAll(".steps .step"), function (s) { s.classList.add("is-on"); });
    return;
  }

  var gsap = window.gsap, ST = window.ScrollTrigger;
  gsap.registerPlugin(ST);
  if (window.SplitText) gsap.registerPlugin(window.SplitText);

  /* ---------------- Smooth scroll ---------------- */
  if (typeof window.Lenis !== "undefined") {
    lenis = new window.Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
    lenis.on("scroll", function (e) { ST.update(); onScrollHeader(e.scroll); });
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    [].forEach.call(document.querySelectorAll('a[href^="#"]'), function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        lenis.scrollTo(t, { offset: 0, duration: 1.4 });
      });
    });
  } else {
    window.addEventListener("scroll", function () { onScrollHeader(window.scrollY); }, { passive: true });
  }
  onScrollHeader(window.scrollY);

  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  var timeout = new Promise(function (r) { setTimeout(r, 1500); });

  Promise.race([fontsReady, timeout]).then(function () {
    try { init(); } catch (err) { root.classList.remove("js"); if (window.console) console.error(err); }
  });

  function splitLines(el) {
    if (!window.SplitText) return null;
    return new window.SplitText(el, { type: "lines", mask: "lines", linesClass: "line-inner", aria: "none" });
  }

  function init() {
    var mm = gsap.matchMedia();

    /* ---------- Hero intro ---------- */
    var hero = document.querySelector(".hero, .page-hero, .notfound");
    if (hero) {
      var title = hero.querySelector("[data-hero-title]");
      var tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.1 });
      if (title) {
        var s = splitLines(title);
        gsap.set(title, { opacity: 1 });
        if (s) tl.from(s.lines, { yPercent: 110, duration: 1.4, stagger: 0.09 }, 0.15);
      }
      var bits = hero.querySelectorAll("[data-hero-in]");
      if (bits.length) tl.fromTo(bits, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.08 }, 0.5);
      var vis = hero.querySelector(".hero__visual");
      if (vis) {
        tl.fromTo(vis.querySelector(".hero__emblem"), { scale: 0.82, opacity: 0, rotate: -8 }, { scale: 1, opacity: 1, rotate: 0, duration: 2, ease: "expo.out" }, 0.1);
        tl.fromTo(vis.querySelectorAll(".hero__ring, .hero__orbit"), { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 2 }, 0.3);
      }
      var ring = hero.querySelector(".page-hero__ring");
      if (ring) tl.fromTo(ring, { opacity: 0, rotate: -40, scale: 0.9 }, { opacity: 0.1, rotate: 0, scale: 1, duration: 2.4 }, 0);
      var dunes = hero.querySelectorAll(".dunes .dune");
      if (dunes.length) tl.from(dunes, { yPercent: 40, duration: 2, stagger: 0.12, ease: "expo.out" }, 0);
    }

    /* ---------- Footprints ---------- */
    duneSets.forEach(function (set) {
      if (!set.steps.length) return;
      var inHero = !!set.svg.closest(".hero, .page-hero, .notfound");
      gsap.to(set.steps, {
        opacity: function (i, el) { return parseFloat(el.dataset.o); },
        duration: 0.5, stagger: 0.09, ease: "power1.out", delay: inHero ? 1.1 : 0,
        scrollTrigger: inHero ? null : { trigger: set.svg, start: "top 90%" }
      });
    });

    /* ---------- Hero parallax ---------- */
    var homeHero = document.querySelector(".hero");
    if (homeHero) {
      var st = { trigger: homeHero, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero__copy", { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger: st });
      gsap.to(".hero__visual", { yPercent: -10, scale: 0.92, ease: "none", scrollTrigger: st });
      homeHero.querySelectorAll(".dunes .dune").forEach(function (d, i) {
        gsap.to(d, { yPercent: -(3 - i) * 5, ease: "none", scrollTrigger: st });
      });
    }
    document.querySelectorAll(".page-hero").forEach(function (ph) {
      var r = ph.querySelector(".page-hero__ring");
      if (r) gsap.to(r, { rotate: 60, ease: "none", scrollTrigger: { trigger: ph, start: "top top", end: "bottom top", scrub: true } });
      gsap.to(ph.querySelector(".container"), { yPercent: -12, opacity: 0.3, ease: "none", scrollTrigger: { trigger: ph, start: "top top", end: "bottom top", scrub: true } });
    });

    /* ---------- Split headings on scroll ---------- */
    document.querySelectorAll("[data-split]").forEach(function (el) {
      var s = splitLines(el);
      gsap.set(el, { opacity: 1 });
      if (!s) return;
      gsap.from(s.lines, {
        yPercent: 110, duration: 1.3, stagger: 0.08, ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });

    /* ---------- Generic reveals ---------- */
    ST.batch("[data-reveal]", {
      start: "top 90%",
      onEnter: function (batch) {
        gsap.to(batch, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out", stagger: 0.09, overwrite: true });
      }
    });

    /* ---------- Manifesto word fill ---------- */
    document.querySelectorAll("[data-fill]").forEach(function (el) {
      var s = window.SplitText ? new window.SplitText(el, { type: "words", wordsClass: "word", aria: "none" }) : null;
      if (!s) return;
      gsap.to(s.words, {
        color: function (i, w) { return w.closest("em") ? "#b4633a" : (el.dataset.fill || "#2a1a10"); },
        stagger: 0.1, ease: "none",
        scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 42%", scrub: 0.5 }
      });
    });

    /* ---------- Cycles wheel (pinned) ---------- */
    var cycles = document.querySelector(".cycles");
    if (cycles) setupCycles(cycles);

    /* ---------- Voice card ---------- */
    document.querySelectorAll(".voice__card").forEach(function (card) {
      gsap.fromTo(card, { scale: 0.9, borderRadius: 48 }, {
        scale: 1, borderRadius: 0, ease: "none",
        scrollTrigger: { trigger: card, start: "top 95%", end: "top 20%", scrub: true }
      });
      var art = card.querySelector(".voice__art img");
      if (art) gsap.fromTo(art, { yPercent: 12, rotate: -6 }, { yPercent: -8, rotate: 4, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } });
    });

    /* ---------- Services horizontal ---------- */
    var svc = document.querySelector(".services");
    if (svc) {
      mm.add("(min-width: 901px)", function () {
        var track = svc.querySelector(".services__track");
        var bar = svc.querySelector(".services__bar i");
        var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
        var tw = gsap.to(track, {
          x: function () { return -dist(); }, ease: "none",
          scrollTrigger: {
            trigger: svc.querySelector(".services__pin"), start: "top top",
            end: function () { return "+=" + dist(); }, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1
          }
        });
        if (bar) gsap.to(bar, { scaleX: 1, ease: "none", scrollTrigger: { trigger: svc.querySelector(".services__pin"), start: "top top", end: function () { return "+=" + dist(); }, scrub: 0.6, invalidateOnRefresh: true } });
        return function () { gsap.set(track, { clearProps: "transform" }); };
      });
    }

    /* ---------- Steps ---------- */
    document.querySelectorAll(".steps").forEach(function (list) {
      var line = list.querySelector(".steps__line i");
      var items = list.querySelectorAll(".step");
      mm.add({ desk: "(min-width: 901px)", mob: "(max-width: 900px)" }, function (ctx) {
        var prop = ctx.conditions.desk ? "scaleX" : "scaleY";
        var o = {}; o[prop] = 1; o.ease = "none";
        o.scrollTrigger = {
          trigger: list, start: "top 75%", end: ctx.conditions.desk ? "top 30%" : "bottom 60%", scrub: 0.5,
          onUpdate: function (self) {
            var n = items.length;
            items.forEach(function (it, i) { it.classList.toggle("is-on", self.progress >= (ctx.conditions.desk ? i / (n - 1) - 0.02 : i / n)); });
          }
        };
        var f = {}; f[prop] = 0;
        gsap.fromTo(line, f, o);
      });
    });

    /* ---------- Parallax helpers ---------- */
    document.querySelectorAll("[data-parallax]").forEach(function (el) {
      var amt = parseFloat(el.getAttribute("data-parallax")) || 10;
      gsap.fromTo(el, { yPercent: amt }, { yPercent: -amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });

    root.classList.add("is-ready");
    ST.refresh();
    window.addEventListener("load", function () { ST.refresh(); });
  }

  function setupCycles(section) {
    var stage = section.querySelector(".cycles__stage");
    var phases = [].slice.call(section.querySelectorAll(".phase"));
    var nodes = [].slice.call(section.querySelectorAll(".wheel__node"));
    var prog = section.querySelector(".wheel__progress");
    var numEl = section.querySelector(".wheel__num-inner");
    var bar = section.querySelector(".cycles__progress i");
    var n = phases.length;
    var C = prog ? prog.getTotalLength() : 0;
    var sweep = (n - 1) / n; // arc stops at the last node
    var current = -1;

    if (prog) gsap.set(prog, { strokeDasharray: C, strokeDashoffset: C });
    phases.forEach(function (p, i) { gsap.set(p, { autoAlpha: i === 0 ? 1 : 0 }); });

    function show(i) {
      if (i === current) return;
      var prev = current;
      current = i;
      nodes.forEach(function (nd, k) {
        nd.classList.toggle("is-active", k === i);
        nd.classList.toggle("is-past", k < i);
      });
      if (prev >= 0) {
        var dir = i > prev ? 1 : -1;
        var out = phases[prev];
        gsap.to(out, { autoAlpha: 0, y: -30 * dir, duration: 0.45, ease: "power2.in", overwrite: true });
        var inn = phases[i];
        gsap.fromTo(inn, { autoAlpha: 0, y: 40 * dir }, { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.25, ease: "expo.out", overwrite: true });
        gsap.fromTo(inn.querySelectorAll(".phase__tags li"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, delay: 0.45, ease: "power2.out" });
        if (numEl) {
          gsap.to(numEl, {
            yPercent: -40 * dir, opacity: 0, duration: 0.25, ease: "power2.in", onComplete: function () {
              numEl.textContent = String(i + 1).padStart(2, "0");
              gsap.fromTo(numEl, { yPercent: 40 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
            }
          });
        }
      }
    }
    show(0);

    var mmc = gsap.matchMedia();
    mmc.add("(min-width: 0px)", function () {
      var trig = ST.create({
        trigger: stage, start: "top top",
        end: function () { return "+=" + (n - 1) * window.innerHeight * 0.85; },
        pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true,
        snap: { snapTo: 1 / (n - 1), duration: { min: 0.25, max: 0.7 }, delay: 0.08, ease: "power2.inOut" },
        onUpdate: function (self) {
          var p = self.progress;
          if (prog) gsap.set(prog, { strokeDashoffset: C * (1 - p * sweep) });
          if (bar) gsap.set(bar, { scaleX: p });
          show(Math.min(n - 1, Math.round(p * (n - 1))));
        }
      });
      nodes.forEach(function (nd, k) {
        nd.addEventListener("click", function () {
          var y = trig.start + (trig.end - trig.start) * (k / (n - 1));
          if (lenis) lenis.scrollTo(y, { duration: 1.2 }); else window.scrollTo({ top: y, behavior: "smooth" });
        });
        nd.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); nd.dispatchEvent(new Event("click")); } });
      });
    });
  }
})();
