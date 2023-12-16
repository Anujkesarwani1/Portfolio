export interface SkillList {
  id: number;
  name: string;
}

export interface ExperienceList {
  id: number;
  img: string;
  role: string;
  company: string;
  date: string;
  desc?: string;
  skills?: string[] | SkillList[];
  doc?: string;
}

export interface Member {
  name: string;
  img: string;
  linkedin: string;
  github: string;
}

export interface ProjectList {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp: string;
  member?: Member[];
}

export interface EducationList {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}
