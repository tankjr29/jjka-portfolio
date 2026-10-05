/* ── CONFIG EmailJS : remplace les 3 valeurs ── */
const EMAILJS = { publicKey: 'uhlYBSBZTZaJGeUlb', service: 'service_v7ilkd5', template: 'template_4nmy8op' };
const hasEmailJsConfig = Object.values(EMAILJS).every((value) => value && !value.startsWith('VOTRE_'));
if (window.emailjs && hasEmailJsConfig) emailjs.init({ publicKey: EMAILJS.publicKey });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const doc = (f) => 'document/' + encodeURI(f);

/* ── DONNÉES ── */
const SKILLS = {
  'Développement': [['Python', 65], ['HTML / CSS', 75], ['C & C++', 50], ['Java', 50]],
  'Réseaux & Sécurité': [['Cisco Packet Tracer', 80], ['Wireshark', 75], ['Protocoles réseaux', 80], ['Virtualisation', 80]],
  'Cloud & Outils': [['AWS', 50], ['Docker', 50], ['Analyse de menaces', 70], ['Linux (Ubuntu & Kali)', 70]],
};
const CATS = { web: 'Web Dev', security: 'Cybersécurité', cloud: 'Cloud / Réseaux', iot: 'IoT', mobile: 'Mobile' };
const GH = 'https://github.com/';
const PROJECTS = [
  ['CampusNav — UFHB', 'mobile', "Application mobile de géolocalisation et de navigation sur le campus de l'Université Félix Houphouët-Boigny : carte interactive, navigation en temps réel, localisation des bâtiments et salles.", ['Mobile', 'GéoMapping', 'Navigation'], [["Voir l'app", 'https://junior.devsione.ci/']], ['Carte interactive du campus', 'Navigation entre les bâtiments et les salles', 'Localisation des points d’intérêt']],
  ['IoT Smart Parking & Edge Security', 'iot', "Plateforme IoT de parking connecté : détection ESP32, Edge IDS embarqué, pipeline MQTT → Node-RED → InfluxDB → Grafana.", ['ESP32', 'MQTT', 'Node-RED', 'InfluxDB', 'Grafana', 'Docker'], [['Dépôt', GH + 'TankRoot29/Projet-IoT---parking-iot-service.git']], ['Détection des places avec ESP32 et capteurs', 'Analyse de sécurité embarquée avec Edge IDS', 'Collecte et visualisation via MQTT, Node-RED, InfluxDB et Grafana']],
  ['Projet Fil Rouge', 'security', "Infrastructure virtualisée sécurisée : segmentation réseau LAN/DMZ, cloud dockerisé, audit NIST et analyse forensic.", ['Docker', 'Virtualisation', 'NIST'], [['Dépôt', GH + 'JunRoot29/TP3---CyberSecurit---AGBENONZAN-JUNIOR-SANOGO-SOULEYMANE.git'], ['Docs', doc('Documentation - Pro Fil rouge.pdf')], ['Rapport', doc('Rapport Final — Projet Fil rouge.pdf')]], ['Segmentation du réseau en zones LAN et DMZ', 'Déploiement d’un cloud simulé avec Docker', 'Audit de sécurité inspiré du référentiel NIST', 'Analyse forensic']],
  ['Load Balancing DNS & Web', 'cloud', "Haute disponibilité : cluster DNS (BIND9) et ferme web (Apache2) répartis via iptables DNAT/NAT, émulés sous Kathara/Docker. Répartition ~50/50 validée sur 100 requêtes.", ['Kathara', 'iptables', 'BIND9', 'Apache2'], [['Dépôt', GH + 'TankRoot29/Projet-LoadBalancing.git']], ['Répartition des requêtes DNS et HTTP', 'Deux serveurs DNS et deux serveurs web', 'Répartition proche de 50/50 mesurée sur 100 requêtes']],
  ['AudioStream UDP', 'cloud', "Diffusion audio WAV temps réel via UDP en Java : jitter buffer, réordonnancement des paquets, statistiques live (latence, pertes).", ['Java', 'UDP', 'Jitter Buffer'], [['GitHub', GH + 'TankRoot29/Diffusion-de-flux-Audio-avec-UDP.git']], ['Streaming audio en temps réel de serveur à client', 'Jitter buffer et réordonnancement des paquets', 'Suivi de la latence et des pertes']],
  ['Application Serverless AWS', 'cloud', "Application web serverless sur AWS : Lambda, API Gateway, S3.", ['AWS', 'Lambda', 'API Gateway', 'S3'], [['Live', 'https://ufhb-frontend-jjk.s3.eu-north-1.amazonaws.com/index.html'], ['Dépôt', GH + 'JunRoot29/Site-Ufhb.git']]],
  ['Analyse DHCP DORA IPv4 vs IPv6', 'security', "Analyse comparative du processus DORA entre IPv4 et IPv6 via captures Wireshark (broadcast vs multicast).", ['DHCP', 'Wireshark', 'Kathara'], [['Dépôt', GH + 'JunRoot29/Projet-DHCP-Analyse-du-processus-DORA-IPv4-vs-IPv6-.git'], ['Rapport', doc('TP – DHCP.pdf')]], ['Comparaison des échanges DHCPv4 et DHCPv6', 'Observation du broadcast IPv4 et du multicast IPv6', 'Analyse à partir de captures Wireshark']],
  ['Supervision réseau Centreon', 'security', "Supervision réseau complète avec Centreon dans un environnement VMware (3 serveurs).", ['Centreon', 'SNMP', 'VMware', 'Postfix'], [['Rapport', doc('centreon.pdf')]]],
  ['Gestion de Bibliothèque', 'web', "Application Flask/SQLite : comptes, catalogue, emprunts, réservations, rôles admin/usager et dashboards avec alertes.", ['Python', 'Flask', 'SQLite'], [['Dépôt', GH + 'JunRoot29/Gestion-d-une-Bibliotheque.git'], ['Rapport', doc('RAPPORT DU PROJETGESTION DE BIBLIOTHEQUE.pdf')]], ['Gestion des rôles administrateur et usager', 'Suivi des emprunts et réservations', 'Tableau de bord avec alertes et recherche']],
  ['MathCraft Web', 'web', "Plateforme web de mathématiques numériques avec API Flask : théorie des nombres, intégration numérique, interpolation de Lagrange.", ['Python', 'Flask', 'API REST'], []],
  ['MathCraft Tkinter', 'web', "Calculatrice moderne avec interface graphique Python et Tkinter.", ['Python', 'Tkinter', 'GUI'], [['Dépôt', GH + 'JunRoot29/MathCraft.git']]],
];
const CISCO = [['Intro. Cybersécurité', 'd'], ['Networking Basics', 'd'], ['Devices & Config.', 'd'], ['Endpoint Security', 'a'], ['Network Defense', ''], ['Threat Management', '']];
const TIMELINE = [
  ['2026 – 2027', 'Master 1 en Sciences Informatiques', 'Spécialité RIST · Université Félix Houphouët-Boigny, Abidjan · Rentrée après le stage'],
  ['Août – Nov. 2026', 'Stage — BSS Intern (Base Station System)', 'ZTE Corporation · Supervision, optimisation et support des systèmes BSS du réseau radio.'],
  ['2025 – 2026', 'Licence 3 en Sciences Informatiques', 'Spécialité RIST · Université Félix Houphouët-Boigny, Abidjan'],
  ['2024 – 2025', 'Licence 2 (DEUG II) en Sciences Informatiques', 'UFR de Mathématique et Informatique · UFHB, Abidjan'],
  ['2023 – 2024', 'Licence 1 (DEUG I) Mathématique et Application', 'UFR de Mathématique et Informatique · UFHB, Abidjan'],
  ['2021 – 2022', 'Baccalauréat Série D — Scientifique', 'Lycée Moderne de Port-Bouet, Abidjan'],
];
const CB = 'https://www.credly.com/badges/';
const CERTS = [
  ['Fortinet Certified Fundamentals (FCF) SP', 'Fortinet · 05 mai 2026', CB + 'c38d412e-5904-41db-b90b-c3bc70bea70b/public_url'],
  ['Networking Devices and Initial Configuration', 'Cisco · févr. 2026', CB + '8c8edaf0-68df-4063-8944-5a7971641e2b/public_url'],
  ['Networking Basics', 'Cisco · août 2025', CB + 'b562b818-ab4f-4ed0-b8e1-c3a5b98187b6/public_url'],
  ['Introduction to Cybersecurity', 'Cisco · avr. 2024', CB + '7351de4b-d897-499a-ac6f-2ee02b128fec/public_url'],
  ['Premiers pas avec Cisco Packet Tracer', 'Cisco · 03 août 2026', ''],
  ['Junior Cybersecurity Analyst', 'Cisco · en cours', null],
  ['Python Certification', 'En préparation', null],
  ['Sécurité des Terminaux', 'En préparation', null],
];
const STACK = ['Python', 'Cybersécurité', 'Réseaux', 'Wireshark', 'Docker', 'AWS', 'Linux', 'MQTT', 'Cisco', 'Fortinet', 'CTF', 'Java'];

