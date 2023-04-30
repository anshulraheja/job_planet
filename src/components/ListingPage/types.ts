export interface IRecruitData {
  id: number;
  bookmark: boolean;
  image: string;
  title: string;
  occupation_names: {
    level1: string[];
    level2: string[];
  };
  annual: {
    type: number[];
    years: number;
    preferential: boolean;
    annual_text: string[];
  };
  skills: string[];
  appeal: string;
  matching_keyword: string;
  review: string;
  reward: number;
  job_applicant_type: string;
  fee: string;
  company: {
    id: number;
    logo: string;
    name: string;
    grade: number;
    grade_count: number;
    ratings: {
      type: string;
      rating: number;
    }[];
  };
  created_at: string;
  updated_at: string;
}
export interface IListData {
  recruits: IRecruitData[];
}
export interface IListingData {
  status: string;
  code: number;
  total_count: number;
  data: IListData;
  csrf: any;
}
