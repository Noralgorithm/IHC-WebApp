import axios from "axios";

const BASE_URL = 'https://backend.playoffside.online/stickers';

export const obtain = async (token) => {
  try {
    const { data } = await axios.get(BASE_URL + '/obtain/1', {
      headers: {
        Authorization: 'Bearer '+ token 
      }
    });
    return data;
  } catch(e) {
    throw new Error(e);
  }
};