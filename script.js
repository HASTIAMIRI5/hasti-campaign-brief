const stats = [
  { label: 'Qualified leads', value: '14.8k', trend: '+24%' },
  { label: 'Content ideas', value: '128', trend: '+18%' },
  { label: 'Campaign ROI', value: '3.7x', trend: '+9%' },
  { label: 'Engagement rate', value: '8.4%', trend: '+12%' },
];

const pipeline = [
  { title: 'Brand awareness', progress: 86, amount: '$18.2k', status: 'Scaling' },
  { title: 'Lead generation', progress: 72, amount: '$12.4k', status: 'Optimizing' },
  { title: 'Product launch', progress: 64, amount: '$9.1k', status: 'In review' },
  { title: 'Retention sequence', progress: 51, amount: '$6.7k', status: 'Drafting' },
];

const insights = [
  'Short-form video is outperforming email by 21% in click-through performance.',
  'Customer success stories are projected to generate the strongest conversion lift this month.',
  'Audience segments in the 25–34 range are responding well to founder-led storytelling.',
  'Publishing 3 topic clusters around AI workflows is likely to improve branded search demand.',
];

const calendar = [
  { channel: 'LinkedIn', theme: 'AI workflow case study', owner: 'Nadia', date: 'Nov 11', status: 'Scheduled' },
  { channel: 'Email', theme: 'Customer retention playbook', owner: 'Alex', date: 'Nov 12', status: 'Drafting' },
  { channel: 'Instagram', theme: 'Behind-the-scenes creator reel', owner: 'Sara', date: 'Nov 14', status: 'Planned' },
  { channel: 'YouTube', theme: 'Product education explainer', owner: 'Hasti', date: 'Nov 17', status: 'Review' },
  { channel: 'Newsletter', theme: 'Weekly trend roundup', owner: 'Milo', date: 'Nov 19', status: 'Ready' },
];

const statsContainer = document.getElementById('stats');
const pipelineContainer = document.getElementById('pipeline');
const insightsContainer = document.getElementById('insights');
const calendarBody = document.getElementById('calendar-body');

stats.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'stat-card';
  card.innerHTML = `
    <p>${item.label}</p>
    <div class="stat-row">
      <h3>${item.value}</h3>
      <span>${item.trend}</span>
    </div>
  `;
  statsContainer.appendChild(card);
});

pipeline.forEach((item) => {
  const row = document.createElement('div');
  row.className = 'pipeline-item';
  row.innerHTML = `
    <div class="pipeline-head">
      <div>
        <h4>${item.title}</h4>
        <small>${item.status}</small>
      </div>
      <strong>${item.amount}</strong>
    </div>
    <div class="progress-bar compact">
      <i style="width: ${item.progress}%"></i>
    </div>
    <span class="percent-label">${item.progress}% complete</span>
  `;
  pipelineContainer.appendChild(row);
});

insights.forEach((item) => {
  const insight = document.createElement('div');
  insight.className = 'insight-item';
  insight.innerHTML = `
    <div class="dot"></div>
    <p>${item}</p>
  `;
  insightsContainer.appendChild(insight);
});

calendar.forEach((item) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.channel}</td>
    <td>${item.theme}</td>
    <td>${item.owner}</td>
    <td>${item.date}</td>
    <td><span class="status-badge ${item.status.toLowerCase().replace(/\s+/g, '-')}">${item.status}</span></td>
  `;
  calendarBody.appendChild(row);
});
