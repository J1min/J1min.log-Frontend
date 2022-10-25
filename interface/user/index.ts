export interface UserPromiseType {
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
