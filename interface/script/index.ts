export interface ScriptDataType {
  script_content: string;
  author: string;
}

export interface ScriptResponseType {
  response: string;
  code: number;
  scriptData?: ScriptDataType;
}

