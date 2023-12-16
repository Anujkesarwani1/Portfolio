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
