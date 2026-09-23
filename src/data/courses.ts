// Every course from the UW–Madison transcript (Aug 2023 – May 2026), grouped into tracks.
// Descriptions are paraphrased from the UW–Madison Guide (guide.wisc.edu); grades are from the transcript.
export type Term = 'Transfer' | 'Fall 2023' | 'Spring 2024' | 'Summer 2024' | 'Fall 2024' | 'Spring 2025' | 'Fall 2025' | 'Spring 2026';
export const terms: Term[] = ['Transfer', 'Fall 2023', 'Spring 2024', 'Summer 2024', 'Fall 2024', 'Spring 2025', 'Fall 2025', 'Spring 2026'];
export const termShort: Record<Term, string> = {
  Transfer: 'Transfer', 'Fall 2023': 'Fall 23', 'Spring 2024': 'Spring 24', 'Summer 2024': 'Summer 24',
  'Fall 2024': 'Fall 24', 'Spring 2025': 'Spring 25', 'Fall 2025': 'Fall 25', 'Spring 2026': 'Spring 26',
};

export type TrackId = 'programming' | 'systems' | 'theory' | 'data' | 'people' | 'venture';
export interface Track { id: TrackId; label: string; tone: 'teal' | 'amber' | 'violet' | 'blue' | 'rose' | 'muted'; blurb: string; rows: number }
export const tracks: Track[] = [
  { id: 'programming', label: 'Programming', tone: 'teal', rows: 1, blurb: 'The core sequence: from writing a first program to designing a medium-sized system with the right data structures.' },
  { id: 'systems', label: 'Systems', tone: 'amber', rows: 1, blurb: 'How the machine and the database actually work: gates and assembly, then C and memory, then storage engines and distributed systems.' },
  { id: 'theory', label: 'Theory & math', tone: 'violet', rows: 1, blurb: 'The proofs and the math behind the code: calculus, linear algebra, discrete math, algorithms and AI.' },
  { id: 'data', label: 'Data science', tone: 'blue', rows: 2, blurb: 'The second degree: data programming in Python, statistical modelling in R, and causal inference.' },
  { id: 'people', label: 'Interfaces & ethics', tone: 'rose', rows: 2, blurb: 'Building for users and reasoning about what the data is used for.' },
  { id: 'venture', label: 'Entrepreneurship', tone: 'muted', rows: 1, blurb: 'The certificate that ran alongside the degrees while JustBook was being built.' },
];

export interface Course {
  code: string; // "CS 400"
  title: string;
  short: string; // label on the map
  term: Term;
  credits: number;
  grade: 'A' | 'AB' | 'T';
  track: TrackId;
  row?: number; // row inside the track on the map (0-based)
  honors?: string;
  about: string; // what the course covered, paraphrased from the Guide
  skills: string[];
  used?: { label: string; href: string }[]; // where it shows up in my work
}

