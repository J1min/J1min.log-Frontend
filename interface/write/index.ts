import React from "react";

export interface EditorContent {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}
