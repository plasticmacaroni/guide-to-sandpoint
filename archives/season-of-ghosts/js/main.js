/* =====================================================================
   SEASON OF GHOSTS — engine
   Renders STORY (data/story.js) and wires the scroll experience.
   Pure vanilla. Lenis smooth-scroll loaded as progressive enhancement.
   ===================================================================== */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const app = document.getElementById("app");

  /* ---- helpers ---- */
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  // resolve an image reference: 14-digit key -> assets/img/img-KEY.png; else a filename
  const src = (ref) => {
    if (!ref) return "";
    if (/^\d{14}$/.test(ref)) return `assets/img/img-${ref}.png`;
    return `assets/img/${ref}`;
  };

  const picture = (ref, alt, eager) =>
    `<img src="${src(ref)}" alt="${esc(alt)}" loading="${eager ? "eager" : "lazy"}" decoding="async"${eager ? ' fetchpriority="high"' : ""}>`;

  /* ---- section renderers ---- */
  function renderDuet(s, i) {
    const flip = i % 2 === 1 ? " duet--flip" : "";
    return `
      <div class="duet${flip}">
        <div class="duet__visual reveal">
          <figure class="duet__frame"${s.focus ? ` style="--focus:${esc(s.focus)}"` : ""}>${picture(s.img, s.caption)}</figure>
          ${s.caption ? `<figcaption class="duet__cap">${esc(s.caption)}</figcaption>` : ""}
        </div>
        <div class="duet__text">
          ${s.heading ? `<h3 class="reveal">${esc(s.heading)}</h3>` : ""}
          ${s.body ? `<p class="reveal">${esc(s.body)}</p>` : ""}
          ${s.quote ? `<p class="pull reveal">${esc(s.quote)}</p>` : ""}
        </div>
      </div>`;
  }

  function renderFull(s) {
    const focus = s.focus ? ` style="--focus:${esc(s.focus)}"` : "";
    return `
      <section class="full" data-parallax>
        <div class="full__img"><div class="full__inner"${focus}>${picture(s.img, s.caption)}</div></div>
        ${s.line ? `<div class="full__line reveal"><p class="q">“${esc(s.line)}”</p></div>` : ""}
        ${s.caption ? `<p class="full__cap reveal">${esc(s.caption)}</p>` : ""}
      </section>`;
  }

  function renderQuote(s) {
    return `
      <section class="bigquote">
        <p class="q reveal">${esc(s.text)}</p>
        ${s.attribution ? `<p class="attr reveal">${esc(s.attribution)}</p>` : ""}
      </section>`;
  }

  function renderGallery(s) {
    const tiles = s.images
      .map(
        (g) => `
        <figure class="tile reveal"${g.pos ? ` style="--pos:${esc(g.pos)}"` : ""}>
          ${picture(g.img, g.caption)}
          ${g.caption ? `<figcaption class="tile__cap">${esc(g.caption)}</figcaption>` : ""}
        </figure>`
      )
      .join("");
    return `
      <section class="gallery">
        ${s.heading ? `<div class="gallery__head reveal"><h3>${esc(s.heading)}</h3></div>` : ""}
        <div class="gallery__grid">${tiles}</div>
      </section>`;
  }

  function renderSection(s, i) {
    switch (s.type) {
      case "duet": return renderDuet(s, i);
      case "full": return renderFull(s);
      case "quote": return renderQuote(s);
      case "gallery": return renderGallery(s);
      default: return "";
    }
  }

  /* ---- chapter ---- */
  function renderChapter(ch) {
    const divider = `
      <section class="divider">
        <div class="divider__numeral reveal" aria-hidden="true">${esc(ch.numeral)}</div>
        <p class="eyebrow divider__label reveal">${esc(ch.label)}</p>
        <h2 class="reveal">${esc(ch.title)}</h2>
        <div class="divider__rule reveal"></div>
        <p class="divider__dek reveal">${esc(ch.dek)}</p>
      </section>`;
    const body = (ch.sections || []).map(renderSection).join("");
    return `<div class="chapter" id="${esc(ch.id)}" data-mood="${esc(ch.mood)}">${divider}${body}</div>`;
  }

  /* ---- hero / party / epilogue / grimoire ---- */
  function renderHero(m) {
    return `
      <header class="hero" id="top" data-mood="blood">
        <div class="hero__art"></div>
        <div class="hero__moon" aria-hidden="true"></div>
        <div class="hero__inner">
          <p class="eyebrow hero__kicker">${esc(m.kicker)}</p>
          <h1>${esc(m.title)}<span class="sub">${esc(m.subtitle)}</span></h1>
          <p class="hero__lede">${esc(m.intro)}</p>
        </div>
        <p class="scrollcue">Begin</p>
      </header>`;
  }

  function renderParty(party) {
    const cards = party
      .map(
        (p) => `
        <article class="pc reveal" style="--tint:${p.tint}">
          ${
            p.img
              ? `<div class="pc__portrait">${picture(p.img, p.name)}</div>`
              : `<div class="pc__sigil" aria-hidden="true">${esc(p.sigil)}</div>`
          }
          <div class="pc__body">
            <span class="pc__player">${esc(p.player)}</span>
            <h3 class="pc__name">${esc(p.name)}</h3>
            <p class="pc__role">${esc(p.role)}</p>
            <p class="pc__blurb">${esc(p.blurb)}</p>
            <p class="pc__creed">${esc(p.creed)}</p>
          </div>
        </article>`
      )
      .join("");
    return `
      <section class="party" id="the-party" data-mood="dusk">
        <div class="party__head reveal">
          <p class="eyebrow">Dramatis Personae</p>
          <h2>The Stewards of Willowshore</h2>
        </div>
        <div class="party__grid">${cards}</div>
      </section>`;
  }

  function renderEpilogue(ep) {
    const cards = ep.cards
      .map(
        (c) => `
        <div class="epi reveal">
          <div class="epi__sigil" aria-hidden="true">${esc(c.sigil)}</div>
          <div>
            <h3 class="epi__name">${esc(c.name)}</h3>
            <p class="epi__text">${esc(c.text)}</p>
            <p class="epi__quote">${esc(c.quote)}</p>
            ${c.source ? `<p class="epi__src">${esc(c.source)}</p>` : ""}
          </div>
        </div>`
      )
      .join("");
    return `
      <section class="epilogue" id="epilogue" data-mood="gold">
        <div class="epilogue__head reveal">
          <p class="eyebrow">Where They Went</p>
          <h2>Epilogue</h2>
          <p class="dek" style="margin-inline:auto;max-width:60ch;text-align:center">${esc(ep.intro)}</p>
        </div>
        <div class="epi-grid">${cards}</div>
        <p class="closer reveal">“${esc(ep.closer)}”</p>
        ${ep.closerSource ? `<p class="epi__src closer__src reveal">${esc(ep.closerSource)}</p>` : ""}
      </section>`;
  }

  function renderGrimoire(g) {
    const tiles = g.images
      .map(
        (t) => `
        <figure class="tile reveal">
          ${picture(t.img, t.caption)}
          ${t.caption ? `<figcaption class="tile__cap">${esc(t.caption)}</figcaption>` : ""}
        </figure>`
      )
      .join("");
    return `
      <section class="gallery" id="grimoire" data-mood="haunt">
        <div class="gallery__head reveal">
          <p class="eyebrow">Appendix</p>
          <h3>${esc(g.title)}</h3>
          <p class="dek" style="margin:1rem auto 0;max-width:50ch;text-align:center">${esc(g.dek)}</p>
        </div>
        <div class="gallery__grid">${tiles}</div>
      </section>`;
  }

  function renderColophon() {
    return `
      <footer class="colophon" data-mood="night">
        <div class="mark reveal" aria-hidden="true">終</div>
        <p class="reveal">Season of Ghosts · a Pathfinder campaign chronicled across forty-three sessions,
        June 2025 to May 2026. Built from the table's own notes — every word that matters is theirs.</p>
      </footer>`;
  }

  /* ===================================================================
     BUILD THE PAGE
  =================================================================== */
  const html = [
    renderHero(STORY.meta),
    renderParty(STORY.party),
    STORY.chapters.map(renderChapter).join(""),
    renderEpilogue(STORY.epilogues),
    renderGrimoire(STORY.grimoire),
    renderColophon(),
  ].join("");
  app.innerHTML = html;

  /* mark hero image eager-ish: none needed; hero is CSS */

  /* ---- chapter nav ---- */
  const navTargets = [
    { id: "top", label: "Top" },
    { id: "the-party", label: "Party" },
    ...STORY.chapters.map((c) => ({ id: c.id, label: c.label })),
    { id: "epilogue", label: "Epilogue" },
    { id: "grimoire", label: "Grimoire" },
  ];
  const nav = document.getElementById("chapnav");
  nav.innerHTML = navTargets
    .map((t) => `<a href="#${t.id}" data-target="${t.id}"><span>${esc(t.label)}</span><span class="dot"></span></a>`)
    .join("");
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    e.preventDefault();
    const el = document.getElementById(a.dataset.target);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  /* ---- reveal-on-scroll ---- */
  const revealIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          revealIO.unobserve(en.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

  /* ---- mood cross-fade: whichever themed block owns viewport centre ---- */
  const moodBlocks = Array.from(document.querySelectorAll("[data-mood]"));
  let currentMood = "";
  function updateMood() {
    const mid = window.innerHeight * 0.45;
    let best = null;
    for (const b of moodBlocks) {
      const r = b.getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) { best = b; break; }
    }
    if (best && best.dataset.mood !== currentMood) {
      currentMood = best.dataset.mood;
      document.body.dataset.mood = currentMood;
    }
  }

  /* ---- nav active state ---- */
  const navLinks = Array.from(nav.querySelectorAll("a"));
  const sectionIds = navTargets.map((t) => t.id);
  function updateNav() {
    const mid = window.innerHeight * 0.5;
    let active = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= mid) active = id;
    }
    navLinks.forEach((a) => a.classList.toggle("active", a.dataset.target === active));
  }

  /* ---- progress bar ---- */
  const progress = document.getElementById("progress");
  function updateProgress() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }

  /* ---- parallax on full-bleed art ---- */
  const parallaxEls = reduceMotion ? [] : Array.from(document.querySelectorAll(".full__inner"));
  function updateParallax() {
    const vh = window.innerHeight;
    for (const el of parallaxEls) {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) continue;
      const prog = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 across viewport
      el.style.transform = `translate3d(0, ${(-prog * 9).toFixed(2)}%, 0) scale(1.12)`;
    }
  }

  /* ---- rAF scroll loop ---- */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateProgress();
      updateMood();
      updateNav();
      updateParallax();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  // ensure full-bleed art fills before parallax by giving it the inner wrapper height
  document.querySelectorAll(".full__inner").forEach((el) => {
    el.style.position = "absolute";
    el.style.inset = "0";
  });
  onScroll();
  updateMood();

  /* ===================================================================
     FIREFLIES — drifting lantern motes
  =================================================================== */
  (function fireflies() {
    if (reduceMotion) return;
    const canvas = document.getElementById("fireflies");
    const ctx = canvas.getContext("2d");
    let w, h, dots;
    const COUNT = () => Math.min(70, Math.round(window.innerWidth / 22));

    function resize() {
      w = canvas.width = window.innerWidth * devicePixelRatio;
      h = canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      spawn();
    }
    function spawn() {
      const n = COUNT();
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.6 + 0.5,
        vy: -(Math.random() * 0.25 + 0.05),
        vx: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.5 + 0.25,
        tw: Math.random() * Math.PI * 2,
      }));
    }
    function tint() {
      // read live accent from the body's computed style
      const c = getComputedStyle(document.body).getPropertyValue("--accent").trim();
      return c || "#e8a14b";
    }
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const col = tint();
      frame++;
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy; d.tw += 0.03;
        if (d.y < -10) { d.y = window.innerHeight + 10; d.x = Math.random() * window.innerWidth; }
        if (d.x < -10) d.x = window.innerWidth + 10;
        if (d.x > window.innerWidth + 10) d.x = -10;
        const flicker = d.a * (0.6 + 0.4 * Math.sin(d.tw));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = col;
        ctx.globalAlpha = flicker;
        ctx.shadowBlur = 8;
        ctx.shadowColor = col;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize, { passive: true });
    resize();
    draw();
  })();

  /* ===================================================================
     LENIS smooth scroll — progressive enhancement (optional CDN)
  =================================================================== */
  if (!reduceMotion) {
    const s = document.createElement("script");
    s.src = "https://unpkg.com/lenis@1.1.13/dist/lenis.min.js";
    s.onload = function () {
      try {
        const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
        function raf(t) { lenis.raf(t); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        lenis.on("scroll", onScroll);
      } catch (e) { /* native scroll already works */ }
    };
    s.onerror = function () { /* offline: native scroll is fine */ };
    document.head.appendChild(s);
  }
})();
