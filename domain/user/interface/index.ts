export interface UserInfoPromiseType {
  response: string;
  code: number;
  userData?: UserInfoType;
}

export interface UserInfoType {
  user_id: number;
  description: string;
  github: string;
  nickname: string;
}

export interface UserLeadsPromiseType {
  response: string;
  code: number;
  userData?: UserLeadsType[];
}

export interface UserLeadsType {
  ended_at: string;
  lead_id: number;
  lead_name: string;
  started_at: string;
  user_id: number;
}

export interface UserContactPromiseType {
  response: string;
  code: number;
  userData?: UserContactType;
}

export interface UserContactType {
  phone_number: string;
  email: string;
}

export interface UserProfilePromiseType {
  response: string;
  code: number;
  userData?: UserProfileType;
}

export interface UserProfileType {
  school: string;
  birthday: string;
}
