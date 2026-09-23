// One list, used by the home page and the About page.
// `icon` is a simple-icons slug, or a key of `generic` in SkillIcon.astro.
// `used` names the projects the skill was actually used in (shown on hover/focus). Keep it honest:
// only projects on the site or the CV. Tags: JustBook, Flagdown, APElevate, Coursework, NeuroSolis, Portfolio.
export interface Skill { name: string; icon: string; used?: string[] }
export interface SkillGroup { title: string; items: Skill[] }

const JB = 'JustBook', FD = 'Flagdown', AP = 'APElevate', CW = 'Coursework', NS = 'NeuroSolis', PF = 'Portfolio';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'python', used: [JB, AP, CW] },
      { name: 'Go', icon: 'go', used: [FD] },
      { name: 'SQL', icon: 'db', used: [JB, AP, CW] },
      { name: 'TypeScript', icon: 'typescript', used: [FD, PF] },
      { name: 'JavaScript', icon: 'javascript', used: [JB, NS] },
      { name: 'Java', icon: 'openjdk', used: [CW] },
      { name: 'C++', icon: 'cplusplus', used: [CW] },
      { name: 'C', icon: 'c', used: [CW] },
      { name: 'R', icon: 'r', used: [CW] },
      { name: 'Bash', icon: 'gnubash', used: [JB, FD] },
    ],
  },
  {
    title: 'Backend and data',
    items: [
      { name: 'Flask', icon: 'flask', used: [JB] },
      { name: 'Django', icon: 'django', used: [AP] },
      { name: 'SQLAlchemy', icon: 'sqlalchemy', used: [JB] },
      { name: 'PostgreSQL', icon: 'postgresql', used: [JB, AP] },
      { name: 'MySQL', icon: 'mysql', used: [CW] },
      { name: 'Redis', icon: 'redis', used: [FD] },
      { name: 'MongoDB', icon: 'mongodb', used: [FD] },
      { name: 'gRPC', icon: 'rpc', used: [FD, CW] },
      { name: 'Kafka', icon: 'apachekafka', used: [FD, CW] },
      { name: 'RabbitMQ', icon: 'rabbitmq', used: [FD] },
      { name: 'Spark', icon: 'apachespark', used: [CW] },
      { name: 'Cassandra', icon: 'apachecassandra', used: [CW] },
      { name: 'HDFS', icon: 'apachehadoop', used: [CW] },
      { name: 'BigQuery', icon: 'googlebigquery', used: [CW] },
      { name: 'Postman', icon: 'postman', used: [JB] },
    ],
  },
  {
    title: 'AI and LLM',
    items: [
      { name: 'LLM evaluation', icon: 'test', used: [AP] },
      { name: 'Structured outputs (JSON schema)', icon: 'rpc', used: [AP] },
      { name: 'Open-weights models (gpt-oss, Qwen)', icon: 'cloud', used: [AP] },
      { name: 'OpenAI-compatible APIs', icon: 'rpc', used: [AP] },
      { name: 'Groq', icon: 'cloud', used: [AP] },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Kubernetes', icon: 'kubernetes', used: [FD] },
      { name: 'Docker', icon: 'docker', used: [FD, AP, CW] },
      { name: 'Terraform', icon: 'terraform', used: [AP] },
      { name: 'Linux', icon: 'linux', used: [JB, FD] },
      { name: 'GitHub Actions', icon: 'githubactions', used: [JB, FD, AP, PF] },
      { name: 'Prometheus', icon: 'prometheus', used: [FD] },
      { name: 'Grafana', icon: 'grafana', used: [FD] },
      { name: 'OpenTelemetry', icon: 'opentelemetry', used: [FD] },
      { name: 'Cloudflare Workers', icon: 'cloudflareworkers', used: [JB] },
      { name: 'AWS S3', icon: 'bucket', used: [JB] },
      { name: 'AWS SES', icon: 'mail', used: [JB] },
      { name: 'AWS CloudFront', icon: 'globe', used: [JB] },
      { name: 'AWS SNS', icon: 'bell', used: [JB] },
      { name: 'Google Cloud Run', icon: 'googlecloud', used: [AP] },
      { name: 'Google Cloud', icon: 'googlecloud', used: [AP, CW] },
      { name: 'Render', icon: 'render', used: [JB] },
      { name: 'Sentry', icon: 'sentry', used: [JB] },
    ],
  },
  {
    title: 'Frontend and mobile',
    items: [
      { name: 'React', icon: 'react', used: [JB] },
      { name: 'Next.js', icon: 'nextdotjs', used: [FD] },
      { name: 'Vite', icon: 'vite', used: [JB] },
      { name: 'Astro', icon: 'astro', used: [PF, JB] },
      { name: 'htmx', icon: 'htmx', used: [AP] },
      { name: 'React Native', icon: 'react', used: [CW] },
      { name: 'Capacitor', icon: 'capacitor', used: [JB] },
      { name: 'Playwright', icon: 'test', used: [JB] },
      { name: 'Vitest', icon: 'vitest', used: [JB] },
      { name: 'pytest', icon: 'pytest', used: [JB, AP] },
      { name: 'Figma', icon: 'figma', used: [JB] },
    ],
  },
  {
    title: 'Payments and security',
    items: [
      { name: 'Stripe', icon: 'stripe', used: [JB] },
      { name: 'PayPal', icon: 'paypal', used: [AP] },
      { name: 'Twilio', icon: 'msg', used: [JB] },
      { name: 'JWT', icon: 'jsonwebtokens', used: [JB] },
      { name: 'Passkeys', icon: 'webauthn', used: [JB] },
      { name: 'TOTP', icon: 'key', used: [JB] },
      { name: 'RBAC', icon: 'shield', used: [JB, AP] },
    ],
  },
];

// Names used in project stack lists that differ from the skill names above.
const aliases: Record<string, string> = {
  'React 19': 'react',
  'Stripe Connect': 'stripe',
  Jaeger: 'jaeger',
  'Tailwind CSS': 'tailwindcss',
  Leaflet: 'leaflet',
  MapLibre: 'maplibre',
  'Django 5.2': 'django',
};

const byName = new Map(skillGroups.flatMap((g) => g.items).map((s) => [s.name, s.icon]));
export const iconFor = (name: string): string | undefined => aliases[name] ?? byName.get(name);
