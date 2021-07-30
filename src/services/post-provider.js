import axios from 'axios';

export default class PostProvider {
  constructor() {}

  async getPosts() {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return data;
    } catch (e) {
      throw new Error('error');
    }
  }
}
