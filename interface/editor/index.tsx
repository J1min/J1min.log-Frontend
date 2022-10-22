import React from "react";

export interface EditorType {
  quillRef: React.MutableRefObject<undefined>;
}

export interface DynamicEditorType {
  forwardedRef: any;
  props: any;
}
