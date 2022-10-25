export interface UserPromiseType {
  response: string;
  userData?: UserInfoType;
}

export interface UserInfoType {
  user_id: number;
  description: string;
  github: string;
  nickname: string;
}
