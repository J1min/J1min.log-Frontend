import React, { MutableRefObject } from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import useStore from "../../context/useStore";
import { editorContentInterface } from "../../interface/write/editor";

const Quill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
hljs.configure({
  languages: ["javascript", "python", "java", "cpp"],
});

const modules = {
  syntax: {
    highlight: (text: any) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "code-block",
      "link",
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "code-block",
];

export default function Home() {
  const { content, setContent }: editorContentInterface = useStore();

  const quillRef = React.useRef<MutableRefObject<null>>(null);
  return (
    <Quill
      ref={quillRef}
      theme={"snow"}
      placeholder={"설명을 입력해주세요"}
      value={content}
      modules={modules}
      formats={formats}
      onChange={(event: string) => {
        setContent(event);
        console.log(content);
      }}
      style={{
        width: "80%",
        height: "450px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
}
