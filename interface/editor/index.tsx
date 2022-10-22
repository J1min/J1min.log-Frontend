import React from "react";

export interface EditorType {
  quillRef: React.MutableRefObject<undefined>;
}

export interface DynamicEditorType {
  forwardedRef: any;
  theme: string;
  modules: any;
  formats: string[];
  value: string;
  onChange: any;

  style: React.CSSProperties;
}
