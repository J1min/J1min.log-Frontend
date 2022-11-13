import instance from "../../../lib/instance";
import { ImagePostResponseType } from "../interface";

export const postEditorImage = async (
  file: File
): Promise<ImagePostResponseType> => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const { data } = await instance.post(`/photo`, formData);
    return data;
  } catch (err) {
    throw err;
  }
};

export const postThumbnail = (
  event: React.ChangeEvent<HTMLInputElement>,
  setThumbnail: React.Dispatch<React.SetStateAction<string>>
) => {
  if (event.target.files != null) {
    postEditorImage(event.target!.files[0])
      .then((response) => {
        setThumbnail(
          `${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}/${response.href}`
        );
      })
      .catch((_) => {
        alert("이미지 업로드에 실패했습니다.");
      });
  }
};
