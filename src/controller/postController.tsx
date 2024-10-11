import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';
export const fetchPostDetails = async (activePost: number) => {
  try {
    const response = await axios.get(`${baseUrl}posts/${activePost}`);
    if (response.data) {
      return response.data;
    }
    return {
      title: '',
      body: '',
    };
  } catch (error) {
    console.error('Error fetching posts detail :', error);
  } finally {
  }
};

export const fetchPosts = async (page: number) => {
  try {
    const response = await axios.get(`${baseUrl}posts?_page=${page}&_limit=10`);
    if (response.data.length > 0) {
      return response.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching posts list :', error);
  } finally {
  }
};
