import axios from 'axios';

//const baseURL = '';
//const ax = axios.create({ baseURL });

//Posts List
export const getPostsList = async () => {
  let response;
  try {
    response = await axios.get('posts.json');
    console.log('response: ', response);
  } catch {
    throw new Error('Posts loading failed');
  }
  return response.data;
};