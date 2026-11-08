:root {
  --bg: #0b1020;
  --bg-soft: #111827;
  --panel: rgba(17, 24, 39, 0.92);
  --panel-soft: rgba(15, 23, 42, 0.7);
  --border: rgba(148, 163, 184, 0.18);
  --text: #e5eefb;
  --muted: #9aa7bf;
  --primary: #7c9cff;
  --primary-2: #8ef0d1;
  --accent: #f5a524;
  --shadow: rgba(15, 23, 42, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 156, 255, 0.2), transparent 28%),
    radial-gradient(circle at bottom right, rgba(142, 240, 209, 0.14), transparent 32%),
    var(--bg);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
  max-width: 1500px;
  margin: 0 auto;
  padding: 24px;
  gap: 24px;
}

.sidebar,
.panel,
.hero-panel,
.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: 0 18px 40px var(--shadow);
}

.sidebar {
  border-radius: 28px;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding: 8px 10px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
  color: #08111d;
}

.eyebrow {
  margin: 0 0 4px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
}

h1, h2, h3, h4, p {
  margin: 0;
}

h2 {
  font-size: clamp(1.8rem, 2vw, 2.6rem);
  line-height: 1.1;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
}

.nav-item {
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  color: var(--text);
  text-align: left;
  padding: 12px 14px;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-item.active {
  background: rgba(124, 156, 255, 0.12);
  border-color: rgba(124, 156, 255, 0.28);
}

.nav-item:hover {
  background: rgba(148, 163, 184, 0.08);
}

.mini-card {
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.12), rgba(142, 240, 209, 0.12));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 16px;
}

.progress {
  margin-top: 16px;
}

.progress > span {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
}

.progress-bar {
  position: relative;
  height: 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.progress-bar i {
  position: absolute;
  inset: 0 auto 0 0;
  background: linear-gradient(90deg, var(--primary), var(--primary-2));
  border-radius: inherit;
}

.main-panel {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.topbar,
.panel-header,
.stat-row,
.pipeline-head,
.hero-panel,
.topbar-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar {
  gap: 16px;
}

.topbar-actions {
  gap: 12px;
}

.ghost-btn,
.primary-btn,
.link-btn {
  border-radius: 12px;
  padding: 10px 16px;
  border: 1px solid var(--border);
  cursor: pointer;
}

.ghost-btn {
  background: transparent;
  color: var(--text);
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #a78bfa);
  border: none;
  color: white;
  font-weight: 700;
}

.hero-panel {
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.14), rgba(15, 23, 42, 0.92));
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 28px;
  gap: 18px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(142, 240, 209, 0.14);
  color: var(--primary-2);
  border: 1px solid rgba(142, 240, 209, 0.15);
}

.hero-copy {
  max-width: 620px;
}

.hero-copy p {
  margin-top: 14px;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
}

.hero-metrics {
  display: grid;
  gap: 12px;
  min-width: 220px;
}

.metric-tag {
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px 16px;
  background: rgba(15, 23, 42, 0.5);
}

.metric-tag span,
.metric-tag strong {
  display: block;
}

.metric-tag span {
  color: var(--muted);
  margin-bottom: 8px;
}

.metric-tag strong {
  font-size: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card {
  border-radius: 22px;
  padding: 18px 16px;
}

.stat-card p {
  color: var(--muted);
  font-size: 0.85rem;
}

.stat-row {
  margin-top: 12px;
}

.stat-row h3 {
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.stat-row span {
  color: var(--primary-2);
  font-weight: 600;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.9fr);
  gap: 18px;
}

.panel {
  border-radius: 24px;
  padding: 20px;
}

.wide-panel {
  min-height: 330px;
}

.panel-header {
  margin-bottom: 18px;
}

.link-btn {
  background: transparent;
  color: var(--primary-2);
  border-color: rgba(142, 240, 209, 0.2);
}

.pipeline-list,
.insights-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pipeline-item {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.46);
  padding: 16px;
}

.pipeline-head {
  margin-bottom: 12px;
}

.pipeline-head h4 {
  font-size: 1.05rem;
}

.pipeline-head small,
.percent-label {
  color: var(--muted);
}

.compact {
  height: 8px;
}

.insight-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 12px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.44);
}

.dot {
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-2));
}

.insight-item p {
  line-height: 1.6;
  color: var(--text);
}

.bottom-panel {
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 16px 10px;
  border-bottom: 1px solid var(--border);
}

th {
  color: var(--muted);
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 600;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 600;
  border: 1px solid transparent;
}

.status-badge.scheduled,
.status-badge.ready,
.status-badge.planned {
  background: rgba(142, 240, 209, 0.12);
  color: var(--primary-2);
  border-color: rgba(142, 240, 209, 0.18);
}

.status-badge.drafting,
.status-badge.review {
  background: rgba(245, 165, 36, 0.12);
  color: #f8c55d;
  border-color: rgba(245, 165, 36, 0.18);
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
    padding: 16px;
  }

  .sidebar {
    padding: 20px 16px;
  }

  .content-grid,
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-panel,
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .stats-grid,
  .content-grid {
    grid-template-columns: 1fr;
  }

  th:nth-child(3),
  td:nth-child(3),
  th:nth-child(5),
  td:nth-child(5) {
    display: none;
  }
}
