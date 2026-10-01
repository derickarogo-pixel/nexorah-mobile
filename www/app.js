* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-deep: #030b15;
  --panel: rgba(13, 25, 39, 0.9);
  --panel-alt: rgba(17, 30, 46, 0.75);
  --card: #0d1a2a;
  --line: rgba(148, 163, 184, 0.18);
  --text: #eaf3ff;
  --muted: #9bb1c9;
  --primary: #63d0ff;
  --primary-2: #7a7cff;
  --green: #5ee7a9;
  --gold: #f7c76b;
  --red: #ff6b7d;
  --cyan: #7fe9ff;
  --shadow: 0 24px 60px rgba(2, 6, 23, 0.62);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(99, 208, 255, 0.14), transparent 28%),
    radial-gradient(circle at top right, rgba(122, 124, 255, 0.16), transparent 25%),
    linear-gradient(160deg, #030b15 0%, #07111f 34%, #071827 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button {
  font: inherit;
  cursor: pointer;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(18px);
  background: rgba(3, 11, 21, 0.7);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.brand-mark {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #06131d;
  box-shadow: 0 10px 30px rgba(99, 208, 255, 0.4);
}

.brand-text {
  font-size: 0.78rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.main-nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn {
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0.82rem 1.2rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #041521;
  box-shadow: 0 18px 30px rgba(99, 208, 255, 0.3);
}

.btn-secondary {
  background: rgba(148, 163, 184, 0.06);
  border-color: var(--line);
  color: var(--text);
}

.hero {
  padding: 72px 0 36px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 42px;
}

.eyebrow {
  display: inline-flex;
  padding: 0.45rem 0.8rem;
  border: 1px solid rgba(127, 233, 255, 0.25);
  background: rgba(127, 233, 255, 0.05);
  color: var(--cyan);
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 20px 0 18px;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin: 0;
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
}

.cta-row {
  display: flex;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.key-points {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 18px 28px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.key-points li {
  position: relative;
  padding-left: 18px;
}

.key-points li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), var(--cyan));
}

.hero-panel {
  background: rgba(9, 20, 31, 0.9);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.panel-label {
  margin: 0;
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.panel-header h2 {
  margin: 8px 0 0;
  font-size: 1.55rem;
}

.status-dot {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  background: rgba(94, 231, 169, 0.12);
  color: var(--green);
  border: 1px solid rgba(94, 231, 169, 0.25);
  padding: 0.42rem 0.72rem;
  font-size: 0.76rem;
  font-weight: 700;
}

.status-dot::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px rgba(94, 231, 169, 0.9);
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 14px;
}

.metric-box {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(17, 30, 46, 0.8);
  padding: 18px 16px;
}

.metric-box.accent {
  background: linear-gradient(135deg, rgba(99, 208, 255, 0.12), rgba(122, 124, 255, 0.1));
}

.metric-box span {
  display: block;
  color: var(--muted);
  font-size: 0.78rem;
}

.metric-box strong {
  display: block;
  margin-top: 10px;
  font-size: 1.8rem;
  letter-spacing: -0.04em;
}

.activity-list {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}

.activity-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px 14px;
  background: rgba(15, 26, 39, 0.8);
}

.activity-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.42rem 0.6rem;
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.activity-tag.threat {
  background: rgba(99, 208, 255, 0.12);
  color: var(--cyan);
}

.activity-tag.guard {
  background: rgba(94, 231, 169, 0.12);
  color: var(--green);
}

.activity-tag.detect {
  background: rgba(247, 199, 107, 0.12);
  color: var(--gold);
}

.activity-item strong {
  display: block;
  font-size: 0.97rem;
}

.activity-item small {
  color: var(--muted);
}

.trust-strip {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(9, 19, 30, 0.55);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(120px, 1fr));
  gap: 16px;
  text-align: center;
  padding: 18px 0;
  color: var(--muted);
  font-weight: 600;
}

.section {
  padding: 110px 0;
}

.alt-section {
  background: rgba(5, 14, 24, 0.62);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2 {
  margin: 16px 0 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
  max-width: 760px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 22px;
}

.feature-card,
.module-card,
.workflow-step,
.security-card,
.testimonial-card {
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 26px 22px;
  background: rgba(11, 22, 32, 0.82);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.icon-wrap {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-size: 0.84rem;
  font-weight: 800;
  margin-bottom: 18px;
}

.icon-wrap.cyan {
  background: rgba(127, 233, 255, 0.14);
  color: var(--cyan);
}

.icon-wrap.purple {
  background: rgba(122, 124, 255, 0.14);
  color: #b8b8ff;
}

.icon-wrap.gold {
  background: rgba(247, 199, 107, 0.14);
  color: var(--gold);
}

.icon-wrap.red {
  background: rgba(255, 107, 125, 0.14);
  color: var(--red);
}

.feature-card h3,
.module-card h3,
.workflow-step h3,
.security-card h3 {
  margin: 0 0 10px;
  font-size: 1.22rem;
}

.feature-card p,
.module-card li,
.workflow-step p,
.security-card p,
.testimonial-card p,
.footer p {
  color: var(--muted);
  line-height: 1.72;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 22px;
}

.module-card ul {
  padding-left: 18px;
  margin: 0;
  display: grid;
  gap: 10px;
}

.workflow {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
}

.workflow-step {
  position: relative;
  min-height: 200px;
}

.workflow-step span {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(99, 208, 255, 0.12);
  color: var(--cyan);
  font-weight: 800;
  margin-bottom: 16px;
}

.governance-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: center;
}

.check-list {
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
  color: var(--text);
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--muted);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 800;
}

.security-card {
  background: linear-gradient(160deg, rgba(14, 27, 41, 0.95), rgba(8, 18, 28, 0.96));
}

.mini-badge {
  display: inline-flex;
  background: rgba(94, 231, 169, 0.12);
  color: var(--green);
  border: 1px solid rgba(94, 231, 169, 0.22);
  border-radius: 999px;
  padding: 0.42rem 0.72rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.security-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 12px;
  margin-top: 24px;
}

.security-metrics div {
  background: rgba(148, 163, 184, 0.04);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 12px;
}

.security-metrics strong {
  display: block;
  font-size: 1.4rem;
}

.security-metrics small {
  color: var(--muted);
}

.testimonial-section {
  padding-top: 0;
}

.testimonial-card {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
}

.testimonial-card p {
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.5;
  margin: 0 0 22px;
  letter-spacing: -0.04em;
  color: var(--text);
}

.author-block strong,
.author-block span {
  display: block;
}

.author-block span {
  margin-top: 4px;
  color: var(--muted);
}

.footer {
  padding: 18px 0 32px;
  border-top: 1px solid var(--line);
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.footer p {
  margin: 0;
}

.footer-link {
  color: var(--cyan);
  text-decoration: none;
}

@media (max-width: 980px) {
  .hero-grid,
  .governance-grid,
  .feature-grid,
  .modules-grid,
  .workflow {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 700px) {
  .feature-grid,
  .modules-grid,
  .workflow,
  .trust-grid,
  .security-metrics,
  .metric-grid {
    grid-template-columns: 1fr;
  }

  .nav-wrap {
    flex-wrap: wrap;
    padding: 16px 0;
  }

  .nav-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .hero {
    padding-top: 48px;
  }

  .section {
    padding: 80px 0;
  }

  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