/* ── RENDU ── */
const h = (s) => s.replace(/&/g, '&amp;');
$('.track').innerHTML = [...STACK, ...STACK].map((t) => `<span>${t}</span>`).join('');
$('#skills').innerHTML = Object.entries(SKILLS).map(([t, l]) => `<div><h3>${h(t)}</h3>${l.map(([n, v]) => `<div class="sk"><div><span>${h(n)}</span><span>${v}%</span></div><i role="progressbar" aria-label="${h(n)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${v}" style="--l:${v / 100}"></i></div>`).join('')}</div>`).join('');
$('#filters').innerHTML = [['all', 'Tous'], ...Object.entries(CATS)].map(([k, v], i) => `<button data-f="${k}" class="${i ? '' : 'on'}">${v}</button>`).join('');
$('#projects').innerHTML = PROJECTS.map(([t, c, d, tech, links, details = []], i) => `<article class="pj" data-c="${c}"><button aria-expanded="false"><span class="n mono">${String(i + 1).padStart(2, '0')}</span><h3>${h(t)}</h3><span class="c mono">${CATS[c]}</span><span class="pl"></span></button><div class="pb"><div><p>${h(d)}</p>${details.length ? `<ul class="project-highlights">${details.map((item) => `<li>${h(item)}</li>`).join('')}</ul>` : ''}<div class="tech mono">${tech.map((x) => `<span>${x}</span>`).join('')}</div><div class="links">${links.length ? links.map(([l, u]) => `<a href="${u}" target="_blank" rel="noreferrer">${l} ↗</a>`).join('') : '<span class="muted">Démo privée en préparation</span>'}</div></div></div></article>`).join('');
$('#cisco').innerHTML = CISCO.map(([n, s]) => `<li class="${s}">${h(n)}<small>${s === 'd' ? 'complété' : s === 'a' ? 'en cours' : 'à venir'}</small></li>`).join('');
$('#timeline').innerHTML = TIMELINE.map(([y, t, d]) => `<li class="rv"><span class="y mono">${y}</span><h3>${h(t)}</h3><p>${h(d)}</p></li>`).join('');
$('#certs').innerHTML = CERTS.map(([t, m, u]) => `<li class="rv${u === null ? ' p' : ''}"><h3>${h(t)}</h3><span class="mono">${m}</span>${u ? `<a class="mono" href="${u}" target="_blank" rel="noreferrer">Voir sur Credly ↗</a>` : `<span class="mono">${u === null ? 'Bientôt disponible' : 'Lien à venir'}</span>`}</li>`).join('');