export const courses: Course[] = [
  // Programming
  { code: 'CS 200', title: 'Programming I', short: 'Programming I', term: 'Transfer', credits: 3, grade: 'T', track: 'programming',
    about: 'Incremental development of small programs: variables and types, control flow, functions, I/O, basic testing and debugging, consistent style and documentation. Credit transferred in.',
    skills: ['Java', 'Program structure', 'Debugging'] },
  { code: 'CS 300', title: 'Programming II', short: 'Programming II', term: 'Fall 2023', credits: 3, grade: 'AB', track: 'programming',
    about: 'Object-oriented programming with classes, interfaces, generics and exceptions. Array-based and linked lists, stacks, queues, priority queues (heaps) and binary search trees, plus searching and sorting, in multi-class Java programs.',
    skills: ['Java', 'Object-oriented design', 'Lists, stacks, queues, heaps, BSTs', 'Generics and interfaces', 'Exception handling'] },
  { code: 'CS 400', title: 'Programming III', short: 'Programming III', term: 'Spring 2024', credits: 3, grade: 'A', track: 'programming',
    about: 'Balanced search trees, graphs and graph traversal, hash tables and sets, complexity analysis, and which problems need which structure. A medium-sized program built to professional standards with shells, source control and build tools.',
    skills: ['Balanced trees and hash tables', 'Graph algorithms', 'Complexity analysis', 'Git and build tools', 'Maintainable code'] },

  // Systems
  { code: 'CS 252', title: 'Introduction to Computer Engineering', short: 'Computer Engineering', term: 'Summer 2024', credits: 3, grade: 'A', track: 'systems',
    about: 'Logic gates built from transistors, Boolean algebra, combinational and sequential logic, basic computer organisation, and machine- and assembly-language programming.',
    skills: ['Digital logic', 'Binary representation', 'Computer organisation', 'Assembly (LC-3)'] },
  { code: 'CS 354', title: 'Machine Organization and Programming', short: 'Machine Organization', term: 'Spring 2025', credits: 3, grade: 'A', track: 'systems',
    about: 'The C language and the structures under it: the virtual address space and virtual memory, the heap and dynamic memory management, the memory hierarchy and caching, assembly and the stack, signals and interrupts, compiling, assembling and linking.',
    skills: ['C', 'Pointers and memory management', 'Caching and the memory hierarchy', 'x86 assembly and the stack', 'Signals', 'Compilers and linkers'],
    used: [{ label: 'Minirel: buffer manager and heap files in C++', href: '/about/#projects' }] },
  { code: 'CS 544', title: 'Introduction to Big Data Systems', short: 'Big Data Systems', term: 'Fall 2025', credits: 3, grade: 'A', track: 'systems',
    about: 'Deploying and using distributed systems to store and analyse large datasets: structured and unstructured storage, new query languages, streaming data, and training machine learning models on distributed platforms. Eight graded systems projects.',
    skills: ['HDFS and Parquet', 'Kafka streaming', 'Spark (RDD, DataFrame, SQL, ML)', 'Cassandra', 'BigQuery and Dataform', 'gRPC services', 'Docker', 'Measuring resource usage and cost'],
    used: [{ label: 'Big Data Systems projects', href: '/about/#projects' }, { label: 'Flagdown: Kafka driver-location pipeline', href: '/projects/flagdown/' }] },
  { code: 'CS 564', title: 'Database Management Systems: Design and Implementation', short: 'Database Systems', term: 'Spring 2026', credits: 4, grade: 'A', track: 'systems',
    about: 'What a DBMS is and how it is built: the relational model and ER design, SQL for complex queries, file organisation and indexing, query processing and optimisation, transactions, concurrency control, rollback and recovery.',
    skills: ['Relational modelling and SQL', 'Indexing and storage', 'Query optimisation', 'Transactions and concurrency control', 'Crash recovery'],
    used: [{ label: 'Minirel: LRU buffer manager and heap file manager', href: '/about/#projects' }, { label: 'JustBook: advisory locks and query budgets', href: '/projects/justbook/' }] },

  // Theory & math
  { code: 'MATH 221', title: 'Calculus and Analytic Geometry 1', short: 'Calculus 1', term: 'Transfer', credits: 5, grade: 'T', track: 'theory',
    about: 'Differential and integral calculus with plane analytic geometry and transcendental functions. Credit transferred in.',
    skills: ['Differentiation and integration'] },
  { code: 'MATH 222', title: 'Calculus and Analytic Geometry 2', short: 'Calculus 2', term: 'Fall 2023', credits: 4, grade: 'A', track: 'theory',
    about: 'Techniques of integration, improper integrals, first-order differential equations, sequences and series, Taylor series, and vector geometry in two and three dimensions.',
    skills: ['Series and Taylor expansions', 'Differential equations', 'Vector geometry'] },
  { code: 'MATH 340', title: 'Elementary Matrix and Linear Algebra', short: 'Linear Algebra', term: 'Spring 2024', credits: 3, grade: 'A', track: 'theory',
    about: 'Matrix algebra and linear systems, vector spaces and subspaces, basis and rank, determinants, linear transformations, eigenvalues and eigenvectors, diagonalisation, inner products and orthogonality.',
    skills: ['Linear systems', 'Vector spaces', 'Eigenvalues and eigenvectors'] },
  { code: 'CS 240', title: 'Introduction to Discrete Mathematics', short: 'Discrete Math', term: 'Fall 2024', credits: 3, grade: 'A', track: 'theory',
    about: 'Logic, sets, relations and functions; propositional and predicate logic; induction and recursion; invariants and algorithmic correctness; recurrences and asymptotic growth; counting; integers, strings, trees and graphs.',
    skills: ['Proofs and induction', 'Logic and Boolean algebra', 'Recurrences and asymptotics', 'Counting', 'Graphs'] },
  { code: 'CS 577', title: 'Introduction to Algorithms', short: 'Algorithms', term: 'Spring 2025', credits: 4, grade: 'A', track: 'theory', honors: 'Accelerated Honors',
    about: 'Design and analysis of efficient algorithms: greedy, divide-and-conquer, dynamic programming, reductions and randomisation, with proofs of correctness and complexity. NP-completeness and what to do about it. Taken as the accelerated honors section.',
    skills: ['Dynamic programming', 'Greedy and divide-and-conquer', 'Reductions and NP-completeness', 'Randomised algorithms', 'Correctness and complexity proofs'],
    used: [{ label: 'JustBook availability engine', href: 'https://github.com/vramaswamy4/justbook-availability-engine' }] },
  { code: 'CS 540', title: 'Introduction to Artificial Intelligence', short: 'Artificial Intelligence', term: 'Fall 2025', credits: 3, grade: 'A', track: 'theory',
    about: 'Knowledge-based search, automatic deduction, knowledge representation with predicate logic, machine learning and probabilistic reasoning, applied to problem solving, games, language, vision and robotics.',
    skills: ['Search (uninformed, informed, adversarial)', 'Machine learning fundamentals', 'Neural networks', 'Probabilistic reasoning', 'Logic and knowledge representation'] },

  // Data science
  { code: 'CS 220', title: 'Data Science Programming I', short: 'Data Sci Programming I', term: 'Spring 2024', credits: 4, grade: 'A', track: 'data', row: 0,
    about: 'Data science programming in Python from first principles, with an emphasis on analysing real datasets in many forms and communicating results visually.',
    skills: ['Python', 'Working with files, JSON and APIs', 'Tabular analysis', 'Plotting'] },
  { code: 'CS 320', title: 'Data Science Programming II', short: 'Data Sci Programming II', term: 'Fall 2024', credits: 4, grade: 'A', track: 'data', row: 0,
    about: 'Intermediate data science in Python: implementing data structures such as graphs to represent datasets, version control and virtual environments for reproducibility, tracing and A/B testing, and basic classification, clustering, optimisation and simulation.',
    skills: ['Python data structures', 'Reproducible analysis', 'A/B testing', 'Classification and clustering', 'Simulation', 'Visual communication'] },
  { code: 'STAT 240', title: 'Data Science Modeling I', short: 'DS Modeling I', term: 'Fall 2024', credits: 4, grade: 'A', track: 'data', row: 1,
    about: 'Reproducible data management, modelling and inference in R through case studies: data wrangling, graphics, probability and the binomial and normal distributions, one- and two-sample inference, simple linear regression, and reports in R Markdown.',
    skills: ['R', 'Data wrangling', 'Statistical inference', 'Linear regression', 'R Markdown'] },
  { code: 'STAT 340', title: 'Data Science Modeling II', short: 'DS Modeling II', term: 'Fall 2025', credits: 4, grade: 'A', track: 'data', row: 1,
    about: 'Exploring, modelling and analysing data in R: probability models, the central limit theorem, Monte Carlo simulation, hypothesis testing, Bayesian inference, linear and logistic regression, ANOVA, the bootstrap, random forests and cross-validation, in a project setting.',
    skills: ['Monte Carlo simulation', 'Hypothesis testing', 'Bayesian inference', 'Logistic regression', 'Bootstrap and cross-validation', 'Random forests'] },
  { code: 'STAT 479', title: 'Introduction to Causal Inference in Data Analysis', short: 'Causal Inference', term: 'Spring 2026', credits: 3, grade: 'A', track: 'data', row: 1,
    about: 'Special-topics course on causal inference: when and how observational data can answer "what if" questions rather than just describe correlations.',
    skills: ['Causal reasoning', 'Confounding and adjustment', 'Experimental vs observational data'] },

  // Interfaces & ethics
  { code: 'CS 571', title: 'Building User Interfaces', short: 'Building UIs', term: 'Spring 2025', credits: 3, grade: 'AB', track: 'people', row: 0,
    about: 'Software development of user interfaces: event-driven and direct-manipulation paradigms, capturing and responding to pointing, text, touch, speech and context, and platform toolkits for web, mobile and voice interfaces.',
    skills: ['Event-driven UIs', 'React', 'React Native', 'Mobile and voice interfaces', 'Design languages and layout', 'Input handling'],
    used: [{ label: 'JustBook: React admin app and Capacitor mobile apps', href: '/projects/justbook/' }] },
  { code: 'CS 570', title: 'Introduction to Human-Computer Interaction', short: 'HCI', term: 'Spring 2026', credits: 3, grade: 'A', track: 'people', row: 0,
    about: 'User-centred software design: understanding user needs, designing and prototyping interface solutions, and evaluating usability, applied across several interface types in group projects.',
    skills: ['User research', 'Prototyping', 'Usability evaluation', 'User-centred design'],
    used: [{ label: 'JustBook: booking flow and admin portal design', href: '/projects/justbook/' }] },
  { code: 'LIS 461', title: 'Data and Algorithms: Ethics and Policy', short: 'Data Ethics & Policy', term: 'Spring 2026', credits: 4, grade: 'A', track: 'people', row: 1,
    about: 'Ethical, legal and policy issues in analytics, big data and algorithmic decision making: the major debates, case studies, and applying moral reasoning and legal concepts to critique real arguments.',
    skills: ['Data ethics', 'Privacy and policy', 'Algorithmic accountability', 'Case analysis'] },

  // Entrepreneurship certificate
  { code: 'MHR 305', title: 'Human Resource Management', short: 'HR Management', term: 'Spring 2024', credits: 3, grade: 'A', track: 'venture',
    about: 'Strategy-driven human resource management: staffing, training, labour relations, pay and communication, and how HR policy lines up with structure and culture.',
    skills: ['Hiring and staffing', 'People management'] },
  { code: 'GEN BUS 311', title: 'Fundamentals of Management and Marketing', short: 'Mgmt & Marketing', term: 'Fall 2024', credits: 3, grade: 'AB', track: 'venture',
    about: 'A high-level tour of business practice: management, marketing, strategy, entrepreneurship, ethics, supply chain and international business.',
    skills: ['Marketing fundamentals', 'Strategy'] },
  { code: 'MHR 322', title: 'Introduction to Entrepreneurship', short: 'Entrepreneurship', term: 'Spring 2025', credits: 3, grade: 'A', track: 'venture',
    about: 'Foundations of entrepreneurship: founding teams, customer and market discovery, and the steps to start and grow a business.',
    skills: ['Customer discovery', 'Founding a venture'],
    used: [{ label: 'JustBook', href: '/projects/justbook/' }] },
  { code: 'MHR 441', title: 'Technology Entrepreneurship', short: 'Tech Entrepreneurship', term: 'Fall 2025', credits: 3, grade: 'A', track: 'venture',
    about: 'Starting and running technology-based ventures: the nature of technology opportunities, legal form and intellectual property, and how technology solves economic and social problems.',
    skills: ['Technology ventures', 'Legal form and IP'],
    used: [{ label: 'JustBook', href: '/projects/justbook/' }] },
];

