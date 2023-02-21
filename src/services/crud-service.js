import axios from 'axios';
  



class CrudService {
  async getCourses(page = 1) {
    const response = await axios.get(`const url = 'http://localhost:8000/api/courses';
    ${page}`);
    return response.data;
  }

  async getPersonImage(url) {
    const id = url.match(/\/(\d+)\/$/)[1];
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    return imageUrl;
  }

}

export const swService = new CrudService();
