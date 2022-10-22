import React from "react";
import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { DynamicEditorType } from "../../interface/editor";
import { editorContent } from "../../interface/write";
import { postEditorImage } from "../../api/editor";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }: DynamicEditorType) {
      return <RQ ref={forwardedRef} {...props} />;
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

  const insertImage = (photo_id: number) => {
    const IMG_URL = photo_id;
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
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file: File = (input.files as FileList)[0];
      postEditorImage(file)
        .then((response) => {
          insertImage(response.photo_id);
        })
        .catch((error) => {
          console.log(error);
          alert("이미지 업로드에 실패했습니다.");
        });
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
    //eslint-disable-next-line
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
