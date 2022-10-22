import instance from "../../lib/instance";
import { POST_EDITOR_IMAGE } from "../../constants";
import { ImagePostResponseType } from "../../interface/editor";

export const postEditorImage = async (
  file: File
): Promise<ImagePostResponseType> => {
  console.log(file);
  const formData = new FormData();
  formData.append("file", file);
  try {
    const { data } = await instance.post(POST_EDITOR_IMAGE, formData);
    return data;
  } catch (err) {
    throw err;
  }
};
