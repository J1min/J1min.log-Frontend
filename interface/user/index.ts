export interface UserPromiseType {
  response: string;
  userData: {
    user_id: number;
    blog: string;
    github: string;
    nickname: string;
  };
}

export interface UserInfoType {
  user_id: number;
  blog: string;
  github: string;
  nickname: string;
}
