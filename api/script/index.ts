import instance from "../../lib/instance";
import { ScriptResponseType } from "../../interface/script";
import { GET_RANDOM_SCRIPT } from "../../constants";

export const getRandomScript = async (): Promise<ScriptResponseType> => {
  try {
    const response = await instance.get(GET_RANDOM_SCRIPT);
    return response.data;
  } catch (err) {
    throw err;
  }
};
