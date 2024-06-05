import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`); // pour l'url popular de l'api
        return response.data.results;
    }


    static async fetchRecommendations(tvShowId) {
        const response = await axios.get(
            `${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}`); // pour l'url recommendations api
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(
            `${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`); // pour la search bar 
        return response.data.results;
    }
}

