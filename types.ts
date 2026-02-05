
export interface Project {
  id: string;
  title: string;
  client: string;
  tag: string;
  iconClass: string;
  description: string;
  githubLink: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  summary: string;
  link: string;
}
