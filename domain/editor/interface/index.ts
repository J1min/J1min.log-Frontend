import React from "react";

export interface DynamicEditorType {
  forwardedRef?: any;
  theme?: string;
  modules?: any;
  formats?: string[];
  value?: string;
  onChange?: any;
  style?: React.CSSProperties;
}

export interface ImagePostResponseType {
  photo_id: number;
  href: string;
  board_id: number;
}

export interface EditorContentPropsType {
  content: string;
  setContent: (input: string) => void;
}
