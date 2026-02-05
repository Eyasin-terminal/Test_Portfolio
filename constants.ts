
import { Project, Experience, Article } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'gamezone',
    title: 'Data Integrity & Supply Chain Audit',
    client: 'GameZone Global',
    tag: 'MS Excel',
    iconClass: 'fas fa-file-excel',
    description: 'Performed a rigorous Data Cleaning & Logic Audit to produce a "Golden Dataset." Created a reliable foundation allowing analysts to answer executive questions with confidence.',
    githubLink: 'https://github.com/Eyasin-terminal/2026-Project-Data_Cleanign_GameZone-Class_B',
  },
  {
    id: 'sales-opt',
    title: 'Sales Funnel Optimization',
    client: 'Retail Growth Corp',
    tag: 'Power BI',
    iconClass: 'fas fa-chart-line',
    description: 'Analyzed drop-off points in the sales funnel to identify operational friction. Implemented tracking dashboards that recovered 15% of lost leads within the first quarter.',
    githubLink: '#',
  },
  {
    id: 'segmentation',
    title: 'Customer Segmentation Analysis',
    client: 'SaaS Product',
    tag: 'SQL',
    iconClass: 'fas fa-database',
    description: 'Developed advanced SQL queries to segment users based on behavioral data. Helped marketing teams reduce churn by 20% through targeted re-engagement campaigns.',
    githubLink: '#',
  }
];

export const WORK_HISTORY: Experience[] = [
  {
    id: 'zariwali',
    company: 'Zariwali',
    role: 'Co-Founder | Lead, Business Intelligence & Supply Chain',
    period: 'Nov 2024 - Present',
    description: 'Led strategic growth and operations for a women’s fashion brand through market gap analysis and customer persona mapping. Enabled physical expansion via a B2B shared-corner partnership. Managed end-to-end production and brand digital presence.',
    current: true,
  },
  {
    id: 'ragehouse',
    company: 'The Rage House',
    role: 'Former Co-Founder & Lead BI Analyst',
    period: 'Nov 2023 - Aug 2024',
    description: 'Built the core data infrastructure by designing an end-to-end customer intelligence system. Developed demographic and psychographic segmentation to inform pricing strategy and optimized workforce deployment.',
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'interview-calls',
    title: 'Why am I not getting interview calls—even with strong projects and a solid portfolio?',
    date: 'Jan 12, 2025',
    summary: 'The answer is often simpler than we think. Recruiters are not evaluating whether your projects are complex, but whether they solve business problems...',
    link: 'https://www.linkedin.com/posts/arafathandeyasin_dataanalytics-datacleaning-criticalthinking-activity-7418577341406253056-5SSz',
  },
  {
    id: 'founder-insights',
    title: 'Insights from a real co-founder of a first-of-its kind startup in Bangladesh',
    date: 'Dec 05, 2024',
    summary: 'The numbers are twisted due to company policy. While the Rage Room business model exists globally, I was among the founding members who introduced it to Bangladesh...',
    link: 'https://www.linkedin.com/posts/arafathandeyasin_%F0%9D%90%88%F0%9D%90%A7%F0%9D%90%AC%F0%9D%90%A2%F0%9D%90%A0%F0%9D%90%A1%F0%9D%90%AD%F0%9D%90%AC-%F0%9D%90%9F%F0%9D%90%AB%F0%9D%90%A8%F0%9D%90%A6-%F0%9D%90%9A-%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9A%F0%9D%90%A5-%F0%9D%90%9C%F0%9D%90%A8-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AE%F0%9D%90%A7%F0%9D%90%9D%F0%9D%90%9E%F0%9D%90%AB-activity-7409812896345460736-ZVas',
  }
];
