import instance from "../../lib/axios";
import {
  UserLeadsType,
  UserInfoPromiseType,
  UserLeadsPromiseType,
  UserProfilePromiseType,
  UserContactPromiseType,
} from "../../interface/user";

export const getUserInfo = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (): Promise<UserProfilePromiseType> => {
  try {
    const { data } = await instance.get(`/user/profile/all`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getLeads = async (): Promise<UserLeadsPromiseType> => {
  try {
    const { data } = await instance.get(`/user/leads/all`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getContact = async (): Promise<UserContactPromiseType> => {
  try {
    const { data } = await instance.get(`/user/contact/all`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCarrer = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPrize = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCertificate = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSkills = async (): Promise<UserInfoPromiseType> => {
  try {
    const { data } = await instance.get(`/user/1`);
    return data;
  } catch (error) {
    throw error;
  }
};