// Formal prerequisites (solid) and courses that build on each other without a formal requisite (dashed).
export interface Edge { from: string; to: string; dashed?: boolean }
export const edges: Edge[] = [
  { from: 'CS 200', to: 'CS 300' }, { from: 'CS 300', to: 'CS 400' },
  { from: 'CS 252', to: 'CS 354' }, { from: 'CS 300', to: 'CS 354' },
  { from: 'CS 354', to: 'CS 564' }, { from: 'CS 400', to: 'CS 564' }, { from: 'CS 400', to: 'CS 544' },
  { from: 'MATH 221', to: 'MATH 222' }, { from: 'MATH 222', to: 'MATH 340' }, { from: 'MATH 221', to: 'CS 240' },
  { from: 'CS 240', to: 'CS 577' }, { from: 'CS 400', to: 'CS 577' },
  { from: 'MATH 340', to: 'CS 540' }, { from: 'CS 300', to: 'CS 540' },
  { from: 'CS 220', to: 'CS 320' }, { from: 'STAT 240', to: 'STAT 340' }, { from: 'STAT 340', to: 'STAT 479', dashed: true },
  { from: 'CS 400', to: 'CS 571' }, { from: 'CS 571', to: 'CS 570', dashed: true },
  { from: 'MHR 322', to: 'MHR 441', dashed: true },
];

