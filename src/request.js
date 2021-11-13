import axios from 'axios';

//export const baseURL = 'http://localhost:8080/';

//const host = window.location.host;
//const protocol = window.location.protocol;
//const baseURL = protocol + '//' + host;
const baseURL = process.env.BASE_URL;
const path = process.env.NODE_ENV === 'production' ? 'vue-blog/' : '';
const newURL = `${baseURL}${path}`;
console.log('ENV: ', process.env.NODE_ENV, 'baseURL: ', baseURL);
console.log('baseURL: ', baseURL, 'path: ', path, 'newURL: ', newURL);


const ax = axios.create({baseURL});

//Posts List
export const getPostsList = async () => {
  let response;
  try {
    response = await ax.get('posts.json');
    console.log('response: ', response);
  } catch {
    throw new Error('Posts loading failed');
  }
  return response.data;
};

//Single post
export const getSinglePost = async postId => {
  const url = `post_${postId}.json`;
  let response;
  try {
    response = await ax.get(url);
    console.log('single response: ', response);
  } catch {
    throw new Error('Single post loading failed');
  }
  return response.data;
};