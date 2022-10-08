import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import React from "react";

const Quill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],

    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
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
  "image",
  "video",
];

export default function Home() {
  const [content, setContent] = React.useState("");

  return (
    <Quill
      theme={"snow"}
      id={"description"}
      placeholder={"설명을 입력해주세요"}
      value={content || ""}
      modules={modules}
      formats={formats}
      onChange={(event) => {
        setContent(event);
        console.log(content);
      }}
    />
  );
}
