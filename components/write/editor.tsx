import React from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import useStore from "../../context/useStore";
import { editorContentInterface } from "../../interface/write/editor";

const Quill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <h1 style={{ textAlign: "center" }}>Loading ...</h1>,
});
hljs.configure({
  languages: ["javascript", "python", "java", "cpp"],
});

const modules = {
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ header: "1" }, { header: "2" }],
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

export default React.memo(function Home() {
  const { content, setContent }: editorContentInterface = useStore();

  return (
    <Quill
      theme={"snow"}
      value={content}
      modules={modules}
      formats={formats}
      onChange={(event: string) => {
        setContent(event);
        console.log(content);
      }}
      style={{
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    />
  );
});