/* ── THÈME ── */
const root = document.documentElement;
const themeColor = $('meta[name="theme-color"]');
const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem('jjka-theme', theme);
  themeColor.content = theme === 'light' ? '#ffffff' : '#081020';
  $('#theme').setAttribute('aria-checked', String(theme === 'dark'));
  $('#theme').title = theme === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair';
};
setTheme(localStorage.getItem('jjka-theme') === 'dark' ? 'dark' : 'light');
$('#theme').onclick = () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');

/* ── MENU MOBILE ── */
const burger = $('#burger'), menu = $('#menu'), mobileNav = matchMedia('(max-width: 900px)');
const mainContent = $('main'), footer = $('footer');
const setMenuOpen = (open, restoreFocus = false) => {
  const isOpen = open && mobileNav.matches;
  const isClosedMobile = mobileNav.matches && !isOpen;
  menu.classList.toggle('open', isOpen);
  menu.inert = isClosedMobile;
  isClosedMobile ? menu.setAttribute('aria-hidden', 'true') : menu.removeAttribute('aria-hidden');
  burger.setAttribute('aria-expanded', String(isOpen));
  mainContent.inert = isOpen;
  footer.inert = isOpen;
  if (isOpen) $('a', menu).focus();
  else if (restoreFocus) burger.focus();
};
setMenuOpen(false);
burger.onclick = () => setMenuOpen(burger.getAttribute('aria-expanded') !== 'true');
$$('#menu a').forEach((a) => a.addEventListener('click', () => {
  const target = $(a.getAttribute('href'));
  setMenuOpen(false);
  const focusTarget = target?.querySelector('.label, h1') || target;
  if (focusTarget) {
    focusTarget.setAttribute('tabindex', '-1');
    requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
  }
}));
addEventListener('keydown', (e) => e.key === 'Escape' && setMenuOpen(false, true));
mobileNav.addEventListener('change', () => setMenuOpen(false));