// Everything else on the transcript: general education, electives and transfer credit.
export const otherCourses: { code: string; title: string; term: Term; credits: number; grade: 'A' | 'AB' | 'T' }[] = [
  { code: 'PHYSICS 103', title: 'General Physics', term: 'Transfer', credits: 4, grade: 'T' },
  { code: 'PHYSICS 104', title: 'General Physics', term: 'Transfer', credits: 4, grade: 'T' },
  { code: 'NAT SCI', title: 'Natural science elective', term: 'Transfer', credits: 3, grade: 'T' },
  { code: 'COUN PSY 125', title: 'Wisconsin Experience Seminar', term: 'Fall 2023', credits: 1, grade: 'A' },
  { code: 'LIS 202', title: 'Divides and Differences: Multicultural', term: 'Fall 2023', credits: 3, grade: 'A' },
  { code: 'PHILOS 104', title: 'Philosophy and Natural Science', term: 'Fall 2023', credits: 3, grade: 'A' },
  { code: 'NUTR SCI 132', title: 'Nutrition Today', term: 'Spring 2024', credits: 3, grade: 'A' },
  { code: 'PHILOS 101', title: 'Introduction to Philosophy', term: 'Fall 2024', credits: 4, grade: 'A' },
  { code: 'ENGL 120', title: 'Introduction to Theatre and Dramatic Literature', term: 'Spring 2025', credits: 3, grade: 'A' },
  { code: 'ENGL 160', title: 'Truth and Crime', term: 'Fall 2025', credits: 3, grade: 'A' },
  { code: 'SOC WORK 105', title: 'Health Care: An Interdisciplinary Approach', term: 'Fall 2025', credits: 2, grade: 'A' },
  { code: 'BIOCHEM 104', title: 'Molecules to Life and Science', term: 'Spring 2026', credits: 3, grade: 'A' },
];

export const termGpa: { term: Term; gpa: number; credits: number; deansList: boolean }[] = [
  { term: 'Fall 2023', gpa: 3.893, credits: 14, deansList: true },
  { term: 'Spring 2024', gpa: 4.0, credits: 16, deansList: true },
  { term: 'Summer 2024', gpa: 4.0, credits: 3, deansList: false },
  { term: 'Fall 2024', gpa: 3.917, credits: 18, deansList: true },
  { term: 'Spring 2025', gpa: 3.906, credits: 16, deansList: true },
  { term: 'Fall 2025', gpa: 4.0, credits: 18, deansList: true },
  { term: 'Spring 2026', gpa: 4.0, credits: 17, deansList: true },
];

export const summary = {
  gpa: '3.956',
  credits: 121,
  transferCredits: 19,
  gradedCredits: 102,
  degrees: ['B.S. Computer Sciences', 'B.S. Data Science', 'Certificate in Entrepreneurship'],
  conferred: 'May 10, 2026',
  honors: 'Graduated with Distinction',
};
