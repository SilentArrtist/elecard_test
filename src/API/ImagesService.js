import axios from "axios";

export default class ImagesService {
    static async getAll() {
        const response = await axios.get('http://contest.elecard.ru/frontend_data/catalog.json')
        return response;
    }
}