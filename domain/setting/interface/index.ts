export interface ScriptType {
  script_content: string;
  author: string;
}

export interface UserLeadsRequestType {
  lead_name: string;
  started_at: string;
  ended_at: string;
  user_id: number;
}

export interface UserLeadsResponseType {
  code: number;
  response: string;
  userData?: UserLeadsRequestType;
}

export interface UserLeadsDataType {
  lead_name: string;
  started_at: string;
  ended_at: string;
  user_id: number;
}

export interface LeadsFormValue {
  lead_name: string;
  started_at: string;
  ended_at: string;
}
