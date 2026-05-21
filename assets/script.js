/* Kaviya A · Portfolio · scripts
   Vanilla JS: scroll reveal + nav highlight + small flourishes */

(function () {
  'use strict';

  /* ───── Scroll reveal ───── */
  const revealTargets = document.querySelectorAll(
    '.hero-title .line, .hero-lede, .hero-actions, ' +
    '.section-tag, .section-title, .summary-lead, .summary-body, .summary-stats li, ' +
    '.portrait-frame, .portrait-details, ' +
    '.about-title, .about-body, .traits li, ' +
    '.job, .logo-cell, .skill-col, .project, ' +
    '.cta-title, .cta-row, .footer-grid'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // small stagger so sibling reveals feel intentional
            const delay = (entry.target.dataset.delay
              ? parseInt(entry.target.dataset.delay, 10)
              : i * 40);
            setTimeout(() => entry.target.classList.add('in'), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('in'));
  }

  /* ───── Active nav link based on scroll position ───── */
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function setActive() {
    let current = '';
    const scrollY = window.scrollY + 120;
    sections.forEach((s) => {
      if (scrollY >= s.offsetTop) current = s.id;
    });
    navAnchors.forEach((a) => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === '#' + current);
    });
  }
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  /* ───── Subtle tilt on portrait ───── */
  const portrait = document.querySelector('.portrait-card');
  if (portrait && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    portrait.addEventListener('mousemove', (e) => {
      const r = portrait.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      portrait.style.transform =
        `rotate(${-1.4 + x * 2}deg) translate(${x * 4}px, ${y * 4}px)`;
    });
    portrait.addEventListener('mouseleave', () => {
      portrait.style.transform = '';
    });
  }

  /* ───── Auto-upgrade logo cells if real PNGs exist on disk ───── */
  document.querySelectorAll('.logo-cell[data-logo]').forEach((cell) => {
    const key = cell.getAttribute('data-logo');
    const probe = new Image();
    probe.onload = () => {
      const fallback = cell.querySelector('.logo-fallback');
      if (fallback) fallback.remove();
      probe.alt = cell.getAttribute('data-tooltip') || key;
      cell.prepend(probe);
    };
    probe.onerror = () => { /* keep monogram fallback */ };
    probe.src = `assets/logos/${key}.png`;
  });

  /* ───── Year (if ever swapped) ───── */
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
