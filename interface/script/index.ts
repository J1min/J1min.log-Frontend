export interface ScriptResponseType {
  response: string;
  scriptData?: {
    script_content: string;
    author: string;
  };
}

export interface ScriptType {
  script_content: string;
  author: string;
}
