import instance from "../../../lib/axios";
import { ScriptResponseType } from "../interface";

export const getRandomScript = async (): Promise<ScriptResponseType> => {
  try {
    const { data } = await instance.get(`/script/random`);
    return data;
  } catch (err) {
    throw err;
  }
};