/* ── PROJETS : accordéon + filtre ── */
$$('.pj > button').forEach((b) => b.addEventListener('click', () => {
  const p = b.parentElement, o = p.classList.toggle('open');
  b.setAttribute('aria-expanded', o);
}));
$$('#filters button').forEach((b) => b.addEventListener('click', () => {
  $$('#filters button').forEach((x) => x.classList.toggle('on', x === b));
  const f = b.dataset.f;
  $$('.pj').forEach((p) => p.classList.toggle('off', f !== 'all' && p.dataset.c !== f));
}));

/* ── RÉVÉLATIONS, BARRES, COMPTEURS ── */
const count = (el) => {
  const n = +el.dataset.n; let t0;
  const step = (t) => { t0 ??= t; const k = Math.min((t - t0) / 1500, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); k < 1 && requestAnimationFrame(step); };
  reduce ? (el.textContent = n) : requestAnimationFrame(step);
};
$$('.about-x, .stats').forEach(() => {});
$$('.sec h2, .sec .two > div, .cisco, form').forEach((el) => el.classList.add('rv'));
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const t = e.target;
  t.classList.add('in');
  if (t.matches('.stats')) $$('b', t).forEach(count);
  if (t.matches('.skills')) t.classList.add('in');
  io.unobserve(t);
}), { threshold: 0.15 });
$$('.rv, .stats, .skills').forEach((el, i) => { if (el.classList.contains('rv')) el.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(el); });

/* ── SCROLL : progression, nav, ligne de timeline ── */
const bar = $('.progress'), nav = $('.nav'), tl = $('#timeline');
const links = $$('#menu a');
const secs = links.map((a) => $(a.getAttribute('href')));
const onScroll = () => {
  const max = root.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  nav.classList.toggle('scrolled', scrollY > 40);
  const r = tl.getBoundingClientRect();
  tl.style.setProperty('--p', Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height)));
  const mid = scrollY + innerHeight * 0.4;
  secs.forEach((s, i) => links[i].classList.toggle('on', mid >= s.offsetTop && mid < s.offsetTop + s.offsetHeight));
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── SPOTLIGHT + BOUTONS MAGNÉTIQUES ── */
if (!reduce && matchMedia('(hover:hover)').matches) {
  const spot = $('.spot');
  addEventListener('pointermove', (e) => { spot.style.setProperty('--mx', e.clientX + 'px'); spot.style.setProperty('--my', e.clientY + 'px'); });
  $$('.mag').forEach((b) => {
    b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`; });
    b.addEventListener('pointerleave', () => (b.style.transform = ''));
  });
}

/* ── FORMULAIRE (EmailJS + repli mailto) ── */
const toast = $('.toast');
const say = (m) => { toast.textContent = m; toast.classList.add('on'); setTimeout(() => toast.classList.remove('on'), 2800); };
$('#form-note').textContent = hasEmailJsConfig ? 'Votre message sera envoyé directement depuis ce formulaire.' : 'Sans configuration EmailJS, votre application e-mail s’ouvrira avec le message prérempli.';
$('#form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const f = e.target, btn = $('#send');
  if (!f.reportValidity()) return;
  const data = { from_name: f.from_name.value.trim(), reply_to: f.reply_to.value.trim(), message: f.message.value.trim() };
  if (!data.from_name || !data.reply_to || !data.message) return say('Merci de remplir tous les champs.');
  const mailto = `mailto:junioragbenonzan31@gmail.com?subject=${encodeURIComponent('Contact portfolio – ' + data.from_name)}&body=${encodeURIComponent(`Nom: ${data.from_name}\nEmail: ${data.reply_to}\n\n${data.message}`)}`;
  if (!window.emailjs || !hasEmailJsConfig) {
    say('Ouverture de votre application email…');
    location.href = mailto;
    return;
  }
  btn.disabled = true; $('span', btn).textContent = 'Envoi…';
  try {
    await emailjs.send(EMAILJS.service, EMAILJS.template, data);
    say('Message envoyé avec succès.'); f.reset();
  } catch (err) {
    console.error('EmailJS error:', err);
    location.href = mailto;
    say('Ouverture de votre application email…');
  } finally { btn.disabled = false; $('span', btn).textContent = 'Envoyer'; }
});
