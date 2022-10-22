import React from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { DynamicEditorType } from "../../interface/editor";
import { editorContent } from "../../interface/write";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef }: DynamicEditorType) {
      return <RQ ref={forwardedRef} />;
    };
  },
  { ssr: false }
);

hljs.configure({
  languages: ["typescript", "javascript", "python", "java", "cpp"],
});

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
  "image",
];

const Editor = ({ content, setContent }: editorContent) => {
  const quillRef = React.useRef();

  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      // @ts-ignore
      const file = input.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await axios.post(
          "http://localhost:8000/photo",
          formData
        );

        console.log(
          `${result.data.href} 업로드 성공, 아이디는 ${result.data.photo_id}`
        );
        const IMG_URL = result.data.photo_id;
        // @ts-ignore
        const editor = quillRef.current?.getEditor();
        console.log(editor);
        const range = editor.getSelection();
        editor.insertText(range, "\n");
        editor.insertEmbed(
          range.index,
          "image",
          `http://localhost:8000/get/photo/${IMG_URL}`
        );
      } catch (error) {
        alert("이미지 업로드에 실패했습니다.");
      }
    });
  };

  const modules = React.useMemo(() => {
    return {
      syntax: {
        highlight: (text: string) => hljs.highlightAuto(text).value,
      },
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          [
            "image",
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
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  return (
    <ReactQuill
      forwardedRef={quillRef}
      theme={"snow"}
      modules={modules}
      formats={formats}
      value={content}
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
};

export default Editor;
