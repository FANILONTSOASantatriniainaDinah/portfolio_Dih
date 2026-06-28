/* ============================================================
   pa-widget.js
   ------------------------------------------------------------
   Pièce interactive signature de la page Préd'Archéo. Réservée
   strictement à ce projet (data.interactive === "pred-archeo") ;
   les autres projets de la page parcours n'affichent jamais ce
   bloc. Inclut une décoration animée discrète (points façon
   balayage satellite + anneau qui tourne lentement) et une
   entrée en fondu au chargement, respectant
   prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  window.PA_WIDGET_HTML = '<div class="pa-widget" id="paWidget">\n\n  <div class="pa-deco" aria-hidden="true">\n    <span class="pa-deco__dot" style="--x:8%; --y:18%; --d:0s;"></span>\n    <span class="pa-deco__dot" style="--x:92%; --y:12%; --d:.6s;"></span>\n    <span class="pa-deco__dot" style="--x:88%; --y:78%; --d:1.1s;"></span>\n    <span class="pa-deco__dot" style="--x:6%; --y:82%; --d:1.7s;"></span>\n    <span class="pa-deco__dot" style="--x:50%; --y:6%; --d:2.2s;"></span>\n    <span class="pa-deco__dot" style="--x:97%; --y:48%; --d:.3s;"></span>\n    <span class="pa-deco__ring"></span>\n  </div>\n\n  <div class="pa-widget__intro">\n    <span class="pa-widget__kicker" data-i18n="pa.kicker">À essayer</span>\n    <h2 class="pa-widget__title" data-i18n="pa.title">Et si vous deviez décider où creuser ?</h2>\n    <p class="pa-widget__lead">\n      <span data-i18n="pa.lead.p1">Pour savoir où des populations ont pu s&rsquo;installer il y a très\n      longtemps, on regarde si un endroit est proche de ce dont on a besoin\n      pour vivre&nbsp;: de l&rsquo;eau, de la nourriture, des matériaux.</span>\n      <strong data-i18n="pa.lead.p2">Cliquez n&rsquo;importe où sur la carte ci-dessous pour\n      voir comment un endroit est jugé intéressant ou non.</strong>\n    </p>\n  </div>\n\n  <div class="pa-widget__stage">\n\n    <div class="pa-widget__mapcol">\n      <svg class="pa-widget__map" id="paMap" viewBox="0 0 400 400" role="img" tabindex="0" aria-label="Carte interactive de la zone d\'étude. Cliquez ou appuyez sur Entrée pour tester un point.">\n        <defs>\n          <clipPath id="paClip"><rect x="0" y="0" width="400" height="400" rx="18"/></clipPath>\n        </defs>\n        <g clip-path="url(#paClip)">\n          <rect width="400" height="400" fill="#7fa8c9"/>\n          <path d="M0,40 C60,30 90,80 70,150 C50,230 110,260 90,330 C75,385 30,400 0,400 Z" fill="#a9c9dd"/>\n          <path d="M0,30 C55,22 80,70 62,140 C44,215 100,245 82,310 C68,365 25,395 0,400 Z" fill="none" stroke="#e69aa8" stroke-width="10" opacity=".85"/>\n          <path d="M230,40 C300,55 340,40 380,70 L400,40 L400,0 L210,0 Z" fill="#6f9b6a"/>\n          <path d="M260,160 C310,150 350,180 340,230 C330,270 280,260 260,230 C245,205 245,180 260,160 Z" fill="#6f9b6a"/>\n          <path d="M150,60 C200,50 230,90 210,140 C195,175 150,170 140,130 C132,98 130,80 150,60 Z" fill="#b9cf8e"/>\n          <ellipse cx="330" cy="320" rx="55" ry="38" fill="#c9c2b2"/>\n          <circle cx="120" cy="250" r="14" fill="#d8c9a3"/>\n          <circle cx="105" cy="270" r="8" fill="#d8c9a3"/>\n\n          <circle class="pa-resource" data-key="eau" cx="40" cy="200" r="6"/>\n          <circle class="pa-resource" data-key="corail" cx="60" cy="140" r="6"/>\n          <circle class="pa-resource" data-key="vegetation" cx="300" cy="190" r="6"/>\n          <circle class="pa-resource" data-key="dune" cx="330" cy="320" r="6"/>\n          <circle class="pa-resource" data-key="ile" cx="120" cy="250" r="6"/>\n        </g>\n\n        <g id="paLines"></g>\n        <circle id="paMarker" cx="200" cy="200" r="8" fill="#fff" stroke="#131c1a" stroke-width="2.5" style="display:none;"/>\n        <rect width="400" height="400" rx="18" fill="none" stroke="rgba(19,28,26,.18)" stroke-width="1.5"/>\n      </svg>\n\n      <p class="pa-widget__hint" id="paHint" data-i18n="pa.hint.initial">👆 Touchez la carte pour commencer</p>\n\n      <ul class="pa-widget__legend">\n        <li><span class="pa-dot" style="background:#3f7ea6"></span><span data-i18n="pa.legend.eau">Eau</span></li>\n        <li><span class="pa-dot" style="background:#e69aa8"></span><span data-i18n="pa.legend.corail">Corail</span></li>\n        <li><span class="pa-dot" style="background:#5d8a59"></span><span data-i18n="pa.legend.vegetation">Végétation</span></li>\n        <li><span class="pa-dot" style="background:#a9a08c"></span><span data-i18n="pa.legend.dune">Dunes anciennes</span></li>\n        <li><span class="pa-dot" style="background:#b9a874"></span><span data-i18n="pa.legend.ile">Île</span></li>\n      </ul>\n    </div>\n\n    <div class="pa-widget__panel">\n\n      <div class="pa-widget__result">\n        <p class="pa-widget__result-label" data-i18n="pa.result.label">Niveau d&rsquo;intérêt de cet endroit</p>\n        <div class="pa-widget__score">\n          <span class="pa-widget__score-value" id="paScore">–</span>\n          <span class="pa-widget__score-bar"><span id="paScoreFill"></span></span>\n        </div>\n        <p class="pa-widget__verdict" id="paVerdict" data-i18n="pa.verdict.initial">Cliquez sur la carte pour voir le résultat.</p>\n      </div>\n\n      <p class="pa-widget__why" data-i18n="pa.why">Pourquoi&nbsp;? Plus l&rsquo;endroit est proche de ces ressources, plus son score est élevé&nbsp;:</p>\n      <ul class="pa-widget__distances" id="paDistances">\n        <li data-key="eau"><span class="pa-dot" style="background:#3f7ea6"></span><span class="pa-dlabel" data-i18n="pa.legend.eau">Eau</span><span class="pa-dval">···</span></li>\n        <li data-key="corail"><span class="pa-dot" style="background:#e69aa8"></span><span class="pa-dlabel" data-i18n="pa.legend.corail">Corail</span><span class="pa-dval">···</span></li>\n        <li data-key="vegetation"><span class="pa-dot" style="background:#5d8a59"></span><span class="pa-dlabel" data-i18n="pa.legend.vegetation">Végétation</span><span class="pa-dval">···</span></li>\n        <li data-key="dune"><span class="pa-dot" style="background:#a9a08c"></span><span class="pa-dlabel" data-i18n="pa.legend.dune">Dunes anciennes</span><span class="pa-dval">···</span></li>\n        <li data-key="ile"><span class="pa-dot" style="background:#b9a874"></span><span class="pa-dlabel" data-i18n="pa.legend.ile">Île</span><span class="pa-dval">···</span></li>\n      </ul>\n\n      <p class="pa-widget__footnote" data-i18n="pa.footnote">\n        C&rsquo;est exactement ce calcul, répété pour chaque point d&rsquo;une vraie\n        image satellite, qui a permis de repérer les zones les plus prometteuses\n        à Madagascar et en Guyane.\n      </p>\n    </div>\n\n  </div>\n</div>\n\n<style>\n.pa-widget {\n  position: relative;\n  width: 100%;\n  max-width: calc(1080px + 2 * clamp(1.25rem, 5vw, 3rem));\n  margin: 3rem auto 0;\n  margin-inline: clamp(1.25rem, 5vw, 3rem);\n  padding: clamp(1.75rem, 4vw, 2.75rem);\n  background:\n    radial-gradient(ellipse 120% 100% at 0% 0%, rgba(128,144,118,.16), transparent 55%),\n    radial-gradient(ellipse 120% 100% at 100% 100%, rgba(184,104,48,.14), transparent 55%),\n    rgba(255,255,255,.5);\n  border: 1px solid rgba(255,255,255,.65);\n  border-radius: 24px;\n  box-shadow: 0 32px 64px -28px rgba(40,30,15,.3);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n  overflow: hidden;\n  isolation: isolate;\n  opacity: 0;\n  transform: translateY(18px);\n  animation: paWidgetIn .8s cubic-bezier(.16,1,.3,1) .1s forwards;\n}\n@media (min-width: 1150px) {\n  .pa-widget { margin-inline: auto; }\n}\n@keyframes paWidgetIn {\n  to { opacity: 1; transform: translateY(0); }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pa-widget { opacity: 1; transform: none; animation: none; }\n}\n\n/* ---------- décoration : petits points façon balayage satellite ---------- */\n.pa-deco {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n}\n.pa-deco__dot {\n  position: absolute;\n  left: var(--x);\n  top: var(--y);\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--earth);\n  opacity: .35;\n  animation: paDotPulse 3.4s ease-in-out infinite;\n  animation-delay: var(--d);\n}\n.pa-deco__dot::after {\n  content: "";\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  border: 1px solid var(--earth);\n  opacity: 0;\n  animation: paDotRing 3.4s ease-out infinite;\n  animation-delay: var(--d);\n}\n@keyframes paDotPulse {\n  0%, 100% { opacity: .25; transform: scale(1); }\n  50% { opacity: .7; transform: scale(1.4); }\n}\n@keyframes paDotRing {\n  0% { opacity: .45; transform: scale(.4); }\n  80%, 100% { opacity: 0; transform: scale(2.2); }\n}\n.pa-deco__ring {\n  position: absolute;\n  top: 50%;\n  right: -120px;\n  width: 360px;\n  height: 360px;\n  border-radius: 50%;\n  border: 1px dashed rgba(128,144,118,.25);\n  transform: translateY(-50%);\n  animation: paRingSpin 50s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .pa-deco__dot, .pa-deco__dot::after, .pa-deco__ring { animation: none; }\n}\n@keyframes paRingSpin {\n  to { transform: translateY(-50%) rotate(360deg); }\n}\n@media (max-width: 700px) {\n  .pa-deco__ring { display: none; }\n}\n\n.pa-widget__intro, .pa-widget__stage { position: relative; z-index: 1; }\n\n.pa-widget__intro { max-width: 62ch; margin-bottom: 2.4rem; }\n.pa-widget__kicker {\n  display: inline-block;\n  font-family: var(--font-mono);\n  font-size: .72rem;\n  font-weight: 700;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--earth-deep);\n  background: rgba(184,104,48,.14);\n  padding: .35rem .8rem;\n  border-radius: 999px;\n  margin-bottom: 1rem;\n}\n.pa-widget__title {\n  font-family: var(--font-display);\n  font-weight: 600;\n  font-size: clamp(1.5rem, 3.2vw, 2.1rem);\n  line-height: 1.25;\n  color: var(--noir);\n  margin-bottom: .8rem;\n}\n.pa-widget__lead { color: var(--ink-dim); line-height: 1.65; font-size: 1.02rem; }\n.pa-widget__lead strong { color: var(--noir); }\n\n.pa-widget__stage {\n  display: grid;\n  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);\n  gap: clamp(2rem, 5vw, 3rem);\n  align-items: start;\n}\n\n.pa-widget__mapcol { position: relative; min-width: 0; }\n.pa-widget__map {\n  width: 100%;\n  display: block;\n  border-radius: 18px;\n  cursor: crosshair;\n  box-shadow: 0 28px 56px -22px rgba(40,30,15,.35);\n  background: #7fa8c9;\n  touch-action: manipulation;\n}\n.pa-widget__map:focus-visible {\n  outline: 3px solid var(--earth);\n  outline-offset: 3px;\n}\n.pa-resource { fill: #fff; stroke: var(--noir); stroke-width: 2; }\n.pa-widget__hint {\n  margin-top: 1rem;\n  font-size: .92rem;\n  font-weight: 600;\n  color: var(--ink-dim);\n  text-align: center;\n}\n.pa-widget__legend {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: .9rem 1.3rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(19,28,26,.08);\n}\n.pa-widget__legend li {\n  display: flex;\n  align-items: center;\n  gap: .45rem;\n  font-size: .82rem;\n  color: var(--ink-faint);\n}\n\n.pa-widget__panel {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.pa-widget__result {\n  background: rgba(255,255,255,.65);\n  border: 1px solid rgba(255,255,255,.7);\n  border-radius: 16px;\n  padding: 1.6rem 1.7rem;\n  margin-bottom: 1.6rem;\n}\n.pa-widget__result-label {\n  font-size: .8rem;\n  font-weight: 600;\n  color: var(--ink-faint);\n  margin-bottom: .9rem;\n}\n.pa-widget__score { display: flex; align-items: center; gap: 1.1rem; margin-bottom: .9rem; }\n.pa-widget__score-value {\n  font-family: var(--font-display);\n  font-size: 3rem;\n  font-weight: 600;\n  color: var(--ink-faint);\n  line-height: 1;\n  min-width: 2.4ch;\n  transition: color .3s;\n}\n.pa-widget__score-bar {\n  flex: 1;\n  height: 12px;\n  border-radius: 999px;\n  background: rgba(19,28,26,.08);\n  overflow: hidden;\n}\n.pa-widget__score-bar span {\n  display: block;\n  height: 100%;\n  width: 0%;\n  border-radius: 999px;\n  background: linear-gradient(90deg, #c1492f, #d6b24a, #4f8f63);\n  transition: width .7s cubic-bezier(.16,1,.3,1);\n}\n.pa-widget__verdict {\n  font-size: .95rem;\n  font-weight: 600;\n  color: var(--noir);\n  line-height: 1.5;\n  min-height: 2.7em;\n}\n\n.pa-widget__why {\n  font-size: .88rem;\n  color: var(--ink-dim);\n  margin-bottom: 1rem;\n}\n\n.pa-widget__distances { display: flex; flex-direction: column; gap: .75rem; margin-bottom: 1.6rem; }\n.pa-widget__distances li {\n  display: grid;\n  grid-template-columns: 12px 1fr auto;\n  align-items: center;\n  gap: .7rem;\n  font-size: .92rem;\n}\n.pa-dot { width: 11px; height: 11px; border-radius: 50%; flex-shrink: 0; }\n.pa-dlabel { color: var(--ink-dim); font-weight: 500; }\n.pa-dval {\n  font-family: var(--font-mono);\n  font-weight: 700;\n  color: var(--noir);\n  font-size: .85rem;\n  min-width: 3.6em;\n  text-align: right;\n}\n\n.pa-widget__footnote {\n  font-size: .85rem;\n  line-height: 1.6;\n  color: var(--ink-faint);\n  border-top: 1px solid rgba(19,28,26,.08);\n  padding-top: 1.2rem;\n  margin-top: auto;\n}\n\n.pa-line {\n  stroke: rgba(19,28,26,.5);\n  stroke-width: 1.4;\n  stroke-dasharray: 5 4;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.pa-line.is-visible { opacity: 1; }\n\n@media (max-width: 800px) {\n  .pa-widget { margin-inline: 1rem; padding: 1.5rem; }\n  .pa-widget__stage { grid-template-columns: 1fr; }\n}\n</style>\n';

  window.PA_WIDGET_INIT = function () {
    const RESOURCES = {
      eau:        { x: 40,  y: 200, color: "#3f7ea6" },
      corail:     { x: 60,  y: 140, color: "#e69aa8" },
      vegetation: { x: 300, y: 190, color: "#5d8a59" },
      dune:       { x: 330, y: 320, color: "#a9a08c" },
      ile:        { x: 120, y: 250, color: "#b9a874" }
    };

    const svg = document.getElementById("paMap");
    if (!svg) return;

    const linesGroup = document.getElementById("paLines");
    const marker = document.getElementById("paMarker");
    const distList = document.getElementById("paDistances");
    const scoreEl = document.getElementById("paScore");
    const fillEl = document.getElementById("paScoreFill");
    const verdictEl = document.getElementById("paVerdict");
    const hintEl = document.getElementById("paHint");

    // Libellé lu depuis le dictionnaire i18n actif (FR/EN), comme dans
    // project.js, pour que le widget suive la langue choisie sur le site.
    function i18nText(key, fallback) {
      const lang = document.documentElement.getAttribute("lang") || "fr";
      const dict = typeof PORTFOLIO_I18N_DICT !== "undefined" ? PORTFOLIO_I18N_DICT[lang] : null;
      return (dict && dict[key]) || fallback || "";
    }

    // Le widget est inséré dans le DOM après le passage initial de
    // i18n.js (qui traduit la page au DOMContentLoaded) : ses propres
    // éléments [data-i18n] ne sont donc jamais traduits automatiquement.
    // On applique ici la traduction une première fois, sur le widget
    // seul, puis à nouveau à chaque changement de langue.
    function applyStaticTranslations() {
      svg.setAttribute("aria-label", i18nText("pa.map.ariaLabel", "Carte interactive de la zone d'étude. Cliquez ou appuyez sur Entrée pour tester un point."));
      const widgetRoot = document.getElementById("paWidget");
      if (widgetRoot) {
        widgetRoot.querySelectorAll("[data-i18n]").forEach((el) => {
          const value = i18nText(el.getAttribute("data-i18n"));
          if (value) el.innerHTML = value;
        });
      }
    }
    applyStaticTranslations();

    // Mémorise le dernier point testé pour pouvoir retraduire le
    // verdict, le hint et les distances immédiatement si la langue
    // change après un premier clic (sans attendre un nouveau clic).
    let lastPoint = null;

    function svgPoint(evt) {
      const rect = svg.getBoundingClientRect();
      const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
      const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
      const x = ((clientX - rect.left) / rect.width) * 400;
      const y = ((clientY - rect.top) / rect.height) * 400;
      return { x, y };
    }

    function compute(x, y) {
      lastPoint = { x, y };
      marker.style.display = "block";
      marker.setAttribute("cx", x);
      marker.setAttribute("cy", y);

      linesGroup.innerHTML = "";
      let sumInverse = 0;
      const kmUnit = i18nText("pa.unit.km", "km");

      Object.keys(RESOURCES).forEach((key, i) => {
        const r = RESOURCES[key];
        const dist = Math.hypot(r.x - x, r.y - y);
        const distClamped = Math.max(dist, 8);
        sumInverse += 1 / distClamped;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x);
        line.setAttribute("y1", y);
        line.setAttribute("x2", r.x);
        line.setAttribute("y2", r.y);
        line.setAttribute("class", "pa-line");
        line.style.stroke = r.color;
        linesGroup.appendChild(line);
        setTimeout(() => line.classList.add("is-visible"), i * 70);

        const li = distList.querySelector(`li[data-key="${key}"] .pa-dval`);
        if (li) {
          const km = (dist / 400 * 6).toFixed(1);
          li.textContent = `${km} ${kmUnit}`;
        }
      });

      const score = Math.min(100, Math.round(sumInverse * 100 * 4));
      scoreEl.textContent = score;
      fillEl.style.width = score + "%";

      let verdict, color;
      if (score < 25) {
        verdict = i18nText("pa.verdict.low", "Pas l'idéal : cet endroit est loin de tout. Peu de chances d'y trouver quelque chose.");
        color = "#c1492f";
      } else if (score < 60) {
        verdict = i18nText("pa.verdict.mid", "Possible : quelques ressources sont accessibles, sans être idéales.");
        color = "#b8853a";
      } else {
        verdict = i18nText("pa.verdict.high", "Excellent choix : cet endroit a tout sous la main. C'est typiquement là qu'on irait chercher en priorité.");
        color = "#4f8f63";
      }
      verdictEl.textContent = verdict;
      scoreEl.style.color = color;
      hintEl.textContent = i18nText("pa.hint.retry", "Essayez un autre point pour comparer");
    }

    svg.addEventListener("click", (e) => {
      const p = svgPoint(e);
      compute(p.x, p.y);
    });

    svg.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const p = svgPoint(e);
      compute(p.x, p.y);
    }, { passive: false });

    svg.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        compute(200, 200);
      }
    });

    // Quand la langue change (bouton FR/EN du header), retraduit
    // l'aria-label de la carte et, si un point a déjà été testé,
    // recalcule immédiatement verdict/hint/distances dans la nouvelle
    // langue plutôt que d'attendre un nouveau clic.
    document.addEventListener("portfolio:langchange", () => {
      applyStaticTranslations();
      if (lastPoint) {
        compute(lastPoint.x, lastPoint.y);
      }
    });

  };
})();
