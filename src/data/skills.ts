// One list, used by the home page and the About page.
// `icon` is a simple-icons slug, or a key of `generic` in SkillIcon.astro.
export interface Skill { name: string; icon: string }
export interface SkillGroup { title: string; items: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Go', icon: 'go' },
      { name: 'SQL', icon: 'db' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C', icon: 'c' },
      { name: 'R', icon: 'r' },
      { name: 'Bash', icon: 'gnubash' },
    ],
  },
  {
    title: 'Backend and data',
    items: [
      { name: 'Flask', icon: 'flask' },
      { name: 'SQLAlchemy', icon: 'sqlalchemy' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'gRPC', icon: 'rpc' },
      { name: 'Kafka', icon: 'apachekafka' },
      { name: 'RabbitMQ', icon: 'rabbitmq' },
      { name: 'Spark', icon: 'apachespark' },
      { name: 'Cassandra', icon: 'apachecassandra' },
      { name: 'HDFS', icon: 'apachehadoop' },
      { name: 'BigQuery', icon: 'googlebigquery' },
      { name: 'Postman', icon: 'postman' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'OpenTelemetry', icon: 'opentelemetry' },
      { name: 'Cloudflare Workers', icon: 'cloudflareworkers' },
      { name: 'AWS S3', icon: 'bucket' },
      { name: 'AWS SES', icon: 'mail' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'Render', icon: 'render' },
      { name: 'Sentry', icon: 'sentry' },
    ],
  },
  {
    title: 'Frontend and mobile',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Astro', icon: 'astro' },
      { name: 'React Native', icon: 'react' },
      { name: 'Capacitor', icon: 'capacitor' },
      { name: 'Playwright', icon: 'test' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'pytest', icon: 'pytest' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    title: 'Payments and security',
    items: [
      { name: 'Stripe', icon: 'stripe' },
      { name: 'Twilio', icon: 'msg' },
      { name: 'JWT', icon: 'jsonwebtokens' },
      { name: 'Passkeys', icon: 'webauthn' },
      { name: 'TOTP', icon: 'key' },
      { name: 'RBAC', icon: 'shield' },
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
};

const byName = new Map(skillGroups.flatMap((g) => g.items).map((s) => [s.name, s.icon]));
export const iconFor = (name: string): string | undefined => aliases[name] ?? byName.get(name);
