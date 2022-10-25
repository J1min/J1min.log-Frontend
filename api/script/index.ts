import instance from "../../lib/instance";
import { ScriptResponseType } from "../../interface/script";

export const getRandomScript = async (): Promise<ScriptResponseType> => {
  try {
    const response = await instance.get(`/script/random`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
